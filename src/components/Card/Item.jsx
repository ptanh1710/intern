import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from './Card.module.scss';

const cx = classNames.bind(style);

function Item(props) {
    const {
        children,
        col3 = false,
        col4 = false,
        col5 = false,
        className,
    } = props;

    const classes = cx('col', {
        [className]: className,
        col3,
        col4,
        col5,
    });

    return <div className={classes}>{children}</div>;
}

Item.propTypes = {
    children: PropTypes.node.isRequired,
    col3: PropTypes.bool,
    col4: PropTypes.bool,
    col5: PropTypes.bool,
};

Item.defaultProps = {};

export default Item;
