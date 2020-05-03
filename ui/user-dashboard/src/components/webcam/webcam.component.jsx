import React from "react";
import Webcam from "react-webcam";
import Canvas from "../canvas/canvas.component";
import styled from "styled-components";
import FormData from "form-data";
import person from "./person.jpg";
import axios from "axios";
import download from "downloadjs";
var toBlob = require("canvas-to-blob");

export default class WebCam extends React.Component {
  //constructor
  constructor() {
    super();
    this.state = {
      imageSrc: "",
      isRunning: false,
      response: [],
      rendered: false
    };

    this.canvas = null;
  }

  componentDidMount() {
    //initialization of the canvas for downscaling
    this.canvas = document.createElement("canvas");
    this.canvas.width = 432;
    this.canvas.height = 288;
    this.ctx = this.canvas.getContext("2d");
  }

  //asynchronous function to get the image from the state and downscale it using the canvas
  // returns the downscalled bas64 image
  downscaledImage = () => {
    var image = this.state.imageSrc;
    var img = new Image();
    img.src = image;
    this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    var dataURI = this.canvas.toDataURL("image/jpeg");
    return dataURI;
  };

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
    //sending the image every 75microseconds
    setInterval(async () => {
      if (this.state.isRunning) {
        //getting the downscaled image and POSTing to get the coordinates of the faces
        var img = this.downscaledImage();

        //converting base64 image to a Buffer
        var pos = img.indexOf(";base64,");
        var type = img.substring(5, pos);
        var b64 = img.substr(pos + 8);
        var imageContent = atob(b64);
        var buffer = new ArrayBuffer(imageContent.length);
        var view = new Uint8Array(buffer);

        for (var n = 0; n < imageContent.length; n++) {
          view[n] = imageContent.charCodeAt(n);
        }
        //converting image buffer to blob
        var blob = new Blob([buffer], { type: type });

        //adding blob to FormData
        let dataImg = new FormData();
        dataImg.set("image", blob);

        console.log("sending response");
        const coordinates = await fetch(
          "https://speculo.isala.me/api/v1/coordinates",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "x-access-token": localStorage.getItem("token"),
              processData: false,
              contentType: false
            },
            body: dataImg
          }
        )
          .then(response => {
            return response;
          })
          .catch(error => {
            console.log("Fail");
            console.log(error);
          });

        //Value visal requires
        const json = await coordinates.json();
        if (json.data) {
          const len = json.data.faces.length;
          // console.log(json.data.faces.length)
          if (len > 0) {
            this.setState({ response: json }, () =>
              console.log(this.state.response)
            );
          } else {
            this.setState({ response: null });
          }
        }
      }
    }, 750);
  };

  //method used to capture the webcam screenshot
  capture = () => {
    var src;
    if (this.state.isRunning && this.webcam != null) {
      src = this.webcam.getScreenshot();
    }
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

  componentWillUnmount() {
    this.setState({ isRunning: false });
  }

  render() {
    const webcamConstraints = {
      width: 720,
      height: 480
    };

    return (
      <>
        <div className="webcam-component" style={{ margin: 0 }}>
          <Webcam
            audio={false}
            height={0}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={720}
            videoConstraints={webcamConstraints}
          />
        </div>
        <CustomPrimaryButton
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
        >
          Start live demo
        </CustomPrimaryButton>
        <div className="canvas-component">
          <Canvas
            source={this.state.isRunning ? this.state.imageSrc : null}
            analysedFaceData={this.state.response}
          />
        </div>
      </>
    );
  }
}

const CustomPrimaryButton = styled.button`
  color: #2bba85;
  font-size: 1em;
  width: ${props => (props.width != null ? props.width : null)};
  padding: 0.3em 1em;
  font-family: "Gilroy-Regular";
  border: 2px solid #2bba85;
  border-radius: 3px;
  box-shadow: ${props =>
    props.showShadow ? "0px 0px 100px 4px #2bba85" : null};
  background: #2bba85;
  color: #ffffff;
  z-index: 1;
  transition: 0.3s;
  &:hover {
    background: #1ddd96;
    color: #ffffff;
    border: 2px solid #1ddd96;
    box-shadow: ${props =>
      props.showShadow ? "0px 0px 200px 10px #1ddd96" : null};
  }
`;
