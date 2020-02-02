import React from "react";

import "./App.css";
import { WebcamCapture } from "./components/webcam/webcam.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <WebcamCapture />
      </div>
    );
  }
}

export default App;
