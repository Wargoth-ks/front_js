import axios from 'axios';
import axiosRetry from 'axios-retry';

// import qs from 'qs';

let BASE_URL = 'https://addressbook-wargcorp-8f592fab.koyeb.app/api';
// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.get['Content-Type'] = 'application/json';

const axiosInstanse = axios.create({
    baseURL: BASE_URL,
});

axiosRetry(axiosInstanse, {
    retries: 5,
    retryCondition: () => true,
});

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
            console.dir(response.data);
        })
        .catch(error => {
            console.log(error.toJSON());
        });
}

axiosInstanse.interceptors.request.use(
    function (response) {
        // Do something before request is sent
        return response;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

axiosInstanse.interceptors.response.use(
    function (response) {
        // Здесь можете сделать что-нибудь с ответом
        return response;
    },
    function (error) {
        // Здесь можете сделать что-то с ошибкой ответа
        return Promise.reject(error);
    }
);

export { getStatusServer, postLoginUser };
