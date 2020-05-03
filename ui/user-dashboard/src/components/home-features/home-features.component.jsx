import React from "react";
import { Grid, Row} from "react-flexbox-grid";
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
              "Speculo was designed for the sole purpose of reducing the time taken for CCTV footage analysis. Speculo is fast. How fast you may ask? As Lightening McQueen described it best: \"I AM SPEED!\""
            }
          />
          <FeatureItem
            iconSource={MaterialApproval}
            featureHeading={"Privacy"}
            featureContent={
              "Speculo is built upon the foundation of privacy. Although we are an online service, we have ensured that speculo does not retain any information of the session or any session for that matter."
            }
          />
          <FeatureItem
            iconSource={MaterialSupport}
            featureHeading={"Tech Support"}
            featureContent={
              "{\"status\" : \"not found....YET 😝\"}"
            }
          />
        </Row>
      </Grid>
    </div>
  );
};
