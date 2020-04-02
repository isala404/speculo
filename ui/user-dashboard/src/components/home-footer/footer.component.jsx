import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const links = ["apple", "bear", "canopy", "doctor", "elephant", "fan", "golem"];

export const Footer = () => {
  return (
    <FooterDiv>
      <Grid>
        <Row>
          <Col xs={4} sm={4} md={4} lg={2}>
            <FooterColumnDiv>
              <FooterColumnHeading>Features</FooterColumnHeading>
              <MapLinks list={links} />
            </FooterColumnDiv>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2}>
            <FooterColumnDiv>
              <FooterColumnHeading>Features</FooterColumnHeading>
              <MapLinks list={links} />
            </FooterColumnDiv>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2}>
            <FooterColumnDiv>
              <FooterColumnHeading>Features</FooterColumnHeading>
              <MapLinks list={links} />
            </FooterColumnDiv>
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={6}
            style={{ color: "#ffffff", textAlign: "left" }}
          >
            <Row>
              <Row>LOGO GOES HERE</Row>
              <Row>{content}</Row>
              <Row>ICONS GO HERE</Row>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4}>
                  <FooterColumnDiv>
                    <FooterColumnHeading>Features</FooterColumnHeading>
                    <MapLinks list={links} />
                  </FooterColumnDiv>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                  <FooterColumnDiv>
                    <FooterColumnHeading>Features</FooterColumnHeading>
                    <MapLinks list={links} />
                  </FooterColumnDiv>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                  <FooterColumnDiv>
                    <FooterColumnHeading>Features</FooterColumnHeading>
                    <MapLinks list={links} />
                  </FooterColumnDiv>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Grid>
    </FooterDiv>
  );
};

const FooterColumnDiv = styled.div``;
const FooterDiv = styled.div`
  background: #0b162b;
  padding: 1em;
`;

const FooterColumnHeading = styled.h4`
  color: #ffffff;
  font-family: "Gilroy-SemiBold";
`;

const FooterLink = styled.a`
  font-family: "Lexend Deca", sans-serif;
  color: #ffffff;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #1ddd96;
  }
`;

//test method
const MapLinks = ({ list }) =>
  list.map(link => (
    <div style={{ margin: "0.1em" }}>
      <FooterLink href="#">{link}</FooterLink>
    </div>
  ));

var content =
  "Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel, efficitur nec elit.";
