import axios from 'axios';
import Cookies from "js-cookie";

export const api = axios.create({
    baseURL: 'https://iconnect247.net/api/v2/',
});

api.interceptors.request.use(
    (config) => {
        const authToken = Cookies.get("access-token");
        if (authToken) {
            config.headers.authorization = `Bearer ${authToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);
