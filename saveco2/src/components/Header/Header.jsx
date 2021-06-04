import React from 'react';
import './header.css';
import logo from './img/saveco2-logo.svg';

export const Header = (props) => {
  return (
    <header>
      <img className="header__logo" src={logo} alt="saveCO2" />
    </header>
  );
};
