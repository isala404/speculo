import React from "react";

export default class Canvas extends React.Component {

  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }

  //method to update the canvas element
  updateCanvas() {
    const ctx = this.refs.camvas.getContext("2d");
    var image = new Image();
    image.src = `${this.props.source}`;
    image.onload = () => {
      //drawing the image on the canvas
      ctx.drawImage(image, 0, 0);
    };
    var faceData = this.props.analysedFaceData;
    if (faceData.length === undefined && faceData.data.length > 0) {
      //resetting the canvas
      ctx.beginPath();
      //using a map function to iterate through all the detected faces
      this.props.analysedFaceData.data.map(face => {
        var coordinates = this.getCoordinates(face);
        //drawing the rectangle in the canvas
        ctx.rect(
          coordinates[0],
          coordinates[1],
          coordinates[2] - coordinates[0],
          coordinates[3] - coordinates[1]
        );
        var faceName = face.name;
        //drawing the face name in the canvas
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(faceName, coordinates[0], coordinates[1] - 20);
        ctx.strokeStyle = "#FF0000";

        //rectangle style
        ctx.lineWidth = 5;
        ctx.stroke();
        return face
      });
    }
  }

  render() {
    return (
      <div>
        <canvas ref="camvas" width={1080} height={720}/>
      </div>
    );
  }

  //method for concatenating the retrieved coordinates and retrieving the value
  getCoordinates(faceData) {
    var firstCoordinate = faceData.cords[0];
    var secondCoordinate = faceData.cords[1];
    //concatenating the 2 coordinate arrays
    return firstCoordinate.concat(secondCoordinate);
  }
}
