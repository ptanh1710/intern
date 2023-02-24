import React from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import style from './Default.module.scss';
import { Header, Footer, Slider } from '../components';

const cx = classNames.bind(style);

function Default() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Slider />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Default;
