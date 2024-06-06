// import bootstrap from 'bootstrap'
import { getStatusServer } from './partials/requests';
// import axios from 'axios';

// axios.defaults.baseURL =
//     'https://addressbook-wargcorp-8f592fab.koyeb.app/api/healthchecker';
// axios.defaults.headers.get['Content-Type'] = 'application/json';

// async function getUser() {
//     try {
//         const response = await axios.get();
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }

getStatusServer();

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
