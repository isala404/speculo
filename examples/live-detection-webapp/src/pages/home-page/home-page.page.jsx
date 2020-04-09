import React, { useLayoutEffect, useState } from "react";
import { NavigationMenu } from "../../components/navigation-bar/navigation-bar.component";
import { Header } from "../../components/home-header/header.component";
import { Features } from "../../components/home-features/home-features.component";
import { Applications } from "../../components/home-applications/applications.components";

export const HomePage = () => {
  return (
    <>
      <div style={{ background: "#000000" }}>
        <NavigationMenu />
      </div>
      <div className="Header">
        <Header />
      </div>
      <div className="Features">
        <Features />
      </div>
      <div className="Applications">
        <Applications />
      </div>
    </>
  );
};
