import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faGoogle,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

import style from './Footer.module.scss';
import { CardList, CardListItem } from '../../../components/Card';

const cx = classNames.bind(style);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('store')}>
                <CardList>
                    <CardListItem col4>
                        <h2>FakeShop</h2>
                    </CardListItem>
                    <CardListItem col4>
                        <h4>Shop</h4>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </CardListItem>
                    <CardListItem col4>
                        <h4>Services</h4>
                        <ul>
                            <li>Return</li>
                            <li>Side map</li>
                            <li>Wish list</li>
                            <li>My Account</li>
                        </ul>
                    </CardListItem>
                    <CardListItem col4>
                        <h4>Socical</h4>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faFacebook} /> Facebook
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faGoogle} /> Google
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                            </li>
                        </ul>
                    </CardListItem>
                </CardList>
            </div>
            <div className={cx('design')}>
                <p>&copy; Design By Anh Phạm - 03/2023</p>
                <div className={cx('design-icon')}>
                    <a href="https://www.facebook.com/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.google.com/" target="_blank">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
