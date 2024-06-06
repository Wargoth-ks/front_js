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



async function postLoginUser(body) {
    // data = {
    //     username: 'user',
    //     password: 'password',
    // };
    const {username, password} = body
    try {
        const response = await axios.post(BASE_URL + '/auth/login', {
            username: body[username],
            password: body[password],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        console.dir(response.data);
        return response.data
    } catch (error) {
        console.dir(error);
    }
}

export { getStatusServer, postLoginUser };