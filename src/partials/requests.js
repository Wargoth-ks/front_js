import axios from 'axios';

const BASE_URL = 'https://addressbook-wargcorp-8f592fab.koyeb.app/api';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.get['Content-Type'] = 'application/json';

async function getStatusServer() {
    try {
        const response = await axios.get(BASE_URL + '/healthchecker');
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export {getStatusServer}
