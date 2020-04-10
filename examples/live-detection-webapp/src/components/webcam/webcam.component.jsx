import React from "react";
import Webcam from "react-webcam";
import Canvas from "../canvas/canvas.component";

export default class WebCam extends React.Component {
  //constructor
  constructor() {
    super();
    this.state = {
      imageSrc: "",
      isRunning: false,
      response: []
    };
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  //method to split the base64 image for processing
  splitImageValue = imageSrc => {
    var newImageStringArr = imageSrc.split(",");
    return newImageStringArr[1];
  };

  //method to send the image as a POST request to get the details of the face(s) in the image
  getFaceData = () => {
    if (this.state.isRunning) {
      //sending the image every 75microseconds
      setInterval(() => {
        var imageSource = this.state.imageSrc;
        var truncatedImageSource = this.splitImageValue(imageSource);
        fetch("http://speculo.isala.me/", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            image: truncatedImageSource
          })
        })
          .then(response => response.json())
          .then(data => this.setState({ response: data }));
      }, 750);
    }
  };

  //method used to capture the webcam screenshot
  capture = () => {
     var src = this.webcam.getScreenshot();
    this.setState({
      imageSrc: src
    });
  };

  //capturing a frame every 50 milliseconds
  getVideo = () => {
    if (this.state.isRunning) {
      console.log("inside getvideo()");
      setInterval(() => {
        this.capture();
      }, 50);
    }
  };

  render() {
    const webcamConstraints = {
      width: 1080,
      height: 720
    };

    const { isRunning, imageSrc } = this.state;

    return (
      <>
        <div className="webcam-component" style={{ margin: 0 }}>
          <Webcam
            audio={false}
            height={0}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={1080}
            videoConstraints={webcamConstraints}
          />
        </div>
        <button
          onClick={() => {
            if (this.state.isRunning) {
              this.setState({ isRunning: false });
            } else {
              this.setState({ isRunning: true }, () => {
                this.getVideo();
                this.getFaceData();
              });
            }
          }}
          value={"hello"}
        >START DEMO</button>
        <div className="canvas-component">
          <Canvas
            source={this.state.imageSrc}
            analysedFaceData={this.state.response}
          />
        </div>
      </>
    );
  }
}
