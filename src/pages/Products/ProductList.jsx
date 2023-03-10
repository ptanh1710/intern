import React, { useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import style from './Products.module.scss';
import { CardList, CardListItem } from '../../components/Card';
import { default as MyButton } from '../../components/Button/Button';
import Pagination from '../../components/Pagination/Pagination';

const cx = classNames.bind(style);
let PageSize = 6;

function ProductList({ products }) {
    const [currentPage, setCurrentPage] = useState(1);

    const currentProductsPagination = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        let productSlide = products.slice(firstPageIndex, lastPageIndex);
        let count = productSlide.length;
        // console.group('Product List');
        // console.log('Product in Page ', count);
        // console.log('Current Page ', currentPage);
        // console.log('Total Product', products.length);
        // console.groupEnd();
        if (count === 0) {
            productSlide = products.slice(0, PageSize);
            setCurrentPage(1);
            return productSlide;
        }
        return productSlide;
    }, [currentPage, products]);

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        toast.success('Add to cart product', {
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
        <>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={products.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
            />

            <CardList className={cx('p-row')}>
                {currentProductsPagination.map((product) => (
                    <CardListItem className={cx('p-col')} key={product.id} col3>
                        <div className={cx('product')}>
                            <div className={cx('card')}>
                                <div className={cx('img')}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </div>
                                <div className={cx('body')}>
                                    <h3 title={product.title}>
                                        {product.title}
                                    </h3>
                                    <p>$ {product.price}</p>
                                </div>
                                <div className={cx('actions')}>
                                    <MyButton
                                        className={cx('btn')}
                                        to={`/product/${product.id}/detail`}
                                        leftIcon={
                                            <FontAwesomeIcon
                                                icon={faFileLines}
                                            />
                                        }
                                        success
                                    >
                                        Detail
                                    </MyButton>
                                    <MyButton
                                        className={cx('btn')}
                                        onClick={(e) =>
                                            handleAddToCart(e, product)
                                        }
                                        leftIcon={
                                            <FontAwesomeIcon
                                                icon={faCartPlus}
                                            />
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
        </>
    );
}

export default ProductList;
