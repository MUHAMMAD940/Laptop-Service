import React from 'react';
import HeaderDisplay from './HeaderDisplay/HeaderDisplay';
import Navbar from './Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderDisplay></HeaderDisplay>
        </div>
    );
};

export default Header;