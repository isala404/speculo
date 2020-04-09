import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { BasicButton } from "../button/button.component";

export const Applications = () => {
  return (
    <ApplicationsSection>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <ApplicationDiv>
              <Row>
                <ApplicationHeading>Speculo</ApplicationHeading>
              </Row>
              <Row>
                <ApplicationContent>
                  Nunc porta erat ut lectus posuere molestie. Vestibulum risus
                  ligula, rhoncus eleifend rhoncus sed, malesuada id metus.
                  Aenean lorem nibh, varius fermentum viverra vel, efficitur nec
                  elit.
                </ApplicationContent>
              </Row>
              <Row>
              <ApplicationButtonDiv>
              <BasicButton buttonTitle="Check it out!" buttonWidth={"60%"}/>
              </ApplicationButtonDiv>
              </Row>
            </ApplicationDiv>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}></Col>
        </Row>
      </Grid>
    </ApplicationsSection>
  );
};

const ApplicationsSection = styled.section`
  margin: 10%;
`;

const ApplicationDiv = styled.div`
  text-align: left;
`;

const ApplicationHeading = styled.h3`
  font-family: "Gilroy-SemiBold";
  font-weight: bold;
`;

const ApplicationContent = styled.span`
  font-family: "Lexend Deca", sans-serif;
  text-align: justify;
`;

const ApplicationButtonDiv = styled.div`
    padding-top: 1em;
    width: 100%
`;
