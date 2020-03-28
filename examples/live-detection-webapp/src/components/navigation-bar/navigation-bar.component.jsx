import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Logo } from "../../assets/speculo-logo";
import "./navigation-bar.style.scss";
import { CustomButton } from "../button/button.component";
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <Navbar.Brand href="#home">
            <Logo/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#features" style={{justifyContent: "center"}}>Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing"><span style ={textButtonStyle} >Log In</span></Nav.Link>
              {/* <Nav.Link href="#pricing" ><CustomButton buttonTitle="Sign Up"/></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

const navStyle = {
  background: "#0B162B",
};

const textButtonStyle = {
  fontWeight: "bold",
}
