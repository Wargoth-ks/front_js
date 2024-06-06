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

async function postLoginUser(data) {
    await axios
        .postForm('/auth/login', data, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => {
            console.dir(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
}

export { getStatusServer, postLoginUser };
