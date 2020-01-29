import React, { useState } from "react";
import Webcam from "react-webcam";
import CanvasComponent from "../image-canvas/image-canvas.component";

export const WebcamCapture = () => {
  const [imgSrc, setSrc] = useState("");
  const [displayComponent, setVisibility] = useState(true);

  const webcamConstraints = {
    width: 1280,
    height: 720
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // console.log(imageSrc);

    setSrc(imageSrc);
    setVisibility(true);
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        height={360}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={webcamConstraints}
      />
      <button
        onClick={() => {
          console.log("captured");
          capture();
        }}
      >
        Capture photo
      </button>
      {/* {console.log(imgSrc)} */}
      {displayComponent && imgSrc != "" ? (
        <CanvasComponent imgSrc={imgSrc} />
      ) : null}
    </>
  );
};

