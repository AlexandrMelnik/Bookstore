import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import './Header.css';

const Header = ({ isAuth, logout }) => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Bookstore</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullLeft>
        <NavItem componentClass={Link} eventKey={1} to="/" href="/">
          Home
        </NavItem>
        <NavItem componentClass={Link} eventKey={2} to="/" href="/">
          About
        </NavItem>
        <NavItem componentClass={Link} eventKey={3} to="/contacts" href="/contacts">
          Contacts
        </NavItem>
      </Nav>
      {
        isAuth ?
        <Nav pullRight>
          <NavItem onClick={() => logout()}>
            Logout
          </NavItem>
        </Nav>
        :
        <Nav pullRight>
          <NavItem componentClass={Link} eventKey={1} to="/signin" href="/signin">
            Signin
          </NavItem>
          <NavItem componentClass={Link} eventKey={2} to="/signup" href="/signup">
            Signup
          </NavItem>
        </Nav>
      }
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isAuth: !!state.user.token
  }
}

export default connect(mapStateToProps, { logout: actions.logout })(Header);
