/** @format */

import React from 'react';
import NavLinks from './NavLinks';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from './../../atoms/Button';
import './Navbar.css';

const Header = () => {
  return (
    <Navbar className="todo-app-navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <center>
          <img
            className="tv2z-logo"
            alt="TV2Z"
            src='./logo.png'
          />
          </center>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <NavLinks />
      </Container>
    </Navbar>
  );
};

export default Header;
