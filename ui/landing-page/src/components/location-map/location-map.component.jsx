import React from "react";
import styled from "styled-components";
import { Row, Col, Grid } from "react-flexbox-grid";
import { WorldMap } from "../../assets/world-map/world-map";
import { GetWindowSize } from "../../helpers/window-size";
import { ApplicationItem } from "../application-item copy/application-item.component";
import RepoImage from "../../assets/repo.png"

export const UsageMap = () => {
  const [width, height] = GetWindowSize();
  return (
    <div style={{padding:"5%"}}>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <MapDiv width={width}>
              {
                width > 768 ? <img src={RepoImage} width = {800}/> : null
              }
            </MapDiv>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <MapAppDiv>
            <div style={{justifyContent:"center", display:"flex", margin: "auto"}}>
                <ApplicationItem
                appName="Be a part of our force"
                appContent="Speculo in the near future aims to published our source code for Open Source development, to thrust our vision of helping to achieve a safer society with your help"
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
