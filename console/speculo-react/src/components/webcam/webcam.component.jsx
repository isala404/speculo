import React, { useState } from "react";
import Webcam from "react-webcam";
import CanvasComponent from "../image-canvas/image-canvas.component";

export const WebcamCapture = () => {
  //using "useState" hook for initialising and assigning of values
  const [imgSrc, setSrc] = useState("");
  const [displayComponent, setVisibility] = useState(true);

  const url = "http://speculo.isala.me/";
  const data = { image: imgSrc };

  const response = () =>
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

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
          response()
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
