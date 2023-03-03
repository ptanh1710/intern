import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faFileLines } from '@fortawesome/free-solid-svg-icons';
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
                <CardListItem className={cx('p-col')} key={product.id} col3>
                    <div className={cx('product')}>
                        <div className={cx('card')}>
                            <div className={cx('img')}>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className={cx('body')}>
                                <h3 title={product.title}>{product.title}</h3>
                                <p>$ {product.price}</p>
                            </div>
                            <div className={cx('actions')}>
                                <MyButton
                                    className={cx('btn')}
                                    to={`/product/${product.id}/detail`}
                                    leftIcon={
                                        <FontAwesomeIcon icon={faFileLines} />
                                    }
                                    success
                                >
                                    Detail
                                </MyButton>
                                <MyButton
                                    className={cx('btn')}
                                    onClick={(e) => handleAddToCart(e, product)}
                                    leftIcon={
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    }
                                    primary
                                >
                                    Add
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
