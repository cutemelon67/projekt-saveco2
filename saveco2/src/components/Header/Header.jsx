import React from 'react';
import './header.css';
import logo from './img/saveco2-logo.svg';

export const Header = (props) => {
  return (
    <header>
      <img className="header__logo" src={logo} alt="saveCO2" />
      {/* <nav className="header__nav--language">
        <ul>
          <li>
            <img src="" alt="flag cs" />
            Čeština
          </li>
          <li>
            <img src="" alt="flag en" />
            English
          </li>
          <li>
            <img src="" alt="flag de" /> Deutsch
          </li>
        </ul>
      </nav> */}
    </header>
  );
};
