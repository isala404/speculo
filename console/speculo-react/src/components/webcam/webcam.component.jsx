import React, { useState } from "react";
import Webcam from "react-webcam";
import CanvasComponent from "../image-canvas/image-canvas.component";

export const WebcamCapture = () => {
  //using "useState" hook for initialising and assigning of values
  const [imgSrc, setSrc] = useState("");
  const [displayComponent, setVisibility] = useState(true);

  //constraints for the displayed camera component
  const webcamConstraints = {
    width: 1280,
    height: 720
  };

  const webcamRef = React.useRef(null);

  //capture function to invoke on button press to capture an image
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    //using hooks to assign the "imgSrc" property
    setSrc(imageSrc);
    //setting the visibility of the Canvas component.
    setVisibility(true);
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
          fetch("http://speculo.isala.me/", {
            method: "POST",
            body: JSON.stringify({
              image: imgSrc
            })
          })
            .then(console.log("successful POST request new"))
            .catch(err => {
              console.log(err);
              console.log(imgSrc);
            });
        }}
      >
        Capture photo
      </button>
      {/* ternary operator to display the "CanvasComponent" */}
      {displayComponent && imgSrc !== "" ? (
        //canvas component
        <CanvasComponent imgSrc={imgSrc} coordinates={[0, 0, 50, 200]} />
      ) : null}
    </>
  );
};
