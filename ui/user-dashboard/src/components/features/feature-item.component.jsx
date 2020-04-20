import React from "react";
import { Col } from "react-flexbox-grid";
import styled from "styled-components";
import "../../styles/fonts.css";

export const FeatureItem = ({
  iconSource,
  featureContent,
  featureHeading,
  xs,
  sm,
  md,
  lg
}) => {
  return (
    <Col
      xs={xs == null ? 12 : xs}
      sm={sm == null ? 12 : sm}
      md={md == null ? 4 : md}
      lg={lg == null ? 4 : lg}
    >
      <FeatureDiv>
        <FeatureIconDiv>
          <Icon src={iconSource} />
        </FeatureIconDiv>
        <FeatureHeadingDiv>
          <FeatureHeading>{featureHeading}</FeatureHeading>
        </FeatureHeadingDiv>
        <FeatureContentDiv>
          <FeatureContent>{featureContent}</FeatureContent>
        </FeatureContentDiv>
      </FeatureDiv>
    </Col>
  );
};

const FeatureDiv = styled.div`
  margin: auto;
  padding: 1em;
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
  color: #979797;
`;
const Icon = styled.img`
  height: 1.5em;
`;
