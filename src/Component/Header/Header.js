import React from 'react';
import logo from'../../images/Logo.svg'
import'./Header.css'

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Orders</a>
                <a href="/inventory">Invebtory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;