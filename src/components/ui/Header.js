import React from 'react';
import logo from '../../assets/logo.svg';
import '../../styles/App.css';

const Header = ({ title }) => (
  <header className="app-header">
    <title>{title}</title>
    <img src={logo} className="App-logo" alt="logo" />
    <h1>{title}</h1>
  </header>
);

export default Header;
