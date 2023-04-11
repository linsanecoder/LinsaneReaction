import React from 'react';
import { Link } from "react-router-dom"

import Nav from '../components/Nav';

function Layout() {
  return (
    <div>
      <Nav title="Welcome to our site!">
        <Link to="/">Home</Link>
        <Link to="/Page1">App Page 1</Link>
        <Link to="/Page2">App Page 2</Link>
        <div>Some other menu</div>
      </Nav>
    </div>
  );
}

export default Layout;

