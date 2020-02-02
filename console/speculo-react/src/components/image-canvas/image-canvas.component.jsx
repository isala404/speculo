import React from "react";

export default class CanvasComponent extends React.Component {

  //updating canvas component on-mount
  componentDidMount() {
    this.updateCanvas();
  }

  //updating canvas on component update
  componentDidUpdate() {
    this.updateCanvas();
  }

  //method used to update the canvas
  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    var image = new Image();
    image.src = `${this.props.imgSrc}`;
    image.onload = () => {
      ctx.drawImage(image, 0, 0);   //drawing the captured image on the canvas
      ctx.rect(
        // 4 coordinate values acquired by the "coordinate" prop
        this.props.coordinates[0],
        this.props.coordinates[1],
        this.props.coordinates[2],
        this.props.coordinates[3]
      );
      ctx.stroke();   //stroking the drawn rectangle
    };
  }

  render() {
    return <canvas ref="canvas" width={window.innerWidth} height={700} />;
  }
}
