import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { Logo } from "../../assets/speculo-logo";
import FacebookIcon from "../../assets/footer-icons/facebook_color.png";
import GoogleIcon from "../../assets/footer-icons/google_color.png";
import TwitterIcon from "../../assets/footer-icons/twitter_color.png";
import LinkedinIcon from "../../assets/footer-icons/linkedin_color.png";
import { GetWindowSize } from "../../helpers/window-size";
import { FooterLinkColumn } from "../home-footer-Column/home-footer-column.component";

const links = ["apple", "bear", "canopy", "doctor", "elephant", "fan", "golem"];

export const Footer = () => {
  //getting windowsize
  const [width] = GetWindowSize();
  return (
    <FooterDiv>
      <Grid>
        <Row>
          <Col xs={12} sm={4} md={4} lg={2}>
            <FooterLinkColumn
              links={links}
              windowWidth={width}
              columnHeading={"Features"}
            />
          </Col>
          <Col xs={12} sm={4} md={4} lg={2}>
          <FooterLinkColumn
              links={links}
              windowWidth={width}
              columnHeading={"Features"}
            />
          </Col>
          <Col xs={12} sm={4} md={4} lg={2}>
          <FooterLinkColumn
              links={links}
              windowWidth={width}
              columnHeading={"Features"}
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            style={{ color: "#ffffff", textAlign: "left" }}
          >
            <Row>
              <Row>
                <Logo />
              </Row>
              <Row>
                <FooterContent>{content}</FooterContent>
              </Row>
              <Row>
                <FooterIcon src={FacebookIcon} />
                <FooterIcon src={GoogleIcon} />
                <FooterIcon src={LinkedinIcon} />
                <FooterIcon src={TwitterIcon} />
              </Row>
            </Row>
          </Col>
        </Row>
      </Grid>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  background: #0b162b;
  padding: 5%;
`;

const FooterContent = styled.span`
  font-family: "Lexend Deca", sans-serif;
  text-align: justify;
  color: #979797;
  margin: 1em 1em 1em 0em;
`;

const FooterIcon = styled.img`
  margin: 0.5em;
  height: 1.5em;
`;

var content =
  "Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel, efficitur nec elit.";
