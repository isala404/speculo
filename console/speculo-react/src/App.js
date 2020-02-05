import React from "react";

import "./App.css";
import WebCamComponent from "./components/webcam/web-cam.component";
// import { WebcamCapture } from "./components/webcam/webcam.component";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <WebCamComponent/>
      </div>
    );
  }
}

export default App;
