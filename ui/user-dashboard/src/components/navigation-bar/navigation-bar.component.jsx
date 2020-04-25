import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Logo } from "../../assets/speculo-logo";
import { CustomButton, BasicButton } from "../button/button.component";
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Navbar.Brand href="/">
            <Logo/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="features" style={linkStyle}>Features</Nav.Link>
              <Nav.Link href="dashboard-panel" style={linkStyle}>Dashboard</Nav.Link>
              <Nav.Link href="profile" style={linkStyle}>Profile</Nav.Link>
              <Nav.Link href="login" style={linkStyle}><span id="navbar-login-button">Log In</span></Nav.Link>
              <Nav.Link href="sign-up" style={linkStyle}><BasicButton buttonTitle="Sign Up"/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

const navStyle = {
  background: "rgba(15,30,61,1)",
};

const linkStyle = {margin: "auto"}

