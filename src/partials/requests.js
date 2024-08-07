import axios from 'axios';
import axiosRetry from 'axios-retry';
import {
    contactProfile,
    eventModal,
    menuShowHide,
    authUser,
    searchContacts,
    addContact,
    openChat,
} from '..';
import {
    messConfirm,
    messNotFound,
    messOtherError,
    messUnAuth,
    messLogOk,
} from './msgs.js';
import { scaleAnimList } from './anim.js';

import { murkupContacts, markupUser } from './markup.js';
import { cleanIfAuthorized } from './clean.js';

// let BASE_URL = 'http://0.0.0.0:8000/api';
const BASE_URL = 'https://' + process.env.URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: true,
    timeout: 5000,
    // signal: AbortSignal.timeout(10000)
});

axiosRetry(axiosInstance, {
    retries: 10,
    shouldResetTimeout: true,
    retryDelay: retryCount => {
        console.log(`Retry attempt: ${retryCount}`);
        return retryCount * 100;
    },
    retryCondition: e => {
        const err = e.response;
        console.log('Error 500: Server is down');
        return (err && err.status === 500) || e.code === 'ECONNABORTED';
    },
});

axiosInstance.interceptors.request.use(
    async request => {
        console.dir('Request: success!!!');
        return request;
    },
    async error => {
        console.dir(`Request error: ${error}`);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    async response => {
        console.log('Response: Success!!!');
        return response;
    },
    async error => {
        const err = error.response;
        if (
            // err &&
            err.status == 401 &&
            err.data.detail == 'Could not validate credentials'
        ) {
            console.dir('Interseptors: ', err.data.detail);
            const originalRequest = error.config;
            if (originalRequest._retry) {
                originalRequest._retry = true;
            }
            try {
                await updateTokens();
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError.response);
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

function reloadWithTimeout() {
    setTimeout(() => {
        window.location.href = '/';
    }, 3000);
}

async function getStatusServer() {
    return await axiosInstance
        .get('/healthchecker')
        .then(response => {
            if (response.data.message == 'Cookie accepted') {
                console.dir('User is authorized');
                cleanIfAuthorized();
                authUser();
                addContact();
                openChat();
                searchContacts();
            } else {
                console.log(response);
            }
        })
        .catch(internalErr => {
            console.log(internalErr.status);
            return Promise.reject(internalErr);
        });
}

getStatusServer();

async function updateTokens() {
    return await axiosInstance
        .get('/auth/refresh_token', {
            withCredentials: true,
        })
        .then(response => {
            console.dir('New pair of tokens', response.data);
        })
        .catch(error => {
            const err = error.response;
            if (
                err.status == 401 &&
                err.data.detail == 'Invalid refresh token'
            ) {
                console.dir(err.data);
                return Promise.reject(error);
            }
        });
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
            reloadWithTimeout();
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
            eventModal(...messLogOk);
            // reloadWithTimeout();
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
}

async function postLogoutUser() {
    return await axiosInstance
        .get('/auth/logout')
        .then(response => {
            console.log(response.data);
            eventModal('Success!', `${response.data}`, 'cyan');
            // reloadWithTimeout();
        })
        .catch(error => {
            console.log(error);
            return Promise.reject(error);
        });
}

async function getContacts(query) {
    return await axiosInstance
        .get(`/contacts/search${query}`, {
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => {
            let listData = document.querySelector('.listContacts');
            listData.innerHTML = '';
            listData.insertAdjacentHTML(
                'afterbegin',
                murkupContacts(response.data)
            );
            scaleAnimList([...listData.children]);
            contactProfile(listData, response.data);
            // console.log(response.data, response.data.length);
            if (response.data.length == 0) {
                eventModal('Search result', 'Not found', 'cyan');
            }
        })
        .catch(error => {
            if (error.response && error.response.status == 400) {
                // console.dir(error);
                let msg = `${error.response.data.Detail[0].msg}`;
                eventModal(
                    ...messOtherError,
                    msg.charAt(0).toUpperCase() + msg.slice(1)
                );
            } else {
                eventModal(...messOtherError);
            }
        });
}

async function getUserProfile() {
    return await axiosInstance
        .get('/users/my_profile', {
            headers: {
                Accept: 'application/json',
            },
        })
        .then(resp => {
            console.dir(resp);
            if (resp.status !== 500) {
                const userData = document.querySelector('.menuProfileList');
                userData.insertAdjacentHTML(
                    'afterbegin',
                    markupUser(resp.data)
                );
            }
            // return resp.data;
        })
        .catch(error => {
            let err = error.response;
            let msg = `${err.data.detail}`;
            console.dir('User profile ERROR: ', error.response);
            eventModal(
                ...messUnAuth,
                msg.charAt(0).toUpperCase() + msg.slice(1)
            );
            // reloadWithTimeout();
            setTimeout(menuShowHide, 300);
            // return Promise.reject(error);
        });
}

async function deleteContact(id, profile, index, list) {
    return await axiosInstance
        .delete(`/contacts/${id}`)
        .then(response => {
            profile.classList.remove('modal-show');
            profile.innerHTML = '';
            list.removeChild(list.childNodes[index]);
            getContacts('');
            console.dir(response);
        })
        .catch(error => {
            console.dir(error);
        });
}

async function updateContact(id, body) {
    return await axiosInstance
        .put(`/contacts/${id}`, body)
        .then(response => {
            console.dir(response);
        })
        .catch(error => {
            console.dir(error);
        });
}

async function postAddContact(body) {
    return await axiosInstance
        .post('/contacts', body)
        .then(response => {
            console.dir(response.data);
        })
        .catch(error => {
            console.dir(error.response);
        });
}

export {
    getStatusServer,
    postLoginUser,
    postLogoutUser,
    postSignUp,
    getContacts,
    getUserProfile,
    deleteContact,
    updateContact,
    postAddContact,
    axiosInstance,
};
