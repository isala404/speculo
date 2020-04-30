import React from "react";
import styled from "styled-components";
import { Grid, Col } from "react-flexbox-grid";
import { Row } from "react-bootstrap";
import FacebookIcon from "../../assets/footer-icons/facebook_color.png";
// import GoogleIcon from "../../assets/footer-icons/google_color.png";
// import TwitterIcon from "../../assets/footer-icons/twitter_color.png";
// import LinkedinIcon from "../../assets/footer-icons/linkedin_color.png";
import { BasicButton } from "../button/button.component";

export const AlliedCompanies = () => (
  <CompaniesDiv>
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div>
            <CompanyLogo src={FacebookIcon} />
            <CompanyLogo src={FacebookIcon} />
            <CompanyLogo src={FacebookIcon} />
            <CompanyLogo src={FacebookIcon} />
          </div>
          <div>
            <CompanyDivHeading>Lorem Ipsum</CompanyDivHeading>
          </div>
          <div>
            <CompanyDivSubText>Trusted by 2M members across 120+ countries</CompanyDivSubText>
          </div>
          <BasicButton buttonTitle="Get Started" />
        </Col>
      </Row>
    </Grid>
  </CompaniesDiv>
);

const CompanyLogo = styled.img`
  width: 4em;
  margin: 0.5em;
`;

const CompaniesDiv = styled.div`
  width: 100%;
  text-align: center;
  padding: 10%;
`;

const CompanyDivHeading = styled.h3`
  font-family: "Gilroy-SemiBold";
  font-weight: bold;
  margin: 0.5em;
`;

const CompanyDivSubText = styled.span`
  font-family: "Gilroy-Regular";
  margin: 1em;
  color: #979797;
`;
