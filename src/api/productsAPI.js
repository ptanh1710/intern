import axiosClient from './axiosClient';

const productAPI = {
    getAll(request = {}) {
        const path = 'products';
        return axiosClient.get(path, request);
    },

    get(id, request = {}) {
        const path = `products/${id}`;
        return axiosClient.get(path, request);
    },
};

export default productAPI;
