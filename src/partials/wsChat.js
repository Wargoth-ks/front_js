import { axiosInstance } from './requests';

let socket;

async function getUserData() {
    return await axiosInstance
        .get('/users/my_profile', {
            headers: {
                Accept: 'application/json',
            },
        })
        .then(resp => resp.data)
        .catch(error => {
            let err = error.response;
            let msg = `${err.data.detail}`;
            console.dir('User profile ERROR: ', error.response);
            eventModal(
                ...messUnAuth,
                msg.charAt(0).toUpperCase() + msg.slice(1)
            );
        });
}

const showJoinModal = () => {
    document.getElementById('chat').style.display = 'none';
    document.getElementById('message-input').style.display = 'none';
    document.getElementById('usernameModal').style.display = 'block';
    closeModalUsername();
};

const closeModalUsername = () => {
    const client = document.querySelector('.chatClient');
    client.classList.remove('modal-show');
    client.innerHTML = '';
};

const joinChat = () => {
    document.getElementById('chat').style.display = 'block';
    document.getElementById('message-input').style.display = 'block';
    document.getElementById('usernameModal').style.display = 'none'; // Assuming you manage modal display with CSS classes
};

function initializeWebSocket() {
    // socket = new WebSocket('ws://localhost:8000/api/chat/ws');
    socket = new WebSocket('wss://' + process.env.URL + '/chat/ws');
    console.dir(socket);

    socket.onopen = () => {
        console.log('WebSocket connection established.');
    };

    socket.onmessage = e => {
        getUserData();
        const data = JSON.parse(e.data);
        const msgClass = data.isMe ? 'user-message' : 'other-message';
        const sender = data.isMe ? 'You' : data.username;
        const message = data.data;

        const messageElement = document.createElement('li');
        messageElement.classList.add('clearfix');

        const divElement = document.createElement('div');
        divElement.classList.add(msgClass);
        divElement.textContent = sender + ': ' + message;

        messageElement.appendChild(divElement);
        const messagesContainer = document.getElementById('messages');
        messagesContainer.appendChild(messageElement);

        requestAnimationFrame(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });
        // setInterval(function () {
        //     let elem = document.querySelector('#messages');
        //     elem.scrollTop = elem.scrollHeight;
        // }, 1000);
    };

    socket.onerror = () => {
        console.error('WebSocket error. Please rejoin the chat.');
        // showJoinModal();
        joinChat();
    };

    socket.onclose = e => {
        if (e.code === 1000) {
            console.log('WebSocket closed normally.');
            socket.close();
        } else {
            console.error(
                'WebSocket closed with error code: ' +
                    e.code +
                    '. Please rejoin the chat.'
            );
            setTimeout(() => {
                initializeWebSocket();
            }, 5000);
            joinChat();
        }
    };
}

async function joinWS() {
    document.getElementById('join').addEventListener('click', e => {
        e.preventDefault();
        initializeWebSocket();
        joinChat();
    });
}

async function sendWS() {
    document.getElementById('send').addEventListener('click', async e => {
        e.preventDefault();
        await sendMessage();
    });
}

async function closeRegWS() {
    document.querySelector('#close-modal').addEventListener('click', e => {
        e.preventDefault();
        closeModalUsername();
    });
}

async function sendMessageWS() {
    document.getElementById('message').addEventListener('keydown', async e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await sendMessage();
        }
    });
}

async function leaveWS() {
    document.getElementById('leave').addEventListener('click', async e => {
        e.preventDefault();
        if (socket) {
            await socket.close(1000, 'User left');
            closeModalUsername();
        }
    });
}

const sendMessage = async () => {
    const message = document.getElementById('message').value;
    if (message) {
        await socket.send(
            JSON.stringify({
                message: message,
                username: document.getElementById('usernameInput').value,
            })
        );
        document.getElementById('message').value = '';
    }
};

export {
    initializeWebSocket,
    joinWS,
    sendWS,
    closeRegWS,
    sendMessageWS,
    leaveWS,
};
