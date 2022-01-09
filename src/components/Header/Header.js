import React from 'react';
import logo from '../../images/logo.png';
import '../Header/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />

            <nav>
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/order">Order Review</a></li>
                    <li><a href="/manage">Manage Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;