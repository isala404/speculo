import React from "react";
import Webcam from "react-webcam";
import CanvasComponent from "../image-canvas/image-canvas.component";

export default class WebCamComponent extends React.Component {
  constructor() {
    super();

    //properties required for the demonstration
    this.state = {
      isCanvasVisible: false,
      imageSource: "",
      truncatedImgSrc: "",
      faceData: []
    };
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = async () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState(
      {
        isCanvasVisible: true
      },
      () => {
        var newImageSource = this.splitImageValue(imageSrc)[1];
        this.setState({
          truncatedImgSrc: newImageSource,
          imageSource: imageSrc
        });
        this.fetchFaceData(newImageSource);
      }
    );
  };

  fetchFaceData = async imageSrc => {
    fetch("http://speculo.isala.me/", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        image: imageSrc
      })
    })
      .then(response => response.json())
      .then(data => this.setState({ faceData: data }))
      .then(() => console.log(this.state.faceData));
  };

  splitImageValue = imageSrc => {
    var newImageStringArr = imageSrc.split(",");
    return newImageStringArr;
  };

  render() {
    const { isCanvasVisible, imageSource, faceData } = this.state;
    const webcamConstraints = {
      width: 1280,
      height: 720
    };

    return (
      <>
        <Webcam
          audio={false}
          height={480}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={960}
          videoConstraints={webcamConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>

        {/* ternary operator to display the "CanvasComponent" */}
        {isCanvasVisible && imageSource !== "" ? (
          //canvas component
          <CanvasComponent imgSrc={imageSource} coordinateData={faceData} />
        ) : null}
      </>
    );
  }
}
