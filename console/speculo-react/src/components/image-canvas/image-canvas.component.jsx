import React from "react";

export default class ImageCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: null,
      toggleCanvas: false
    };
  }

  //setting coordinates retrieved from the endpoint
  setCoordinates() {
    var faceData = this.props.analysedFaceData.data[0];
    var firstCoordinate = faceData.cords[0];
    var secondCoordinate = faceData.cords[1];
    this.setState(
      {
        toggleCanvas: true
      },
      () => {
        this.setState({
          coordinates: firstCoordinate.concat(secondCoordinate)
        });
      }
    );
  }

  //updating canvas component on-mount
  componentDidMount() {
    this.setCoordinates();
    this.updateCanvas();
  }

  //updating canvas on component update
  componentDidUpdate(prevProps) {
    //validation to prevent infinite setState loop
    if (this.props.analysedFaceData !== prevProps.analysedFaceData) {
      this.setCoordinates();
      this.updateCanvas();
    }
  }

  //method used to update the canvas
  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    var image = new Image();
    image.src = `${this.props.imgSrc}`;
    image.onload = () => {
      ctx.drawImage(image, 0, 0); //drawing the captured image on the canvas
      ctx.rect(
        // 4 coordinate values acquired by the "coordinate" prop
        this.state.coordinates[0],
        this.state.coordinates[1],
        this.state.coordinates[2],
        this.state.coordinates[3]
      );
      ctx.stroke(); //stroking the drawn rectangle
    };
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={window.innerWidth} height={7000} />
      </div>
    );
  }
}
