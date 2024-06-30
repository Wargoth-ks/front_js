import {
    postLoginUser,
    postLogoutUser,
    getContacts,
    postSignUp,
    getUserProfile,
    deleteContact,
    updateContact,
    postAddContact,
} from './partials/requests.js';

import {
    markupModalEvent,
    markupModalLogin,
    markupModalReg,
    marcupCard,
    markupUpdateProfile,
    markupNavbarItems,
    markupContact,
} from './partials/markup.js';

import { blinkAnim, iterOneAnim, animCard } from './partials/anim';
import { cleanContent, cleanIfAuthorized } from './partials/clean';

// Menu after login
const menuToggle = document.querySelector('.menu');
const menuBtn = document.querySelector('.menuLinkBtn');
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

        sendForm.addEventListener('submit', data => {
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
            postLoginUser(sendData);
            cleanIfAuthorized();

            sndBtn.setAttribute('disabled', '');
            email.disabled = true;
            password.disabled = true;

            setTimeout(closeModalHandler, 2000, closeElement);
            toggleLoader();
            authUser();
            searchContacts();
            addContact()
        });
        // sendForm.lastElementChild.setAttribute('disabled', "")
    });
}

loginData();

function logoutUser() {
    const logout = document.querySelector('.logout-item');
    // console.dir(logout);
    logout.addEventListener('click', e => {
        e.preventDefault();
        postLogoutUser();
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
        sendRegForm.addEventListener('submit', data => {
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
            postSignUp(jsonData, imageAvatar);

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

async function searchContacts() {
    const formSearch = document.querySelector('.form-menu');
    const searchSelect = document.querySelector('#form-search-select');
    const searchInput = document.querySelector('#form-search-input');

    searchSelect.addEventListener('change', function () {
        const selectedOption = this.selectedOptions[0].text.toLowerCase();
        if (selectedOption === 'birthday') {
            searchInput.setAttribute('type', 'date');
            searchInput.value = new Date().toISOString().substring(0, 10);
        } else {
            searchInput.setAttribute('type', 'text');
        }
    });

    formSearch.addEventListener('submit', e => {
        e.preventDefault();
        const qValue = e.target[0].value.trim();
        const qValueUp = qValue.charAt(0).toUpperCase() + qValue.slice(1);
        const selectedOption =
            searchSelect.selectedOptions[0].text.toLowerCase();

        if (selectedOption === 'birthday') {
            getContacts(`?${selectedOption}=${e.target[0].value}`);
        } else {
            if (selectedOption === 'name' || selectedOption === 'surname') {
                getContacts(`?${selectedOption}=${qValueUp}`);
            } else {
                getContacts(`?${selectedOption}=${qValue}`);
            }
        }
        searchInput.value = '';

        if (searchInput.type == 'date') {
            searchInput.setAttribute('type', 'text');
            searchInput.value = '';
        }
        formSearch.reset();
    });
}

async function contactProfile(listCards, data) {
    const cardProfile = document.querySelector('.cardProfile');

    [...listCards.children].forEach((card, index) => {
        card.addEventListener('click', e => {
            e.preventDefault();

            if (e.target == card.children[2].children[0]) {
                // console.dir('Card: ', listCards.children);
                // console.dir('Target: ', e.target);
                cardProfile.insertAdjacentHTML(
                    'afterbegin',
                    marcupCard(data[index])
                );
                cardProfile.classList.add('modal-show');
                animCard(cardProfile);

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
                closeProfile(cardProfile);
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
    formUpd.addEventListener('submit', e => {
        e.preventDefault();
        // console.dir(body.id, e.target.name.value);
        const { name, surname, email, phone, birthday } = e.target;
        updateContact(body.id, {
            name: name.value,
            surname: surname.value,
            email: email.value,
            phone: phone.value.replaceAll('-', ''),
            birthday: birthday.value,
        });
        closeModalHandler(updProfile);
        getContacts('');
    });
    onCloseClickModal(updProfile);
    onCloseEscModal(updProfile);
}

async function addContact() {
    const addLink = document.querySelector('.jsAdd');
    const newContact = document.querySelector('.addContact');
    
    newContact.classList.add('modal-show');
    
    addLink.addEventListener('click', e => {
        e.preventDefault();
        newContact.insertAdjacentHTML('afterbegin', markupContact());
        // console.dir(newContact.children[0]);
        const formAdd = document.querySelector('.contact-form');
        const sndBtn = formAdd.lastElementChild;
        const closeElement = formAdd.parentNode.parentElement;
        
        formAdd.addEventListener('submit', data => {
            data.preventDefault();
            // console.dir(data.target);
            toggleLoader();
            const {
                target: { name, surname, email, phone, birthday },
            } = data;
            const sendData = {
                name: name.value.charAt(0).toUpperCase() + name.value.slice(1),
                surname:
                surname.value.charAt(0).toUpperCase() +
                surname.value.slice(1),
                email: email.value,
                phone: phone.value.replaceAll('-', ''),
                birthday: birthday.value,
            };
            postAddContact(sendData);
            
            sndBtn.setAttribute('disabled', '');
            name.disabled = true;
            surname.disabled = true;
            email.disabled = true;
            phone.disabled = true;
            birthday.disabled = true;

            setTimeout(closeModalHandler, 2000, closeElement);
            toggleLoader();
            getContacts('');
        });
        onCloseClickModal(newContact);
        onCloseEscModal(newContact);
    });
}

async function closeProfile(card) {
    let btnProfile = document.querySelector('.cancelButton');

    btnProfile.addEventListener('click', e => {
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
    searchContacts,
    menuShowHide,
    eventModal,
    iterOneAnim,
    blinkAnim,
    contactProfile,
    addContact,
};
