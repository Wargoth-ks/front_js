import axios from 'axios';
import axiosRetry from 'axios-retry';

// import qs from 'qs';

let BASE_URL = 'https://addressbook-wargcorp-8f592fab.koyeb.app/api';
// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.get['Content-Type'] = 'application/json';

const axiosInstanse = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
});

axiosRetry(axiosInstanse, {
    retries: 5,
    retryCondition: () => true,
});

axiosInstanse.interceptors.request.use(
    function (response) {
        // Do something before request is sent
        console.dir('Succefull request: ');
        return response;
    },
    function (error) {
        // Do something with request error
        console.dir('Request error: ');
        return Promise.reject(error);
    }
);

axiosInstanse.interceptors.response.use(
    function (response) {
        // Здесь можете сделать что-нибудь с ответом
        console.dir('Succefull response: ');
        return response;
    },
    function (error) {
        // Здесь можете сделать что-то с ошибкой ответа
        console.dir('Response error: ');
        return Promise.reject(error);
    }
);

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
    await axiosInstanse
        .postForm('/auth/login', data, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => {
            console.dir(response);
            const { access_token, refresh_token } = response.data;
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);
        })
        .catch(error => {
            console.log(error);
        });
}

async function getUsers() {
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');
    console.dir(access_token);
    await axiosInstanse
        .get('/contacts/search', {
            headers: {
                Authorization: `Bearer ${access_token}`,
                accept: 'application/json',
            },
        })
        .then(response => {
            console.dir(response.data);
        })
        .catch(error => {
            console.dir(error);
        });
}

// getUsers()

export { getStatusServer, postLoginUser, getUsers };
