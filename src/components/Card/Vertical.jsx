import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';

import style from './Card.module.scss';
import { default as MyButton } from '../Button/Button';

const cx = classNames.bind(style);

function Vertical(props) {
    const { title, description, image, ziczac = false } = props;
    const classes = cx('vertical', { ziczac });

    return (
        <div className={classes}>
            <div className={cx('image')}>
                <img src={image} alt={title} />
            </div>
            <div className={cx('content')}>
                <h3>{title}</h3>
                <p>{description}</p>
                <MyButton
                    to="/home"
                    className={cx('btn')}
                    primary
                    rightIcon={<FontAwesomeIcon icon={faCircleRight} />}
                >
                    Reading
                </MyButton>
            </div>
        </div>
    );
}

Vertical.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    ziczac: PropTypes.bool,
};

export default Vertical;
