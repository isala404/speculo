import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { SystemFeatureItem } from "../system-feature-item/system-feature-item.component";
import { IphoneDevice } from "../../assets/feature-devices/iphone";
import { GetWindowSize } from "../../helpers/window-size";

export const SystemFeatures = () => {
  //hook to get the current window size
  const [ width ] = GetWindowSize()
  return (
    //complete System feature section
    <SystemFeatureDiv>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4}>
            <SystemFeatureItem
              featureHeading={"Free of Charge"}
              featureContent={"Speculo is free service which gives you the performance of Sherlock Holmes at your palms at no extra cost. Making you feel like a god amongs humans"}
              toggleBottomSpace={true}
              screenwidth={width}
            />
            <SystemFeatureItem
              featureHeading={"World-Wide Accessibility"}
              featureContent={"Speculo is a service meticolously designed to be accessible whenever, where ever you are."}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <DeviceImageDiv>
              <IphoneDevice />
            </DeviceImageDiv>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <SystemFeatureItem
              featureHeading={"Mobile Friendly"}
              featureContent={"Don't have a laptop or computer close by to analyse your footage? Not to worry. Speculo was designed in a mobile friendly manner without hindering of any features."}
              toggleBottomSpace={true}
              screenwidth={width}
            />
            <SystemFeatureItem
              featureHeading={"Reliability"}
              featureContent={"Speculo uses advance machine learning to detect faces no matter what direction the face is face. "}
            />
          </Col>
        </Row>
      </Grid>
    </SystemFeatureDiv>
  );
};

//custom components made using styled components
const DeviceImageDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const SystemFeatureDiv = styled.div`
  margin: 10%;
`;

