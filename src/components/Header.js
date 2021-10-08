import React from 'react';
import logo from '../assets/images/Logo.svg'

const Header = () => {

    return (
        <header className="header">
            <img src={logo} alt="logo"></img>
        </header>
    )
}

export default Header;