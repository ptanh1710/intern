import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import style from './Slider.module.scss';

const cx = classNames.bind(style);

function Slider() {
    const handlePrevSlide = (e) => {
        e.preventDefault();
        console.log('Slider Prev');
    };

    const handleNextSlide = (e) => {
        e.preventDefault();
        console.log('Slider Next');
    };

    return (
        <section className={cx('wrapper')}>
            <div className={cx('prev')}>
                <button onClick={handlePrevSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>
            <div className={cx('slider')}>Content Slide in here</div>
            <div className={cx('next')}>
                <button onClick={handleNextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </section>
    );
}

export default Slider;
