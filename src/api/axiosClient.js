import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://fakestoreapi.com/',
});

axiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    },
);

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosClient;
