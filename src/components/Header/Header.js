import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <h3>Logo</h3>
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