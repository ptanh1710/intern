import React, { useState } from 'react';
import classNames from 'classnames/bind';

import style from './Products.module.scss';
import { default as MyButton } from '../../components/Button/Button';
import useWindowSize from '../../hooks/useWindowSize';
import ProductList from './ProductList';
import { PRODUCTS } from './mockData';

const cx = classNames.bind(style);

const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
];

function Products() {
    // 1 cách khắc phục tạm thời trong thời điểm hiện tại
    const { width, height } = useWindowSize();

    const [active, setActive] = useState('all');
    const handleSelectedCategory = (e) => {
        e.preventDefault();
        setActive(e.target.innerText.toLowerCase());
    };

    return (
        <section className={cx('wrapper')}>
            <div className={cx('menu')}>
                <div className={cx('menu-item')}>
                    <MyButton
                        text={width < 769 ? false : true}
                        className={cx('menu-btn', {
                            active: active === 'all' ? true : false,
                        })}
                        onClick={(e) => handleSelectedCategory(e)}
                    >
                        All
                    </MyButton>
                    {categories.map((category) => (
                        <MyButton
                            text={width < 769 ? false : true}
                            key={category}
                            className={cx('menu-btn', {
                                active: active === category ? true : false,
                            })}
                            onClick={(e) => handleSelectedCategory(e)}
                        >
                            {category}
                        </MyButton>
                    ))}
                </div>
            </div>
            <div className={cx('content')}>
                <ProductList products={PRODUCTS} />
            </div>
        </section>
    );
}

export default Products;
