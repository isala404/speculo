import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { ApplicationItem } from "../application-item/application-item.component";

export const Applications = () => {
  return (
    <ApplicationsSection>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <Row style={{ padding: 30 }}>
              <ApplicationItem
                isFinalElement={false}
                path="/dashboard-panel"
                appName="Speculo"
                appContent="Speculo is a Web based solution to solve the problem of time consumption when it comes to analysing CCTV footage. Simply upload the footage and watch the magic happen."
              />
            </Row>
            <Row style={{ padding: 30 }}>
              <ApplicationItem
                isFinalElement={true}
                path="/live-detection"
                appName="Live-Detection"
                appContent="The Live-Detection app is a simple app at your disposal to witness how various technologies are harnessed and brought together to create Speculo."
              />
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <ReactPlayer
              width={"100%"}
              style={{ borderRadius: 10, margin: "1em" }}
              url="https://youtu.be/eEf_24SJJjY"
              playing={false}
            />
          </Col>
        </Row>
      </Grid>
    </ApplicationsSection>
  );
};

const ApplicationsSection = styled.section`
  margin: 10%;
  align-content: center;
`;
