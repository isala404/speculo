import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import FeaturedDeviceAsset from "../../assets/feature-devices/featured_devices.png";
import styled from "styled-components";
import { FeatureItem } from "../features/feature-item.component";
import { SystemFeatureItem } from "../system-feature-item/system-feature-item.component";
import { IphoneDevice } from "../../assets/feature-devices/iphone";
import { GetWindowSize } from "../../helpers/window-size";

export const SystemFeatures = () => {
  //hook to get the current window size
  const [width, height] = GetWindowSize()
  return (
    //complete System feature section
    <SystemFeatureDiv>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4}>
            <SystemFeatureItem
              featureHeading={heading}
              featureContent={content}
              toggleBottomSpace={true}
              screenwidth={width}
            />
            <SystemFeatureItem
              featureHeading={heading}
              featureContent={content}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <DeviceImageDiv>
              <IphoneDevice />
            </DeviceImageDiv>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <SystemFeatureItem
              featureHeading={heading}
              featureContent={content}
              toggleBottomSpace={true}
              screenwidth={width}
            />
            <SystemFeatureItem
              featureHeading={heading}
              featureContent={content}
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

const DeviceImage = styled.img`
  width: 100%;
    margin:auto;
`;

var heading = "Lorem ipsum";
var content =
  "Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel, efficitur nec elit.";
