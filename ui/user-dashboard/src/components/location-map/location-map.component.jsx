import React from "react";
import styled from "styled-components";
import { Row, Col, Grid } from "react-flexbox-grid";
import { WorldMap } from "../../assets/world-map/world-map";
import { GetWindowSize } from "../../helpers/window-size";
import { ApplicationItem } from "../application-item copy/application-item.component";

export const UsageMap = () => {
  const [width, height] = GetWindowSize();
  return (
    <div style={{padding:"5%"}}>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <MapDiv width={width}>
              <WorldMap width={width * 0.6} height={height * 0.6} />
            </MapDiv>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <MapAppDiv>
            <div style={{justifyContent:"center", display:"flex", margin: "auto"}}>
                <ApplicationItem
                appName="Integer ut ex vitae enim semper"
                appContent="Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel, efficitur nec elit. "
              />
            </div>
            </MapAppDiv>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

const MapDiv = styled.div`
  left: -119px;
  position: relative;
  display: ${props => props.width < 768 ? "none" : ""}
`;

const MapAppDiv = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  margin:10%
`;
