import React from "react";
import { Header } from "../components/home-header/header.component";
import { Features } from "../components/home-features/home-features.component";
import { Applications } from "../components/home-applications/applications.components";
import { SystemFeatures } from "../components/system-features/system-features.component";
import { Footer } from "../components/home-footer/footer.component";
import { UsageMap } from "../components/location-map/location-map.component";
import { AlliedCompanies } from "../components/companies/companies.component";
import Fade from "react-reveal/Zoom";

export const LandingPage = () => {
  return (
    <>
      <div className="Header">
        <Header />
      </div>
      <div className="Features">
        <Fade>
          <Features />
        </Fade>
      </div>
      <div
        className="Applications"
        style={{ background: "#F8F8F8", paddingTop: "5%", paddingBottom: "5%" }}
      >
        <Fade>
          <Applications />
        </Fade>
      </div>
      <div className="SystemFeatures">
        <Fade>
          <SystemFeatures />
        </Fade>
      </div>
      <div className="UsageMap" style={{ background: "#F8F8F8" }}>
        <Fade>
          <UsageMap />
        </Fade>
      </div>
      <div className="Customers">
        <Fade>
          <AlliedCompanies />
        </Fade>
      </div>
      <div className="Footer">
        <Footer />
      </div>
      {/* <div>
          <DashBoard />
        </div> */}
    </>
  );
};
