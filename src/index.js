// import bootstrap from 'bootstrap'
import { getStatusServer, postLoginUser, getUsers } from './partials/requests';
import { markupModalLogin, markupModalReg } from './partials/markup';
// getStatusServer();

//// Menu after login
const menuBtn = document.querySelector('.menu-btn');
const menuToggle = document.querySelector('.menu');
const div = document.querySelector('div.menu');

const btns = document.querySelectorAll('.js-btns');
const modals = document.querySelectorAll('.modal');
// const jsList = document.querySelector('.js-list')

function menuShowHide() {
    menuToggle.classList.toggle('menu-active');
    menuBtn.style.opacity = 1;

    if (div.classList.contains('menu-active')) {
        menuBtn.style.opacity = 0;
    }
}

function mainMenu() {
    menuBtn.addEventListener('click', eClick => {
        eClick.preventDefault();
        menuShowHide();
    });
    div.addEventListener('keydown', evEsc => {
        // console.dir(e);
        evEsc.preventDefault();
        if (evEsc.code === 'Escape') {
            evEsc.currentTarget.classList.remove('menu-active');
        }
    });
    div.addEventListener('mouseleave', eMouse => {
        eMouse.preventDefault();
        // console.dir(!e.currentTarget.classList.contains('menu-active'));
        menuShowHide();
    });
}

mainMenu();

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
            postLoginUser(sendData);

            sndBtn.setAttribute('disabled', '');
            email.disabled = true;
            password.disabled = true;
            setTimeout(closeModalHandler, 3000, closeElement);
        });
        // sendForm.lastElementChild.setAttribute('disabled', "")
    });
}

loginData();

const jsbtn = document.querySelector('.js-button-search');

async function searchUsers() {
    jsbtn.addEventListener('click', () => {
        console.dir('Search users');
        getUsers();
    });
}

searchUsers();
