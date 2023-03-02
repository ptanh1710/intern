import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSackDollar,
    faTruck,
    faHeadset,
    faFileShield,
} from '@fortawesome/free-solid-svg-icons';
import { CardList, CardListItem } from '../../../components/Card';

import style from './Delivery.module.scss';

const cx = classNames.bind(style);

const deliveryData = [
    {
        title: 'Money Back Gurantee',
        icon: <FontAwesomeIcon icon={faSackDollar} />,
        description: 'lorem ipsum dolor sit amet',
    },
    {
        title: 'Free Delivery',
        icon: <FontAwesomeIcon icon={faTruck} />,
        description: 'lorem ipsum dolor sit amet',
    },
    {
        title: 'Alway Support',
        icon: <FontAwesomeIcon icon={faHeadset} />,
        description: 'lorem ipsum dolor sit amet',
    },
    {
        title: 'Sercure Payment',
        icon: <FontAwesomeIcon icon={faFileShield} />,
        description: 'lorem ipsum dolor sit amet',
    },
];

function Delivery() {
    return (
        <section className={cx('delivery')}>
            <CardList>
                {deliveryData.map((item, index) => (
                    <CardListItem key={index} col4>
                        <div className={cx('container')}>
                            <div className={cx('content')}>
                                {item.icon}
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </CardListItem>
                ))}
            </CardList>
        </section>
    );
}

export default Delivery;
