import React from "react";
import Webcam from "react-webcam";
import Canvas from "../canvas/canvas.component";
import styled from "styled-components";

export default class WebCam extends React.Component {
  //constructor
  constructor() {
    super();
    this.state = {
      imageSrc: "",
      isRunning: false,
      response: []
    };

    this.canvas = null;
  }

  componentDidMount(){
    //initialization of the canvas for downscaling
    this.canvas = document.createElement("canvas");
    this.canvas.width = 400;
    this.canvas.height = 300;
    this.ctx = this.canvas.getContext("2d");
  }

  //asynchronous function to get the image from the state and downscale it using the canvas
  // returns the downscalled bas64 image
  downscaledImage = async() =>{
    var image = await this.state.imageSrc
    var img = new Image();
    img.src = image;
    this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
    var dataURI = this.canvas.toDataURL("image/jpeg");
    return dataURI;
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
        //getting the downscaled image and POSTing to get the coordinates of the faces
        var imageSource = this.downscaledImage();;
        // imageSource = downscaledImage( 648, 432);
        var truncatedImageSource = this.splitImageValue(imageSource);
        fetch("http://speculo.isala.me/", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            image: truncatedImageSource
          })
        })
          .then(response => response.json())
          .then(data => this.setState({ response: data }, () => {
            console.log(data)
          }));
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
      width: 3600,
      height: 720
    };


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
        {/* <div><Canvas source = {downscaledImage} /></div> */}
      </>
    );
  }
}

// const downscaledImage = (width, height) => {
//   // create an off-screen canvas
//   const canvas = document.createElement('canvas')
//   canvas.width = width;
//   canvas.height = height;
//   const ctx = canvas.getContext("2d");
//   var image = new Image()
//   image.src = `${this.state.imageSrc}`;
//   image.onload =() =>{
//     ctx.drawImage(image, 0,0, width, height)
//   }
//   console.log(canvas.toDataURL())
//   return canvas.toDataURL("image/jpeg",0.5)
// };

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
