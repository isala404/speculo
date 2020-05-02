import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Logo } from "../../assets/speculo-logo";
import { BasicButton } from "../button/button.component";
import styled from "styled-components"
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation-bar.style.scss";

export const NavigationMenu = () => {
  return (
    <div>
      <div>
        <Navbar
          className="NavigationMenu"
          collapseOnSelect
          expand="lg"
          variant="dark"
          style={navStyle}
          fixed="top"
        >
          <NavLink to="/">
            <Logo />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <NavLink to ="/" >Features</NavLink>

              {localStorage.getItem('type') === 'admin' ?
              <NavLink to="/admin">Admin</NavLink>
              :
              null}

              {localStorage.getItem('type') !==null ?
              <NavLink to="/dashboard-panel">Dashboard</NavLink>
              :
              null}


              {localStorage.getItem('token') === null ?
                [
                  <NavLink to="/login" ><span id="navbar-login-button">Log In</span></NavLink>,
                  <NavLink to="/sign-up" ><BasicButton buttonTitle="Sign Up" /></NavLink>
                ]
                :
                <NavLink to="/profile" ><BasicButton buttonTitle="Profile" /></NavLink>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

const navStyle = {
  background: "rgba(15,30,61,1)"
};

const NavLink = styled(Link)`
  margin: auto;
  padding: 0.3em;
  color: #52699c;
  :hover {
    color: #fff;
    text-decoration: none;
  }
`;

// const linkStyle = { margin: "auto" };
