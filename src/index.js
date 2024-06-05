// import bootstrap from 'bootstrap'

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

// getUser();

const btn = document.querySelector('.menu-btn')
const menuBtn = document.querySelector('.menu')
const jsList = document.querySelector('.js-list')

function onClick(e) {
    e.preventDefault()
    menuBtn.classList.toggle('menu-active');
    jsList.classList.toggle('js-list-active');
}

btn.addEventListener('click', onClick)


document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal elements
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');

    // Get the buttons that open the modals
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    // Get the <span> elements that close the modals
    const loginClose = document.getElementById('loginClose');
    const registerClose = document.getElementById('registerClose');

    // When the user clicks the button, open the modal
    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }
    registerBtn.onclick = function() {
        registerModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    loginClose.onclick = function() {
        loginModal.style.display = "none";
    }
    registerClose.onclick = function() {
        registerModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
    }
});

