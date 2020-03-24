import React from "react";

export default class ImageCanvas extends React.Component {

  //constructor and state
  constructor(props) {
    super(props);
    this.state = {
      toggleCanvas: false
    };
  }

  //method for concatenating the retrieved coordinates and retrieving the value
  getCoordinates(faceData) {
    var firstCoordinate = faceData.cords[0];
    var secondCoordinate = faceData.cords[1];
    this.setState({
      toggleCanvas: true
    });
    //concatenating the 2 coordinate arrays
    return firstCoordinate.concat(secondCoordinate);
  }

  //updating canvas component on-mount
  componentDidMount() {
    this.updateCanvas();
  }

  //updating canvas on component update
  componentDidUpdate(prevProps) {
    //validation to prevent infinite setState loop
    if (this.props.analysedFaceData !== prevProps.analysedFaceData) {
      this.updateCanvas();
    }
  }

  //method used to update the canvas
  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    this.props.analysedFaceData.map((face) => {
      //creating a new Image object and storing data required
      var image = new Image();
      image.src = `${this.props.imgSrc}`;
      image.onload = () => {
        var coordinates = this.getCoordinates(face);
        console.log(coordinates);
        ctx.drawImage(image, 0, 0); //drawing the captured image on the canvas
        //drawing the rectangle on the canvas given the coordinates
        ctx.rect(
          coordinates[0],
          coordinates[1],
          coordinates[2] - coordinates[0],
          coordinates[3] - coordinates[1]
        );
        ctx.stroke(); //stroking the drawn rectangle
      };
    });
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={window.innerWidth} height={7000} />
      </div>
    );
  }
}
