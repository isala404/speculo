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
            <Row>
              <ApplicationItem isFinalElement={false}
                appName="Speculo"
                appContent="Nunc porta erat ut lectus posuere molestie. Vestibulum risus
                  ligula, rhoncus eleifend rhoncus sed, malesuada id metus.
                  Aenean lorem nibh, varius fermentum viverra vel, efficitur nec
                  elit."
              />
            </Row>
            <Row>
              <ApplicationItem isFinalElement={true}
                appName="Live-Demo"
                appContent="Nunc porta erat ut lectus posuere molestie. Vestibulum risus
                  ligula, rhoncus eleifend rhoncus sed, malesuada id metus.
                  Aenean lorem nibh, varius fermentum viverra vel, efficitur nec
                  elit."
              />
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <ReactPlayer
              width={"100%"}
              style={{ borderRadius: 10,  margin: "1em"  }}
              url="https://www.youtube.com/watch?v=0EDF4g7xpEM"
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
