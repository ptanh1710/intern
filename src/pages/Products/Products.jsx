import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';

import style from './Products.module.scss';
import { default as MyButton } from '../../components/Button/Button';
import { useShopContext, useWindowSize } from '../../hooks';
import ProductList from './ProductList';

const cx = classNames.bind(style);

function Products() {
    // 1 cách khắc phục tạm thời trong thời điểm hiện tại
    const { width } = useWindowSize();
    const { getProducts, products, categories, loading } = useShopContext();

    const [filteredCategory, setFilteredCategory] = useState('all');

    const handleSelectedCategory = (e) => {
        let titleCategory = e.target.innerText.toLowerCase();
        e.preventDefault();
        setFilteredCategory(titleCategory);
    };

    const renderFilterProducts = useMemo(() => {
        const result = products.filter(
            (product) =>
                filteredCategory === 'all' ||
                filteredCategory === product.category,
        );
        return result;
    }, [filteredCategory, products]);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <section className={cx('wrapper')}>
            <div className={cx('menu')}>
                <div className={cx('menu-item')}>
                    <MyButton
                        text={width >= 900 ? true : false}
                        className={cx('menu-btn', {
                            active: filteredCategory === 'all' ? true : false,
                        })}
                        onClick={(e) => handleSelectedCategory(e)}
                    >
                        All
                    </MyButton>
                    {categories.map((category) => (
                        <MyButton
                            text={width >= 900 ? true : false}
                            key={category.id}
                            className={cx('menu-btn', {
                                active:
                                    filteredCategory === category.title
                                        ? true
                                        : false,
                            })}
                            onClick={(e) => handleSelectedCategory(e)}
                        >
                            {category.title}
                        </MyButton>
                    ))}
                </div>
            </div>
            <div className={cx('content')}>
                {loading && <h1>Loading...</h1>}
                {!loading && <ProductList products={renderFilterProducts} />}
            </div>
        </section>
    );
}

export default Products;
