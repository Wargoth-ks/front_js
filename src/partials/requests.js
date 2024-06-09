import axios from 'axios';
import axiosRetry from 'axios-retry';

// import qs from 'qs';

let BASE_URL = 'https://addressbook-wargcorp-8f592fab.koyeb.app/api';
// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.get['Content-Type'] = 'application/json';

const axiosInstanse = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // Accept: 'application/json',
        // withCredentials: true,
    },
});

// axiosRetry(axiosInstanse, {
//     retries: 3,
//     retryCondition: () => true,
// });

axiosInstanse.interceptors.request.use(
    config => {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            config.headers['Authorization'] = `Bearer ${access_token}`;
            console.dir('Succefull request');
        }
        return config;
    },
    error => {
        // Do something with request error
        console.dir(`Request error: ${error}`);
        return Promise.reject(error);
    }
);

axiosInstanse.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (
            (error.response &&
            error.response.status == 401) &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            try {
                console.log(error.response.status)
                const refresh_token = localStorage.getItem('refresh_token');
                console.dir(`For new access_token: ${refresh_token}`);
                const response = await axiosInstanse.get(
                    '/auth/refresh_token',
                    {
                        headers: {
                            Authorization: `Bearer ${refresh_token}`,
                            // Accept: 'application/json',
                        },
                        withCredentials: true,
                    }
                );
                const { access_token, refresh_token: new_refresh_token } =
                    response.data;
                console.dir(response.data);
                localStorage.setItem('access_token', access_token);
                localStorage.setItem('refresh_token', new_refresh_token);
                console.dir('Update pair token');
                axiosInstanse.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
                return axiosInstanse(originalRequest);
            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError);
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                // window.location.href = '/auth/login';
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

async function getStatusServer() {
    try {
        const response = await axiosInstanse.get(BASE_URL + '/healthchecker');
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
    // const refresh_token = localStorage.getItem('refresh_token');
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

// getUsers();

export { getStatusServer, postLoginUser, getUsers };
