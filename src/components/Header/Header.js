import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img src={logo} alt="" />
            </nav>
            <div className='menu'>
                <a href="/home">Home</a>
                <a href="/products">Products</a>
                <a href="/cart">Cart</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;