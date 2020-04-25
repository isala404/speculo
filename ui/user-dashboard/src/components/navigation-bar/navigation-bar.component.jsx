import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Logo } from "../../assets/speculo-logo";
import { CustomButton, BasicButton } from "../button/button.component";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Routes from "../../Routes";
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
          <Link to="/">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
            <NavLink to="/dashboard">
                Features
              </NavLink>
              <NavLink to="/login">
                Login
              </NavLink>
              <NavLink href="sign-up" style={linkStyle}>
                <BasicButton buttonTitle="Sign Up" />
              </NavLink>
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

const linkStyle = { margin: "auto" };
