import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link to='/shop'>Shop</Link>
                <Link to='/review' >Order Review</Link>
                <Link to='/inventory'>Manage Invantory </Link>
                {/* <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a> */}
            </nav>
        </div>
    );
};

export default Header;