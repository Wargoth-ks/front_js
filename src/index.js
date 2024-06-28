import {
    postLoginUser,
    postLogoutUser,
    getUsers,
    postSignUp,
    getUserProfile,
    deleteContact,
    updateContact,
} from './partials/requests';

import {
    markupModalEvent,
    markupModalLogin,
    markupModalReg,
    marcupCard,
    markupUpdateProfile,
    markupNavbarItems,
} from './partials/markup';

import { blinkAnim, iterOneAnim, animCard } from './partials/anim';
import { cleanContent, cleanIfAuthorized } from './partials/clean';

// Menu after login
const menuToggle = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const div = document.querySelector('div.menu');

const btns = document.querySelectorAll('.js-btns');
const modals = document.querySelectorAll('.modal');
// const jsList = document.querySelector('.js-list')

function loadingPage() {
    window.addEventListener('DOMContentLoaded', function () {
        toggleLoader();
    });

    window.addEventListener('load', function () {
        document.readyState === 'complete'
            ? setTimeout(() => toggleLoader(), 2000)
            : document.addEventListener('readystatechange', () => {
                  if (document.readyState === 'complete') {
                      setTimeout(() => toggleLoader(), 2000);
                  }
              });
    });
}

loadingPage();

function navItemsLoad() {
    const reg = document.querySelector('.jsListItems');
    reg.style.opacity = 1;
}

setTimeout(navItemsLoad, 2000);

function toggleLoader() {
    const loader = document.querySelector('.loadPage').classList;

    if (loader.contains('modal-show')) {
        loader.remove('modal-show');
    } else {
        loader.add('modal-show');
    }
}

async function authUser() {
    const items = document.querySelector('.jsListItems');
    items.insertAdjacentHTML('afterbegin', markupNavbarItems());
}

async function menuShowHide() {
    // const avatar = document.querySelector('#menu-avatar');

    menuToggle.classList.toggle('menu-active');
    menuBtn.style.opacity = 1;

    if (div.classList.contains('menu-active')) {
        let avatar = await getUserProfile();
        document.querySelector('#menu-avatar').src = avatar;
        menuBtn.style.opacity = 0;
    }
}

function mainMenu() {
    menuBtn.addEventListener('click', eClick => {
        eClick.preventDefault();
        menuShowHide();
    });
}

mainMenu();

function initialModals() {
    btns.forEach((btn, index) => {
        let modal = modals[index];

        btn.addEventListener('click', e => {
            e.preventDefault();

            modal.classList.add('modal-show');

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

            modal.firstChild.classList.add('modal-anim');

            iterOneAnim(modal);
            blinkAnim(modal);

            onCloseClickModal(modal);
            onCloseEscModal(modal);
        });
    });
}

initialModals();

function onCheckBox() {
    document
        .querySelector('#idCheckBox')
        .addEventListener('click', function () {
            document.querySelector('#inputImg').disabled = !this.checked;
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
    modal.classList.remove('modal-show');
    // modal.style.display = 'none';
    modal.innerHTML = '';
}

function loginData() {
    const loginBtn = document.querySelector('#aLog');
    // console.dir(formData);

    loginBtn.addEventListener('click', e => {
        console.dir('Open login form');
        e.preventDefault();
        const sendForm = document.querySelector('.form');
        const sndBtn = sendForm.lastElementChild;
        const closeElement = sendForm.parentNode.parentElement;

        sendForm.addEventListener('submit', async data => {
            data.preventDefault();
            sndBtn.style.background = 'black';
            toggleLoader();
            const {
                target: { email, password },
            } = data;
            const sendData = {
                username: email.value,
                password: password.value,
            };
            // console.dir(sendForm.lastElementChild);
            await postLoginUser(sendData);
            cleanIfAuthorized();
            sndBtn.setAttribute('disabled', '');
            email.disabled = true;
            password.disabled = true;

            setTimeout(closeModalHandler, 2000, closeElement);
            toggleLoader();
            authUser();
            searchUsers()
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
        menuShowHide();
        cleanContent();
    });
}

logoutUser();

function signupData() {
    const regBtn = document.querySelector('#aReg');

    regBtn.addEventListener('click', e => {
        e.preventDefault();
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

async function searchUsers() {
    let jsbtn = document.querySelector('.js-button-search');
    jsbtn.addEventListener('click', async e => {
        e.preventDefault();
        console.dir('Search users');
        await getUsers();
    });
}

async function contactProfile(listCards, data) {
    const cardProfile = document.querySelector('.cardProfile');

    [...listCards.children].forEach((card, index) => {
        card.addEventListener('click', async e => {
            await e.preventDefault();

            if (e.target == card.children[2].children[0]) {
                // console.dir('Card: ', listCards.children);
                // console.dir('Target: ', e.target);
                cardProfile.insertAdjacentHTML(
                    'afterbegin',
                    marcupCard(data[index])
                );
                cardProfile.classList.add('modal-show');
                await animCard(cardProfile);

                const btnCard = document.querySelector('.profileBtns');

                btnCard.addEventListener('click', async function (e) {
                    e.preventDefault();
                    // console.dir(e.target);
                    if (e.target.textContent == 'Delete') {
                        await deleteContact(
                            data[index].id,
                            cardProfile,
                            index,
                            listCards
                        );
                    } else if (e.target.textContent == 'Update') {
                        // console.dir('True');
                        await updateProfile(data[index], cardProfile);
                    }
                });
                await closeProfile(cardProfile);
            }
        });
    });
}

async function updateProfile(body, card) {
    const updProfile = document.querySelector('.update-profile');

    updProfile.classList.add('modal-show');
    updProfile.insertAdjacentHTML('afterbegin', markupUpdateProfile(body));

    closeModalHandler(card);

    const formUpd = document.querySelector('.contact-form');
    formUpd.addEventListener('submit', async e => {
        e.preventDefault();
        // console.dir(body.id, e.target.name.value);
        const { name, surname, email, phone, birthday } = e.target;
        await updateContact(body.id, {
            name: name.value,
            surname: surname.value,
            email: email.value,
            phone: phone.value.replaceAll('-', ''),
            birthday: birthday.value,
        });
        closeModalHandler(updProfile);
        getUsers();
    });

    onCloseClickModal(updProfile);
    onCloseEscModal(updProfile);
}

async function closeProfile(card) {
    let btnProfile = document.querySelector('.cancelButton');

    btnProfile.addEventListener('click', async e => {
        e.preventDefault();
        closeModalHandler(card);
    });
}

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
        eventModal.style.display = 'none';
        closeModalHandler(eventModal);
    });
}

export {
    authUser,
    searchUsers,
    menuShowHide,
    eventModal,
    iterOneAnim,
    blinkAnim,
    contactProfile,
};
