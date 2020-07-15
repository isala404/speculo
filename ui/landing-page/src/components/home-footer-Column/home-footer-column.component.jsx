import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"

export const FooterLinkColumn = ({ columnHeading, windowWidth, links, hrefEnabled }) => (
  <FooterColumnDiv windowWidth={windowWidth}>
    <FooterColumnHeading>{columnHeading}</FooterColumnHeading>
    <LinkDiv windowWidth={windowWidth}>
     { !hrefEnabled? <MapLinks list={links} /> : <HrefLinks hrefs={links} />}
    </LinkDiv>
  </FooterColumnDiv>
);

const FooterColumnDiv = styled.div`
  text-align: ${props => (props.windowWidth > 576 ? "left" : "center")};
  margin-right: 1em;
`;

const LinkDiv = styled.div`
  text-align: ${props => (props.windowWidth > 576 ? "left" : "center")};
  margin: auto;
`;

const FooterColumnHeading = styled.h4`
  color: #ffffff;
  font-family: "Gilroy-SemiBold";
  font-size: 1.1em;
`;

const FooterLink = styled(NavLink)`
  font-family: "Lexend Deca", sans-serif;
  color: #979797;
  transition: 0.15s ease-in-out;
  &:hover {
    color: #1ddd96;
  }
`;

const HrefLink = styled.a`
  font-family: "Lexend Deca", sans-serif;
  color: #979797;
  transition: 0.15s ease-in-out;
  &:hover {
    color: #1ddd96;
  }
`;

//method to map an array into clickable links
const MapLinks = ({ list }) =>
  list.map(link => (
    <div style={{ margin: "0.1em" }}>
      <FooterLink to={`${link.route}`}>{link.label}</FooterLink>
    </div>
  ));

//method to render the github links
const HrefLinks = ({hrefs})=> hrefs.map(link=>(
  <div style={{ margin: "0.1em" }}>
  <HrefLink href={link.href}>{link.label}</HrefLink>
</div>))
