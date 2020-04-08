import React from "react";
import Webcam from "react-webcam";
import ImageCanvas from "../image-canvas/image-canvas.component";
import Camvas from "./test-canvas.component";
import { node } from "prop-types";
import Resizer from 'react-image-file-resizer';


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

  splitImageValue = imageSrc => {
    var newImageStringArr = imageSrc.split(",");
    return newImageStringArr[1];
  };

  getFaceData = () => {
    if (this.state.isRunning) {
      setInterval(() => {
        console.log("sending response");
        var imageSource = this.state.imageSrc;
        var image = new Image();
        image.src = `${imageSource}`
        Resizer.imageFileResizer(
            image,
            540,
            360,
            "JPEG",
            100,
            0, 
            uri => {
                console.log(uri)
                imageSource = uri
            },
            "base64"
             )
        var truncatedImageSource = this.splitImageValue(imageSource);
        fetch("http://speculo.isala.me/", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
              image: truncatedImageSource
            })
          })
        // axios
        //   .post("http://speculo.isala.me/", {
        //     image: truncatedImageSource
        //   })
          .then(response => response.json())
          .then(data =>
            this.setState({ response: data }, () =>
              console.log(this.state.response)
            )
          );
      }, 2000);
    }
  };

  //method used to capture the webcam screenshot
  capture = () => {
    var src = this.webcam.getScreenshot();
    this.setState({
      imageSrc: src
    });
  };

  getVideo = () => {
    if (this.state.isRunning) {
      console.log("inside getvideo()");
      setInterval(() => {
        this.capture();
      }, 100);
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
              this.setState({ isRunning: false }, () => {});
            } else {
              this.setState({ isRunning: true }, () => {
                this.getVideo();
                this.getFaceData()
              });
            }
          }}
          value={"hello"}
        />
        //canvas component
        <div className="canvas-component">
          <Camvas source={this.state.imageSrc} />
        </div>
      </>
    );
  }
}
