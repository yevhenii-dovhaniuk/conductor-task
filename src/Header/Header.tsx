import './Header.pcss';
import React from 'react';
import logo from './logo.svg';

export const Header = () => (
    <header className="header">
        <div>
            <img src={logo} title="Github Profile Viewer" className="header__logo"/>
        </div>
        <div className="header__text">
            Github public profile viewer
        </div>
    </header>
);