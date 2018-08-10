// @flow
import axios from 'axios';
import history from './history';

const api = axios.create({
    baseURL: `http://localhost:9001/api`,
    withCredentials: true
});

api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) { 
        history.push('/login');
    }

    return Promise.reject(error);
});

export default api;