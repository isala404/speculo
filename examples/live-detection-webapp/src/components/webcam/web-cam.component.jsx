import React from "react";
import Webcam from "react-webcam";
import "./web-cam.style.scss";
import { Button } from "../button/button.component";
import ImageCanvas from "../image-canvas/image-canvas.component";

export default class WebCamComponent extends React.Component {
  //constructor
  constructor() {
    super();

    //properties required for demonstration
    this.state = {
      isCanvasVisible: false,
      imageSource: "",
      truncatedImgSrc: "",
      faceData: [],
      isDataRecieved: false,
      displayComponent: true,
      numberOfFaces: 0
    };
  }

  componentDidMount() {
    //invoking a method call at a set interval.
    // if (this.state.displayComponent) {
    //   setInterval(() => {
    //     this.capture();
    //     console.log("captured is " + this.state.displayComponent);
    //   }, 1000);
    // }
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  //method used to capture the webcam screenshot
  capture = async () => {
    const imageSrc = this.webcam.getScreenshot();
    //verifying if the image is null and if display component is true
    if (imageSrc != null && this.state.displayComponent) {
      console.log("captured image");
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
    }
  };

  //Method used to fetch data from the endpoint
  fetchFaceData = async imageSrc => {
    //verifying if the image is null
    if (imageSrc != null) {
      console.log("image sent to backend");
      fetch("http://speculo.isala.me/", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          image: imageSrc
        })
      })
        .then(response => response.json())
        .then(data => this.setState({ faceData: data }))
        .catch(err => console.log(err))
        .then(() => {
          //retrieving the number of faces in the json array
          var len = Object.keys(this.state.faceData.data).length;
          this.setState({ numberOfFaces: len, isDataRecieved: true });
        });
    } else {
      console.log("image is null");
    }
  };

  splitImageValue = imageSrc => {
    var newImageStringArr = imageSrc.split(",");
    return newImageStringArr;
  };

  render() {
    const {
      isCanvasVisible,
      imageSource,
      faceData,
      isDataRecieved,
      numberOfFaces
    } = this.state;

    const webcamConstraints = {
      width: 1080,
      height: 720
    };

    return (
      <>
        <div className="webcam-component">
          <Webcam
            audio={false}
            height={720}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={1200}
            videoConstraints={webcamConstraints}
          />
        </div>

        <Button
          buttonStyle={captureScreenshotBtnStyle}
          className="grab-webcam-screenshot"
          onClickHandler={() => {
            this.capture();
            //toggling of enabling and disabling the live demonstration
            // if (this.state.displayComponent) {
            //   console.log("display component is false");
            //   this.setState({ displayComponent: false });
            // } else {
            //   console.log("display component is true");
            //   this.setState({ displayComponent: true });
            // }
          }}
          buttonTitle="Toggle Live Demo"
        />

        {/* ternary operator to display the "CanvasComponent" */}
        {isCanvasVisible &&
        imageSource !== "" &&
        isDataRecieved &&
        this.state.displayComponent ? (
          //canvas component
          <div className="canvas-component">
            <ImageCanvas
              imgSrc={imageSource}
              analysedFaceData={faceData.data}
              numberOfFaces={numberOfFaces}
            />
          </div>
        ) : null}
      </>
    );
  }
}

const captureScreenshotBtnStyle = {
  backgroundColor: "#808080",
  borderRadius: 5,
  padding: 20,
  width: "20%",
  fontStyle: "30",
  ":hover": {
    backgroundColor: "#00ff00"
  }
};
