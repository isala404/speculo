import React from "react";
import {Col } from "react-flexbox-grid";
import styled from "styled-components";
import MaterialBolt from "../../assets/feature-icons/material_bolt.png";
import "../../styles/fonts.css";

export const FeatureItem = ({iconSource, featureContent, featureHeading}) =>{
  return(
    <Col xs={12} sm={12} md={4} lg={4}>
            <FeatureDiv>
              <FeatureIconDiv>
                <Icon src={iconSource}/>
              </FeatureIconDiv>
              <FeatureHeadingDiv>
                <FeatureHeading>{featureHeading}</FeatureHeading>
              </FeatureHeadingDiv>
              <FeatureContentDiv>
                  <FeatureContent>
                  {featureContent}
                  </FeatureContent>
              </FeatureContentDiv>
            </FeatureDiv>
          </Col>
  )
}

const FeatureDiv = styled.div`
  margin: auto;
  padding: 1em
`;

const FeatureIconDiv = styled.div`
  margin: 1em;
`;
const FeatureHeadingDiv = styled.div`
  margin: 1em;
`;
const FeatureContentDiv = styled.div`
  margin: auto;
`;
const FeatureHeading = styled.h3`
  font-family: "Gilroy-SemiBold";
  font-weight: bold;
`;
const FeatureContent = styled.span`
  font-family: "Lexend Deca", sans-serif;
  text-align: justify;
`;
const Icon = styled.img`
  height: 1.5em;
`;