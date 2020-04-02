import React from "react";
import styled from "styled-components";
import {Row} from "react-flexbox-grid"

export const SystemFeatureItem = (
  {featureIcon,
  featureHeading,
  featureContent,
toggleBottomSpace,
screenwidth}
) => {
  return (
    <Row style={{marginBottom : toggleBottomSpace && screenwidth>990 ? "15em": "0em"}}>
      <FeatureDiv toggleBottomSpace={toggleBottomSpace}>
        <FeatureIconDiv>
          <Icon src={featureIcon} />
        </FeatureIconDiv>
        <FeatureHeadingDiv>
          <FeatureHeading>{featureHeading}</FeatureHeading>
        </FeatureHeadingDiv>
        <FeatureContentDiv>
          <FeatureContent>{featureContent}</FeatureContent>
        </FeatureContentDiv>
      </FeatureDiv>
    </Row>
  );
};

const FeatureDiv = styled.div`
  margin: auto;
`;

const FeatureIconDiv = styled.div`
  margin: 1em;
`;
const FeatureHeadingDiv = styled.div`
  margin: 1em;
`;
const FeatureContentDiv = styled.div`
  margin: auto;
  padding: 1em
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
