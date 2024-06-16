import axios from 'axios';
import axiosRetry from 'axios-retry';
import { eventModal } from '..';
import {
    messConfirm,
    messNotFound,
    messOtherError,
    messUnAuth,
    messLogOk,
} from './msgs.js';

// let BASE_URL = 'http://0.0.0.0:8000/api';
const BASE_URL = process.env.URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: true,
});

axiosRetry(axiosInstance, {
    retries: 3,

    shouldResetTimeout: true,
    retryDelay: retryCount => {
        console.log(`retry attempt: ${retryCount}`);
        return retryCount * 100;
    },
    retryCondition: e => {
        const err = e.response;
        return (err && err.status === 500) || e.code === 'ECONNABORTED';
    },
});

axiosInstance.interceptors.request.use(
    request => {
        console.dir('Request: success!!!');
        return request;
    },
    error => {
        console.dir(`Request error: ${error}`);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        console.log('Response: Success!!!');
        return response;
    },
    async error => {
        const isLogged = localStorage.getItem('isLogged');
        if (
            error.response &&
            error.response.status == 401 &&
            isLogged == 'true'
        ) {
            console.dir(error.response.status);
            const originalRequest = error.config;
            if (originalRequest._retry) {
                originalRequest._retry = true;
            }
            try {
                await updateTokens();
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError);
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

async function getStatusServer() {
    return await axiosInstance
        .get('/healthchecker')
        .then(response => {
            console.log(response.status);
        })
        .catch(err => {
            console.log(err.status);
            return Promise.reject(err);
        });
}

getStatusServer();

async function updateTokens() {
    try {
        const response = await axiosInstance.get('/auth/refresh_token', {
            withCredentials: true,
        });
        console.dir('New pair of tokens', response.data);
    } catch (error) {
        console.dir(error);
        return Promise.reject(error);
    }
}

async function postSignUp(jsonData, avatar) {
    const formData = new FormData();
    formData.append('body', jsonData);
    formData.append('avatar', avatar);

    const res = await axiosInstance
        .post('/auth/signup', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            console.dir(response.data.detail);
            eventModal('Success!!!', `${response.data.detail}!`, 'green');
        })
        .catch(error => {
            const err = error.response;
            console.dir('Conflict: status 409', err);
            if (err.status == 409) {
                eventModal('Error', err.data.Detail, 'red');
            }
        });
    return res;
}

// postSignUp();

async function postLoginUser(data) {
    return await axiosInstance
        .post('/auth/login', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => {
            console.dir(response.data);
            localStorage.setItem('isLogged', 'true');
            eventModal(...messLogOk);
        })
        .catch(error => {
            console.log('Login error:', error.response);
            const err = error.response;

            switch (err.status) {
                case 404:
                    eventModal(...messNotFound);
                    break;
                case 401:
                    eventModal(...messConfirm);
                    break;
                default:
                    let msg = `${err.data.Detail[0].msg}`;
                    eventModal(
                        ...messOtherError,
                        msg.charAt(0).toUpperCase() + msg.slice(1)
                    );
            }
        });

    // return Promise.reject(error);
}

async function postLogoutUser() {
    return await axiosInstance
        .get('/auth/logout')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

async function getUsers() {
    return await axiosInstance
        .get('/contacts/search', {
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            if (error) {
                console.dir(error.response.statusText);
                eventModal(...messUnAuth);
                localStorage.setItem('isLogged', 'false');
            }
        });
}

async function getUserProfile() {
    return await axiosInstance
        .get('/users/my_profile', {
            headers: {
                Accept: 'application/json',
            },
            // withCredentials: true,
        })
        .then(response => {
            // console.dir(response.data.avatar);
            return response.data.avatar
        })
        .catch(error => {
            console.dir(error.response.statusText);
        });
}

export {
    getStatusServer,
    postLoginUser,
    postLogoutUser,
    postSignUp,
    getUsers,
    getUserProfile,
};
