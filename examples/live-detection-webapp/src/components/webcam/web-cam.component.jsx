import React, { createElement } from "react";
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
      displayComponent: true
    };
  }

  componentDidMount() {
    if (this.state.displayComponent) {
      setInterval(() => {
        console.log("interval");
        this.capture();
      }, 1000);
    }
  }
  componentDidUpdate() {
    this.captureOnInterval();
  }


  setRef = webcam => {
    this.webcam = webcam;
  };

  //method used to capture the webcam screenshot
  capture = async () => {
    try {
      const imageSrc = this.webcam.getScreenshot();
      if (imageSrc != null && this.state.displayComponent) {
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
            // var newImage = this.downscaledImage(imageSrc, 480, 288);
            // console.log(newImage);
            this.fetchFaceData(newImageSource);
          }
        );
      } else {
        console.log("image == null");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Method used to fetch data from the endpoint
  fetchFaceData = async imageSrc => {
    if (imageSrc != null) {
      fetch("http://speculo.isala.me/", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          image: imageSrc
        })
      })
        .then(response => response.json())
        .then(data => this.setState({ faceData: data, isDataRecieved: true }))
        .catch(err => console.log(err));
      // .then(() => console.log(this.state.faceData));
    } else {
      console.log("null image referenced");
    }
  };

  splitImageValue = imageSrc => {
    var newImageStringArr = imageSrc.split(",");
    return newImageStringArr;
  };

  downscaledImage = (imgSrc, width, height) => {
    var canvas = document.getElementById("canvas");
    const ctx = this.refs.canvasOne.getContext("2d");
    var image = new Image();
    image.src = `${imgSrc}`;
    image.onload = () => {
      ctx.drawImage(image, 0, 0, width, height);
      console.log("returned base64 image " + ctx.toDataURL);
    };
    return ctx.toDataURL();
  };

  render() {
    const {
      isCanvasVisible,
      imageSource,
      faceData,
      isDataRecieved
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
            if (this.state.displayComponent) {
              this.setState({displayComponent: false})
            }else{
              this.setState({displayComponent: true})
            }
          }}
          buttonTitle="Stop/Start Live demo"
        />

        {/* ternary operator to display the "CanvasComponent" */}
        {isCanvasVisible &&
        imageSource !== "" &&
        isDataRecieved &&
        this.state.displayComponent ? (
          //canvas component
          <div>
            <div className="canvas-component">
              <ImageCanvas imgSrc={imageSource} analysedFaceData={faceData} />
            </div>
            <div>
              <canvas id="" ref="canvasOne" width={480} height={288} />
            </div>
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
