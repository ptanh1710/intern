import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';

import style from './Detail.module.scss';
import { productsAPI } from '../../api';
import { default as MyButton } from '../../components/Button/Button';

const cx = classNames.bind(style);

function Detail() {
    let { id } = useParams();
    // `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState({});
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

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
                            {product.rating.rate}
                        </div>
                        <hr />
                        <div className={cx('info')}>
                            <div className={cx('quantity')}>
                                <span>Qty</span>
                                <button>+</button>
                                <input value="1" type="number" disabled />
                                <button>-</button>
                            </div>
                            <h3>$ {product.price}</h3>
                        </div>
                        <hr />
                        <MyButton primary>Buy Now</MyButton>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Detail;
