import React from "react";

import "./App.css";
import { HomePage } from "./pages/home-page/home-page.page";
// import { WebcamCapture } from "./components/webcam/webcam.component";

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <HomePage />
      </div>
    );
  }
}

export default App;
