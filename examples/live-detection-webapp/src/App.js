import React from "react";

import "./App.css";
import WebCamComponent from "./components/webcam/web-cam.component";
import { NavigationBar } from "./components/navigation-bar/navigation-bar.component";
import {HomePage} from "./pages/home-page/home-page.page";
// import { WebcamCapture } from "./components/webcam/webcam.component";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <HomePage/>
      </div>
    );
  }
}

export default App;
