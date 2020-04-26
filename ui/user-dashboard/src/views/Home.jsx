import React from "react";
import { NavigationMenu } from "../components/navigation-bar/navigation-bar.component";
import { Header } from "../components/home-header/header.component";
import { Features } from "../components/home-features/home-features.component";
import { Applications } from "../components/home-applications/applications.components";
// import DashBoard from "./dashboard";
import { SystemFeatures } from "../components/system-features/system-features.component";
import { Footer } from "../components/home-footer/footer.component";
import { UsageMap } from "../components/location-map/location-map.component";
import { AlliedCompanies } from "../components/companies/companies.component";

export const Home = () => {
  return (
    <>
      <div className="Header">
        <Header />
      </div>
      <div className="Features">
        <Features />
      </div>
      <div
        className="Applications"
        style={{ background: "#F8F8F8", paddingTop: "5%", paddingBottom: "5%" }}
      >
        <Applications />
      </div>
      <div className="SystemFeatures">
        <SystemFeatures />
      </div>
      <div className="UsageMap" style={{ background: "#F8F8F8" }}>
        <UsageMap />
      </div>
      <div className="Customers">
        <AlliedCompanies />
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
