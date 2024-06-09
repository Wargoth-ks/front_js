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
        Accept: 'application/json',
    },
});

// axiosRetry(axiosInstanse, {
//     retries: 3,
//     retryCondition: () => true,
// });

axiosInstanse.interceptors.request.use(
    request => {
        const old_access_token = localStorage.getItem('access_token');
        if (old_access_token) {
            request.headers['Authorization'] = `Bearer ${old_access_token}`;
            console.dir('Succefull request');
        }
        return request;
    },
    error => {
        // Do something with request error
        // console.dir(`Request error: ${error}`);
        return Promise.reject(error);
    }
);

axiosInstanse.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const originalRequest = error.config;
        if (
            (error.response &&
            error.response.status == 401) &&
            localStorage.getItem('refresh_token')
        ) {
            try {
                console.dir(error.response.status);
                const old_refresh_token = localStorage.getItem('refresh_token');
                updateAccessRefreshToken(old_refresh_token)
                axiosInstanse.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${access_token}`;
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

async function updateAccessRefreshToken(refresh_token) {
    await axiosInstanse
        .get('/auth/refresh_token', {
            headers: {
                Authorization: `Bearer ${refresh_token}`,
            },
        })
        .then(response => {
            console.dir(response);
            const { access_token, refresh_token } = response.data;
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);
        })
        .catch(error => {
            console.dir(error);
        });
}

// updateAccessRefreshToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJuZXdldDc2MzI3QG1meWF4LmNvbSIsImlhdCI6MTcxNzk0Nzk3OSwiZXhwIjoxNzE4NTUyNzc5LCJzY29wZSI6InJlZnJlc2hfdG9rZW4ifQ.CHIhHRDBCRa0sGJY41s0G_Z0j2BT_GXdowUUrYN27vk')

export { getStatusServer, postLoginUser, getUsers };
