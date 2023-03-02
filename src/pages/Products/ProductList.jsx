import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

import style from './Products.module.scss';
import { CardList, CardListItem } from '../../components/Card';
import { default as MyButton } from '../../components/Button/Button';

const cx = classNames.bind(style);

function ProductList({ products }) {
    const handleAddToCart = (e, product) => {
        e.preventDefault();
        toast.success('Add to cart product: ' + product.title, {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
        console.log('add to cart: ', product);
    };

    return (
        <CardList className={cx('p-row')}>
            {products.map((product) => (
                <CardListItem className={cx('p-col')} key={product.id} col4>
                    <div className={cx('product')}>
                        <div className={cx('card')}>
                            <div className={cx('img')}>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className={cx('body')}>
                                <h3>{product.title}</h3>
                                <p>$ {product.price}</p>
                                <MyButton
                                    onClick={(e) => handleAddToCart(e, product)}
                                    primary
                                    large
                                >
                                    Add to cart
                                </MyButton>
                            </div>
                        </div>
                    </div>
                </CardListItem>
            ))}
        </CardList>
    );
}

export default ProductList;
