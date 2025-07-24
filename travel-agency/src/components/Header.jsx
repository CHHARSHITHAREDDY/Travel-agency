import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <h2>XYZ Travel</h2>
      <Link to="/">Home</Link>
      <Link to="/search">Explore</Link>
    </nav>
  </header>
);

export default Header;
