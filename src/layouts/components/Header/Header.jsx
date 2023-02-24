import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faBars,
    faShoppingCart,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

import style from './Header.module.scss';
import reactLogo from '../../../assets/react.svg';
import { default as MyButton } from '../../../components/Button/Button';
import { warning } from '@remix-run/router';

const cx = classNames.bind(style);

const navbarMenuItems = [
    {
        title: 'Home',
        to: '/home',
    },
    {
        title: 'Products',
        to: '/products',
    },
    {
        title: 'About',
        to: '/about',
    },
    {
        title: 'Contact',
        to: '/contact',
    },
];

function Header() {
    let cartLength = 1;

    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('shop')}>
                    <div className={cx('logo')}>
                        <img src={reactLogo} alt={reactLogo} />
                    </div>
                    <Link to="/">FakeShop</Link>
                </div>

                <div className={cx('navbar')}>
                    <div className={cx('navbar__item')}>
                        {navbarMenuItems.map((item, index) => (
                            <NavLink
                                to={item.to}
                                key={index}
                                className={({ isActive }) =>
                                    cx('navbar__item-link', {
                                        active: isActive ? true : false,
                                    })
                                }
                            >
                                {item.title}
                            </NavLink>
                        ))}
                    </div>
                    <div className={cx('navbar__item')}>
                        <MyButton text to={'cart'} className={cx('cart')}>
                            <FontAwesomeIcon icon={faShoppingCart} />

                            {cartLength > 0 && (
                                <span className={cx('cart__quantity')}>
                                    {cartLength}
                                </span>
                            )}
                        </MyButton>
                        <MyButton
                            to="/login"
                            secondary
                            leftIcon={
                                <FontAwesomeIcon
                                    icon={faArrowRightFromBracket}
                                />
                            }
                        >
                            login
                        </MyButton>
                        <MyButton
                            to="/register"
                            outline
                            leftIcon={<FontAwesomeIcon icon={faUserPlus} />}
                        >
                            register
                        </MyButton>
                    </div>
                </div>

                <div className={cx('bar-menu')}>
                    <input type="checkbox" id="check" name="check" />
                    <label htmlFor="check" className="checkbtn">
                        <FontAwesomeIcon icon={faBars} />
                    </label>
                </div>
            </div>
        </header>
    );
}

export default Header;
