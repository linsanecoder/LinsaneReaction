import React from 'react';

import Nav from '../components/Nav';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

function Layout() {
  return (
    <>
    <div>
      <Nav title="Welcome to our site!">
        <div><NavLink to="/">Home</NavLink></div>
        <div><NavLink to="/about">About</NavLink></div>
        <div><NavLink to="/about?someQuery=1">About with query</NavLink></div>
        <div><NavLink to="/welcome/123">Welcome</NavLink></div>
      </Nav>
    </div>
    <Outlet />
    </>
  );
}

export default Layout;

