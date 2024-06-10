import axios from 'axios';
import axiosRetry from 'axios-retry';

// import qs from 'qs';

let BASE_URL = 'https://addressbook-wargcorp-8f592fab.koyeb.app/api';
// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.get['Content-Type'] = 'application/json';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }, 
});

axiosRetry(axiosInstance, {
    retries: 3,
    retryCondition: () => true,
    // retryDelay: retryCount => retryCount * 1000,
});

axiosInstance.interceptors.request.use(
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
        console.dir(`Request error: ${error}`);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const originalRequest = error.config;
        if (
            error.response &&
            error.response.status == 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            console.dir(error.response.status);
            try {
                const old_refresh_token = localStorage.getItem('refresh_token');
                const new_tokens = await updateTokens(old_refresh_token);
                console.dir(`New tokens: ${new_tokens}`);
                const { access_token } = new_tokens;
                originalRequest.headers[
                    'Authorization'
                ] = `Bearer ${access_token}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError);
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

async function getStatusServer() {
    try {
        const response = await axiosInstance.get('/healthchecker');
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function postLoginUser(data) {
    try {
        const response = await axiosInstance.postForm('/auth/login', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        console.dir(response);
        const { access_token, refresh_token } = response.data;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
    } catch (error) {
        console.log('Login error:', error);
    }
}

async function getUsers() {
    try {
        const response = await axiosInstance.get('/contacts/search', {
            headers: {
                Accept: 'application/json',
                // Authorization: `Bearer `
            },
        });
        console.dir(response.data);
    } catch (error) {
        console.dir('Get users error:', error);
    }
}

// getUsers();

async function updateTokens(old_refresh_token) {
    try {
        const response = await axios.get(
            `${BASE_URL}/auth/refresh_token`, {
            headers: {
                Authorization: `Bearer ${old_refresh_token}`,
            },
        });
        console.dir(response);
        const { access_token, refresh_token } = response.data;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
        return { access_token, refresh_token };
    } catch (error) {
        console.dir(error);
        return Promise.reject(error);
    }
}

// updateAccessRefreshToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJuZXdldDc2MzI3QG1meWF4LmNvbSIsImlhdCI6MTcxNzk0Nzk3OSwiZXhwIjoxNzE4NTUyNzc5LCJzY29wZSI6InJlZnJlc2hfdG9rZW4ifQ.CHIhHRDBCRa0sGJY41s0G_Z0j2BT_GXdowUUrYN27vk')

export { getStatusServer, postLoginUser, getUsers };
