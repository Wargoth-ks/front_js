// import bootstrap from 'bootstrap'

import axios from 'axios';

axios.defaults.baseURL =
    'https://addressbook-wargcorp-8f592fab.koyeb.app/api/healthchecker';
axios.defaults.headers.get['Content-Type'] = 'application/json';

async function getUser() {
    try {
        const response = await axios.get();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

getUser();
