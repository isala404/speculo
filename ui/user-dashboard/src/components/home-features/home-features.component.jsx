import React from "react";
import { Grid, Row } from "react-flexbox-grid";
import MaterialBolt from "../../assets/feature-icons/material_bolt.png";
import MaterialApproval from "../../assets/feature-icons/material_approval.png";
import MaterialSupport from "../../assets/feature-icons/material_support.png";
import "../../styles/fonts.css";
import { FeatureItem } from "../features/feature-item.component";

export const Features = () => {
  return (
    <div>
      <Grid style={{ marginTop: "10%", marginBottom: "10%" }}>
        <Row>
          <FeatureItem
            iconSource={MaterialBolt}
            featureHeading={"Time Friendly"}
            featureContent={
              "Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel, efficitur nec elit. "
            }
          />
          <FeatureItem
            iconSource={MaterialApproval}
            featureHeading={"Privacy"}
            featureContent={
              "Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel, efficitur nec elit. "
            }
          />
          <FeatureItem
            iconSource={MaterialSupport}
            featureHeading={"Tech Support"}
            featureContent={
              "Nunc porta erat ut lectus posuere molestie. Vestibulum risus ligula, rhoncus eleifend rhoncus sed, malesuada id metus. Aenean lorem nibh, varius fermentum viverra vel, efficitur nec elit. "
            }
          />
        </Row>
      </Grid>
    </div>
  );
};
