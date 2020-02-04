import React from "react";

export default class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: []
    };
  }
  
  //updating canvas component on-mount
  componentDidMount() {
    this.updateCanvas();
  }

  //updating canvas on component update
  componentDidUpdate() {
    this.updateCanvas();
    this.setState({ coordinates: this.props.coordinateData });
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
        100,
        100,
        300,
        400
      );
      ctx.stroke(); //stroking the drawn rectangle
    };
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={window.innerWidth} height={700} />
        {/* <h3>{this.props.coordinateData.data.}</h3> */}
      </div>
    );
  }
}
