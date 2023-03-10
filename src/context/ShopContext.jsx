import React, { createContext, useState } from 'react';
import productAPI from '../api/productsAPI';

export const ShopContext = createContext({
    categories: [],
    products: [],
    getProducts: () => {},
});

export default function ShopProvider({ children }) {
    const [products, setProducts] = useState([]);
    const categories = [
        {
            id: 1,
            title: 'electronics',
        },
        {
            id: 2,
            title: 'jewelery',
        },
        {
            id: 3,
            title: "men's clothing",
        },
        {
            id: 4,
            title: "women's clothing",
        },
    ];
    const [errors, setErrors] = useState();
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        setLoading(false);
        try {
            const response = await productAPI.getAll();
            if (response.status === 200 || response.data.status === 'success') {
                setLoading(false);
                setProducts(response.data);
            }
        } catch (err) {
            setErrors(err);
            setLoading(true);
        }
    };

    const values = { categories, products, getProducts, errors, loading };
    return (
        <ShopContext.Provider value={values}>{children}</ShopContext.Provider>
    );
}
