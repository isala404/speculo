import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Logo } from "../../assets/speculo-logo";
import { BasicButton } from "../button/button.component";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
          <Navlink to="/">
            <Logo />
          </Navlink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              {/* statements to show nav links if admin is logged in */}
              {localStorage.getItem("type") === "admin" ? (
                <Navlink to="/live-detection">Live Detector</Navlink>
              ) : null}

              {localStorage.getItem("type") === "admin" ? (
                <Navlink to="/admin">Admin</Navlink>
              ) : null}

              {localStorage.getItem("type") !== null ? (
                <Navlink to="/dashboard-panel">Dashboard</Navlink>
              ) : null}
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

const Navlink = styled(NavLink)`
  margin: auto;
  padding: 0.3em;
  color: #52699c;
  :hover {
    color: #fff;
    text-decoration: none;
  }
`;

