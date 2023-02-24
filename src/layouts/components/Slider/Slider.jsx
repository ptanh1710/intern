import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import slider1 from '../../../assets/slider1.jpg';
import slider2 from '../../../assets/slider2.jpg';
import slider3 from '../../../assets/slider3.jpg';
import slider4 from '../../../assets/slider4.jpg';
import slider5 from '../../../assets/slider5.jpg';

import style from './Slider.module.scss';

const cx = classNames.bind(style);

const SLIDERS = [
    {
        title: 'Slider 1',
        path: slider1,
    },
    {
        title: 'Slider 2',
        path: slider2,
    },
    {
        title: 'Slider 3',
        path: slider3,
    },
    {
        title: 'Slider 4',
        path: slider4,
    },
    {
        title: 'Slider 5',
        path: slider5,
    },
];

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderLength = SLIDERS.length;
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === SLIDERS.length - 1 ? 0 : prevIndex + 1,
                ),
            4500,
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    const handlePrevSlide = (e) => {
        e.preventDefault();
        setCurrentIndex(
            currentIndex === 0 ? sliderLength - 1 : currentIndex - 1,
        );
    };

    const handleNextSlide = (e) => {
        e.preventDefault();
        setCurrentIndex(
            currentIndex === sliderLength - 1 ? 0 : currentIndex + 1,
        );
    };

    return (
        <section className={cx('wrapper')}>
            <div className={cx('prev')}>
                <button onClick={handlePrevSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>

            <div className={cx('slider')}>
                <img
                    src={SLIDERS[currentIndex].path}
                    alt={SLIDERS[currentIndex].title}
                />
            </div>

            <div className={cx('next')}>
                <button onClick={handleNextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </section>
    );
}

export default Slider;
