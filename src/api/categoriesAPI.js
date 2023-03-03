import axiosClient from './axiosClient';

const categoriesAPI = {
    getAll() {
        const path = 'products/categories';
        return axiosClient.get(path);
    },
};

export default categoriesAPI;
