import React from 'react';
import logo from '../../images/logo.png';
import '../Header/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Header;