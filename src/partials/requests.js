import axios from 'axios';
import axiosRetry from 'axios-retry';
import { eventModal } from '..';

let BASE_URL = 'http://0.0.0.0:8000/api';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: true,
    // timeout: 5000,
});

axiosRetry(axiosInstance, {
    retries: 3,
    retryDelay: retryCount => {
        console.log(`retry attempt: ${retryCount}`);
        return retryCount * 2000; // time interval between retries
    },
    retryCondition: error => {
        return error.code === 'ECONNABORTED' || error.response.status === 500;
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

async function updateTokens() {
    try {
        const response = await axiosInstance.get(
            `${BASE_URL}/auth/refresh_token`,
            {
                withCredentials: true,
            }
        );
        console.dir('New pair of tokens', response.data);
        // const { access_token, refresh_token } = response.data;
        // return { access_token, refresh_token };
    } catch (error) {
        console.dir(error);
        return Promise.reject(error);
    }
}

// updateTokens()

async function getStatusServer() {
    try {
        const response = await axiosInstance.get('/healthchecker');
        console.log(response.status);
        // return response;
    } catch (error) {
        console.error(error);
    }
}

async function postLoginUser(data) {
    return await axiosInstance
        .postForm('/auth/login', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => {
            localStorage.setItem('isLogged', 'true');
            eventModal('Success', 'Welcome, friend!!!', 'green');
            console.dir(response.data);
        })
        .catch(error => {
            console.log('Login error:', error);
            if (error) {
                eventModal(
                    'Error',
                    'Wrong email or password!!!',
                    'red',
                    'Please, try again!'
                );
            }
        });

    // return Promise.reject(error);
}

// async function postLoginUser(data) {
//     try {
//         const response = await axiosInstance.postForm('/auth/login', data, {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//         });
//         console.dir(response);
//     } catch (error) {
//         console.log('Login error:', error);
//         if (error) {
//             errorModal()
//         }
//         // return Promise.reject(error);
//     }
// }

// async function getUsers() {
//     try {
//         const response = await axiosInstance.get('/contacts/search', {
//             headers: {
//                 Accept: 'application/json',
//             },
//         });
//         console.log(response.data);
//         // return response.data;
//     } catch (error) {
//         console.log('Get users error:', error);
//     }
// }

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
            console.dir(error.response.statusText);
            eventModal(
                'Error',
                'You are not Log In!!!',
                'red',
                'Please, try again!'
            );
            localStorage.setItem('isLogged', 'false');
        });
}

export { getStatusServer, postLoginUser, getUsers };
