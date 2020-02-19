import React from "react";
import { Logo } from "../../assets/speculo-logo";
import "./navigation-bar.style.scss";

export const NavigationBar = () => {

  const navigationBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 80,
    backgroundColor: "#ffffff",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
  };

  return (
    <div className="navigation-bar" style={navigationBarStyle}>
      <div>
        <Logo /> {/*SVG component for the Logo*/}
      </div>
      <div
        style={{
          width: "30%",
          justifyContent: "space-between",
          display: "flex",
          marginRight : 50,
          fontFamily: "Montserrat",
          fontWeight: "lighter",
          fontSize: 20
        }}
      >
        <span>home</span>
        <span>about</span>
        <span>contact</span>
      </div>
    </div>
  );
};
