import React from "react";

export default class CanvasComponent extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    var image = new Image();
    image.src = `${this.props.imgSrc}`;
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
      ctx.rect(200, 150, 100, 200);
      ctx.stroke();
    };
  }
  render() {
    return <canvas ref="canvas" width={window.innerWidth} height={700} />;
  }
}
