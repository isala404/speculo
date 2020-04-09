import React from "react";
import styled from "styled-components";

export const FooterLinkColumn = ({ columnHeading, windowWidth, links }) => (
  <FooterColumnDiv windowWidth={windowWidth}>
    <FooterColumnHeading>{columnHeading}</FooterColumnHeading>
    <LinkDiv windowWidth={windowWidth}>
      <MapLinks list={links} />
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

const FooterLink = styled.a`
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
      <FooterLink href="#">{link}</FooterLink>
    </div>
  ));
