import React from "react";

export default class ImageCanvas extends React.Component {

  //constructor and state
  constructor(props) {
    super(props);
    this.state = {
      toggleCanvas: false
    };
  }

<<<<<<< HEAD
  //setting coordinates retrieved from the endpoint
  setCoordinates() {
    
    var faceData = this.props.analysedFaceData.data[0];
=======
  //method for concatenating the retrieved coordinates and retrieving the value
  getCoordinates(faceData) {
>>>>>>> e662a762a45b64b51fc551b0db311a5d17ce2662
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
      this.clearCanvas();
      this.updateCanvas();
    }
  }

  clearCanvas(){
    const ctx = this.refs.canvas.getContext("2d");
    ctx.clearRect(0, 0, ctx.width, ctx.height);
  }

  //method used to update the canvas
  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
<<<<<<< HEAD
    var image = new Image();
    image.src = `${this.props.imgSrc}`;
    image.onload = () => {
      ctx.drawImage(image, 0, 0); //drawing the captured image on the canvas
      ctx.rect(
        // 4 coordinate values acquired by the "coordinate" prop
        this.state.coordinates[0],
        this.state.coordinates[1],
        this.state.coordinates[2] - this.state.coordinates[0],
        this.state.coordinates[3] - this.state.coordinates[1]
      );
      ctx.stroke(); //stroking the drawn rectangle
    };
=======
    //creating a map of all the faces retrieved in the image
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
>>>>>>> e662a762a45b64b51fc551b0db311a5d17ce2662
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={window.innerWidth} height={7000} />
      </div>
    );
  }
}
