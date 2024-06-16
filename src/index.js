// import bootstrap from 'bootstrap'
// import { v2 as cloudinary } from 'cloudinary';
import {
    postLoginUser,
    postLogoutUser,
    getUsers,
    postSignUp,
    getUserProfile,
} from './partials/requests';
import {
    markupModalEvent,
    markupModalLogin,
    markupModalReg,
} from './partials/markup';

// Menu after login
const menuToggle = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const div = document.querySelector('div.menu');

const btns = document.querySelectorAll('.js-btns');
const modals = document.querySelectorAll('.modal');
// const jsList = document.querySelector('.js-list')
const jsbtn = document.querySelector('.js-button-search');

async function menuShowHide() {
    // const avatar = document.querySelector('#menu-avatar');

    menuToggle.classList.toggle('menu-active');
    menuBtn.style.opacity = 1;

    if (div.classList.contains('menu-active')) {
        let user = await getUserProfile();
        document.querySelector('#menu-avatar').src = user;
        menuBtn.style.opacity = 0;
    }
}

function mainMenu() {
    menuBtn.addEventListener('click', eClick => {
        eClick.preventDefault();
        menuShowHide();
    });
    // div.addEventListener('mouseleave', eMouse => {
    //     eMouse.preventDefault();
    //     // console.dir(!e.currentTarget.classList.contains('menu-active'));
    //     menuShowHide();
    // });
}

mainMenu();

btns.forEach((btn, index) => {
    let modal = modals[index];

    btn.addEventListener('click', e => {
        e.preventDefault();
        modal.style.display = 'block';

        switch (index) {
            case 0:
                modal.insertAdjacentHTML('afterbegin', markupModalLogin);
                break;
            case 1:
                modal.insertAdjacentHTML('afterbegin', markupModalReg);
                onCheckBox();
                break;
            default:
                console.dir(index);
        }
        onCloseClickModal(modal);
        onCloseEscModal(modal);
    });
});

function onCheckBox() {
    const inputImg = document.querySelector('#inputImg');
    const checkBox = document.querySelector('#idCheckBox');

    checkBox.addEventListener('click', function () {
        inputImg.disabled = !this.checked;
    });
}

function onCloseClickModal(modal) {
    const closeModal = modal.querySelector('.close');

    closeModal.addEventListener('click', e => {
        e.preventDefault();
        closeModalHandler(modal);
    });
}

function onCloseEscModal(modal) {
    document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            closeModalHandler(modal);
        }
    });
}

function closeModalHandler(modal) {
    modal.style.display = 'none';
    modal.innerHTML = '';
}

function loginData() {
    const loginBtn = document.querySelector('#loginBtn');
    // console.dir(formData);

    loginBtn.addEventListener('click', () => {
        console.dir('Open login form');
        const sendForm = document.querySelector('.form');
        const sndBtn = sendForm.lastElementChild;
        const closeElement = sendForm.parentNode.parentElement;

        // console.dir(sndBtn);
        sendForm.addEventListener('submit', async data => {
            data.preventDefault();
            const {
                target: { email, password },
            } = data;
            const sendData = {
                username: email.value,
                password: password.value,
            };
            // console.dir(sendForm.lastElementChild);
            await postLoginUser(sendData);

            sndBtn.setAttribute('disabled', '');
            email.disabled = true;
            password.disabled = true;
            setTimeout(closeModalHandler, 3000, closeElement);
        });
        // sendForm.lastElementChild.setAttribute('disabled', "")
    });
}

loginData();

function logoutUser() {
    const logout = document.querySelector('.logout-item');
    // console.dir(logout);
    logout.addEventListener('click', async e => {
        e.preventDefault();
        await postLogoutUser();
    });
}

logoutUser();

function signupData() {
    const regBtn = document.querySelector('#registerBtn');

    regBtn.addEventListener('click', e => {
        console.dir('Open reg form');
        const sendRegForm = document.querySelector('#fileImg');
        const sndBtn = sendRegForm.lastElementChild;
        const closeElement = sendRegForm.parentNode.parentElement;

        // console.dir(sendRegForm.elements[4]);
        // console.dir(sndBtn);
        sendRegForm.addEventListener('submit', async data => {
            data.preventDefault();
            let imageAvatar = sendRegForm.elements[4].files[0];

            const {
                target: { username, email, password, avatar },
            } = data;

            const sendData = {
                username: username.value,
                email: email.value,
                password: password.value,
                avatar: 'avatar',
            };

            const jsonData = JSON.stringify(sendData);
            await postSignUp(jsonData, imageAvatar);

            sndBtn.setAttribute('disabled', '');
            username.disabled = true;
            email.disabled = true;
            password.disabled = true;
            avatar.disabled = true;

            setTimeout(closeModalHandler, 3000, closeElement);
        });
    });
}
signupData();

function searchUsers() {
    jsbtn.addEventListener('click', async e => {
        // e.preventDefault();
        console.dir('Search users');
        await getUsers();
    });
}

searchUsers();

function eventModal(name, text, color, addtext) {
    const eventModal = document.querySelector('.eventModal');

    eventModal.insertAdjacentHTML(
        'afterbegin',
        markupModalEvent(name, text, color, addtext)
    );
    eventModal.style.display = 'block';

    const eBtn = document.querySelector('.eBtn');
    eBtn.addEventListener('click', e => {
        e.preventDefault();
        closeModalHandler(eventModal);
    });
}

export { eventModal };
