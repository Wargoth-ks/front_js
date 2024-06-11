import axios from 'axios';
import axiosRetry from 'axios-retry';

let BASE_URL = process.env.URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: true,
});

// axiosRetry(axiosInstance, {
//     retries: 5,
//     retryCondition: () => true,
//     retryDelay: axiosRetry.exponentialDelay,
// });

class Storage {
    static getItem(key) {
        return !!~key ? localStorage.getItem(key) : null;
    }

    static setItem(key, value) {
        !!~(key && value) ? localStorage.setItem(key, value) : undefined;
    }

    static removeItem(key) {
        !!~key ? localStorage.removeItem(key) : undefined;
    }
}

axiosInstance.interceptors.request.use(
    request => {
        // const old_access_token = localStorage.getItem('access_token');
        const old_access_token = Storage.getItem('access_token');
        if (old_access_token) {
            request.headers['Authorization'] = `Bearer ${old_access_token}`;
            console.dir('Request: success!!!');
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
        console.log('Response: Success!!!');
        return response;
    },
    async error => {
        if (error.response && error.response.status == 401) {
            const originalRequest = error.config;
            if (originalRequest._retry) {
                originalRequest._retry = true;
                console.dir(error.response.status);
            }
            try {
                // const old_refresh_token = localStorage.getItem('refresh_token');
                const old_refresh_token = Storage.getItem('refresh_token');
                const new_tokens = await updateTokens(old_refresh_token);
                const { access_token } = new_tokens;
                originalRequest.headers[
                    'Authorization'
                ] = `Bearer ${access_token}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError);
                Storage.removeItem('accessToken');
                Storage.removeItem('refreshToken');
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

async function updateTokens(old_refresh_token) {
    try {
        const response = await axios.get(`${BASE_URL}/auth/refresh_token`, {
            headers: {
                Authorization: `Bearer ${old_refresh_token}`,
            },
        });
        console.dir('New pair of tokens', response.data);
        const { access_token, refresh_token } = response.data;
        Storage.setItem('access_token', access_token);
        Storage.setItem('refresh_token', refresh_token);
        return { access_token, refresh_token };
    } catch (error) {
        console.dir(error);
        return Promise.reject(error);
    }
}

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
        Storage.setItem('access_token', access_token);
        Storage.setItem('refresh_token', refresh_token);
    } catch (error) {
        console.log('Login error:', error);
    }
}

async function getUsers() {
    try {
        const response = await axiosInstance.get('/contacts/search', {
            headers: {
                Accept: 'application/json',
                // Authorization: `Bearer ${Storage.getItem('access_token')}`,
            },
            withCredentials: true,
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log('Get users error:', error);
    }
}

// getUsers();

export { getStatusServer, postLoginUser, getUsers };
