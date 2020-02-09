import React from "react";

export default class ImageCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      coordinates: [],
      showCanvas: false
    };
  }

  //method which uses props to retreive data and update
  setData() {
    var recievedData = this.props.analysedFaceData;
    var firstCoordinate = recievedData.data[0].cords[0];
    var secondCoordinate = recievedData.data[0].cords[1];
    try {
      this.setState({
        name: recievedData.data[0].name,
        coordinates: firstCoordinate.concat(secondCoordinate),
        showCanvas: true
      });
    } catch (err) {
      this.setState({ coordinates: [0, 0, 0, 0] });
      console.log(err);
    }
  }

  //updating canvas component on-mount
  componentDidMount() {
    this.setData();
  }

  //updating canvas on component update
  componentDidUpdate() {
    this.setData();
  }

  //method used to update the canvas
  updateCanvas() {
    const { coordinates, name } = this.state;
    const ctx = this.refs.canvas.getContext("2d");
    var image = new Image();
    image.src = `${this.props.imgSrc}`;
    image.onload = () => {
      ctx.drawImage(image, 0, 0); //drawing the captured image on the canvas
      ctx.rect(
        // 4 coordinate values acquired by the "coordinate" prop
        coordinates[0],
        coordinates[1],
        coordinates[2],
        coordinates[3]
      );
      ctx.stroke(); //stroking the drawn rectangle
    };
  }

  render() {
    return (
      <div>
        {this.state.showCanvas ? (
          <canvas ref="canvas" width={window.innerWidth} height={700} />
        ) : null}
      </div>
    );
  }
}
