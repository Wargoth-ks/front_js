// import bootstrap from 'bootstrap'
import { getStatusServer, postLoginUser } from './partials/requests';
// getStatusServer();

//// Menu after login
// const menuBtn = document.querySelector('.menu-btn')
// const menuToggle = document.querySelector('.menu')
// const jsList = document.querySelector('.js-list')

// function menuClick(e) {
//     e.preventDefault()
//     menuToggle.classList.toggle('menu-active');
//     jsList.classList.toggle('js-list-move');
// }

// menuBtn.addEventListener('click', menuClick)

import { markupModalLogin, markupModalReg } from './partials/markup';

const btns = document.querySelectorAll('.js-btns');
const modals = document.querySelectorAll('.modal');

btns.forEach((btn, index) => {
    let modal = modals[index];

    btn.addEventListener('click', () => {
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

    closeModal.addEventListener('click', () => {
        closeModalHandler(modal);
    });
}

function onCloseEscModal(modal) {
    document.addEventListener('keydown', e => {
        // console.dir(e);
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
        // sendForm.addEventListener('submit', data => {
        //     data.preventDefault();

        //     const {
        //         target: { email, password },
        //     } = data;
        //     postLoginUser({
        //         email: email.value,
        //         password: password.value,
        //     });
        // });
        sendForm.addEventListener('submit', e => {
            const data = new FormData(sendForm);
            console.dir(data);
        });
    });
}

loginData();
