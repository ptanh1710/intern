import React from 'react';
import classNames from 'classnames/bind';

import { Slider, Delivery, Newspaper } from '../../layouts/components';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function Home() {
    return (
        <>
            <Slider />
            <Delivery />
            <div className={cx('wrapper')}> Home</div>
            <Newspaper />
        </>
    );
}

export default Home;
