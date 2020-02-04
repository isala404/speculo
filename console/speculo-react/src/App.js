import React from "react";

import "./App.css";
import WebCam from "./components/webcam/web-cam.component";
// import { WebcamCapture } from "./components/webcam/webcam.component";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <WebCam/>
      </div>
    );
  }
}

export default App;
