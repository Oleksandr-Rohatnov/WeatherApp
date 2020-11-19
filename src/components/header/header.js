import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
/* eslint-disable */

export const Header = () => (
  <div className="header">
    <Link to="/" className="header__logo">W</Link>
    <h1 className="header__title">
      <Link to="/" className="header__title-link">Weather</Link>
    </h1>
  </div>
);
