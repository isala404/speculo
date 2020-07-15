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
    //value to scale the coordinated by
    const scaleBy = 1.6666666;
    const ctx = this.refs.camvas.getContext("2d");
    var image = new Image();
    image.src = `${this.props.source}`;
    image.onload = () => {
      //drawing the image on the canvas
      ctx.drawImage(image, 0, 0);
    };

    if (this.props.analysedFaceData !== null){
      if (this.props.analysedFaceData.data) {
        var faceData = this.props.analysedFaceData.data.faces;
        //resetting the canvas
        ctx.beginPath();
        // using a map function to iterate through all the detected faces
        faceData.map(face => {
          var coordinates = face.coordinates;
          //drawing the rectangle in the canvas
          ctx.rect(
            coordinates[1] * scaleBy,
            coordinates[0] * scaleBy,
            (coordinates[3] - coordinates[1]) * scaleBy,
            (coordinates[2] - coordinates[0]) * scaleBy
          );
          var faceName = face.label;
          //drawing the face name in the canvas
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.fillText(
            faceName,
            coordinates[1] * scaleBy,
            coordinates[0] * scaleBy - 20
          );
          ctx.strokeStyle = "#FF0000";
  
          //rectangle style
          ctx.lineWidth = 5;
          ctx.stroke();
          return face;
        });
      }
    }
  }

  render() {
    return (
      <div>
        <canvas ref="camvas" width={720} height={480} className="face-canvas"/>
      </div>
    );
  }

  //method for concatenating the retrieved coordinates and retrieving the value
  getCoordinates(face) {
    var firstCoordinate = face.cords[0];
    var secondCoordinate = face.cords[1];
    //concatenating the 2 coordinate arrays
    return firstCoordinate.concat(secondCoordinate);
  }
}
