import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from './Card.module.scss';

const cx = classNames.bind(style);

function List(props) {
    const { children, className } = props;
    const classes = cx('row', {
        [className]: className,
    });

    return <section className={classes}>{children}</section>;
}

List.propTypes = {
    children: PropTypes.node.isRequired,
};

export default List;
