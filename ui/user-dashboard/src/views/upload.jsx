import React, { useState } from "react";
import UploadFootage from "../components/upload-face-footage/upload-footage/UploadFootage";
import UploadFaces from "../components/upload-face-footage/upload-faces/UploadFaces";
import { NavigationMenu } from "../components/navigation-bar/navigation-bar.component";

export const UploadPage = () => {
  const [isScanByFace, setScanByFace] = useState(false);

  const checkboxHandler = () => {
    isScanByFace ? setScanByFace(false) : setScanByFace(true);
  };
  return (
    <>
      <NavigationMenu />
      <div>
        <div style={{ margin: window.innerWidth * 0.1 }}>
          <div style={uploadTextStyle}>
            <span style={{ uploadTextStyle }}>
              Select the footage you want to analyse.
            </span>
          </div>
          <UploadFootage />
          <div style={uploadTextStyle}>
            <input type="checkbox" onChange={checkboxHandler} />
            <span style={{ uploadTextStyle }}>
              {" "}
              I want to see if a selected face(s) is/are in the footage
            </span>
          </div>{" "}
          {isScanByFace ? (
          <div>
            <div style={uploadTextStyle}>
              <span>Select the faces.</span>
            </div>
            <UploadFaces />
          </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

const uploadTextStyle = {
  textAlign: "left",
  margin: "1em 0",
  fontFamily: "Gilroy-Regular"
};
