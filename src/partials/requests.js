import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'https://addressbook-wargcorp-8f592fab.koyeb.app/api';
axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.get['Content-Type'] = 'application/json';

async function getStatusServer() {
    try {
        const response = await axios.get(BASE_URL + '/healthchecker');
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}



async function postLoginUser(body) {
    try {
        const response = await axios('./auth/login', {
            method: "POST",
            data: qs.stringify(body),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        console.dir(response.data);
    } catch (error) {
        console.dir(error);
    }
}

export { getStatusServer, postLoginUser };