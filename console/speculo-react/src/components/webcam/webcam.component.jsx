import React, { useState } from "react";
import Webcam from "react-webcam";
import CanvasComponent from "../image-canvas/image-canvas.component";

export const WebcamCapture = () => {
  //using "useState" hook for initialising and assigning of values
  const [imgSrc, setSrc] = useState("");
  const [displayComponent, setVisibility] = useState(true);
  const [faceData, setFaceData] = useState([]);

  const url = "http://speculo.isala.me/";

  const response = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ image: imgSrc })
    })
      .then(response => response.json())
      .then(data => {
        setFaceData(data);
      });
  };
  //constraints for the displayed camera component
  const webcamConstraints = {
    width: 1280,
    height: 720
  };

  const webcamRef = React.useRef(null);

  //capture function to invoke on button press to capture an image
  const capture = React.useCallback(async() => {
    const imageSrc = webcamRef.current.getScreenshot();

    //using hooks to assign the "imgSrc" property
    await setSrc(imageSrc);
    //setting the visibility of the Canvas component.
    await setVisibility(true);
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        height={480}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={960}
        videoConstraints={webcamConstraints}
      />
      <button
        onClick={() => {
          capture();
          //fetching data from the speculo endpoint
          response();
        }}
      >
        Capture photo
      </button>

      {/* ternary operator to display the "CanvasComponent" */}
      {displayComponent && imgSrc !== "" ? (
        //canvas component
        <CanvasComponent imgSrc={imgSrc} coordinates={faceData} />
      ) : null}
    </>
  );
};

