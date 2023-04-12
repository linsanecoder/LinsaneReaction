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
        <Link to="/Page3">App Page 3</Link>
        <div>Some other menu</div>
        <Link to="/Page3/Details">App Pg 3 w Details</Link>
        <Link to="/Page4">App Page 4</Link>
        <Link to="/Click">Click</Link>
      </Nav>
    </div>
  );
}

export default Layout;

