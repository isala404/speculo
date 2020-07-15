import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import "../../styles/fonts.css";
import { BasicButton } from "../button/button.component";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderDiv>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <HeaderHeadingDiv>
              <Row>
                <HeaderHeading>Real-Time Face Detection</HeaderHeading>
              </Row>
              <Row>
                <SubText>
                  Have you had enough of waiting long for video footage to be analysed? Speculo drastically reduces the time take for video analysis.
                </SubText>
              </Row>
              <Row>
                <Col style={{ padding: "1em 0em 1em 0em" }}>
                  {/* <Link to="/sign-up">
                    <BasicButton
                      buttonTitle="Get Started"
                      toggleShadow={true}
                    />
                  </Link> */}
                </Col>
              </Row>
              {/* <Row>
                <SubText fontSize={"0.7em"} fontColor="grey">
                  Try it for free • No credit card required
                </SubText>
              </Row> */}
            </HeaderHeadingDiv>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div style={{ overflow: "hidden" }}>
              {/* TODO: Add image here */}
            </div>
          </Col>
        </Row>
      </Grid>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  background: #0b162b;
  color: white;
`;



const HeaderHeading = styled.h1`
  font-weight: bold;
  font-size: 3em;
  text-align: left;
  font-family: "Gilroy-SemiBold";
`;

const HeaderHeadingDiv = styled.div`
  padding: ${props =>
    props.divWidth > 992 ? "15em 5em 15em 5em" : "5em 5em 5em 5em"};
`;

const SubText = styled.span`
  font-size: ${props => (props.fontSize === null ? "1em" : props.fontSize)};
  color: ${props => (props.fontColor === null ? "white" : props.fontColor)};
  text-align: left;
  z-index: 0;
  font-family: "Lexend Deca", sans-serif;
`;

// const ResponsiveImage = styled.img`
//   width: 100%;
//   height: auto;
//   overflow: hidden;
// `;

// const Input = styled.input`
//   background: white;
//   padding: 0.4em;
//   width: 250px;
//   border: 1px solid #ffffff;
//   border-radius: 3px;
//   box-shadow: 0px 0px 100px 2px #2bba85;
//   height: 10;
//   transition: 0.3s;
//   font-family: "Lexend Deca", sans-serif;
//   &:hover {
//     box-shadow: 0px 0px 200px 10px #1ddd96;
//   }
// `;
