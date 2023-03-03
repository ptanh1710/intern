import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import style from './Detail.module.scss';
import { productsAPI } from '../../api';
import { default as MyButton } from '../../components/Button/Button';
import { toast } from 'react-toastify';

const cx = classNames.bind(style);

function Detail() {
    let { id } = useParams();
    // `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState({});
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const quantityRef = useRef(null);
    console.log(quantityRef);
    useEffect(() => {
        setIsLoading(true);
        const controller = new AbortController();
        const getProduct = async () => {
            try {
                const response = await productsAPI.get(id, {
                    signal: controller.signal,
                });

                if (
                    response.status === 200 ||
                    response.data.status === 'success'
                ) {
                    console.log(response.data);
                    setProduct(response.data);
                    quantityRef.current = 1;
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err.message);
                setError(err);
            }
        };

        getProduct();

        return () => {
            setIsLoading(true);
            controller.abort();
        };
    }, [id]);

    const handleSelectFavorite = (e) => {
        e.preventDefault();
        toast.info('You was liked the product', {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
    };

    return (
        <section className={cx('wrapper')}>
            {loading && <>Loading...</>}
            {!loading && (
                <div className={cx('container')}>
                    <div className={cx('image')}>
                        <div className={cx('img')}>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className={cx('slide')}>
                            <div className={cx('slide-img')}>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className={cx('slide-img')}>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className={cx('slide-img')}>
                                <img src={product.image} alt={product.title} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            <div className={cx('name')}>
                                <h1>{product.title}</h1>
                                <p>{product.category}</p>
                            </div>
                            <MyButton
                                className={cx('icon')}
                                onClick={handleSelectFavorite}
                            >
                                <FontAwesomeIcon icon={faGratipay} />
                            </MyButton>
                        </div>
                        <div className={cx('rating')}>
                            {product.rating && product.rating.rate}
                        </div>
                        <hr />
                        <div className={cx('info')}>
                            <div className={cx('quantity')}>
                                <p>Qty</p>
                                <div className={cx('box')}>
                                    <MyButton
                                        className={cx('quantity-btn-plus')}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </MyButton>
                                    <input
                                        name="quantity"
                                        type="number"
                                        ref={quantityRef}
                                    />
                                    <MyButton
                                        className={cx('quantity-btn-minus')}
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </MyButton>
                                </div>
                            </div>
                            <h3>$ {product.price}</h3>
                        </div>
                        <hr />
                        <MyButton className={cx('btn')} primary>
                            Buy Now
                        </MyButton>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Detail;
