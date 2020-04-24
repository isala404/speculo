import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
  // mobile handlers can be places here

  return (
    <div className="App">
      {Routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => {
            if (match) {
              // only display component if the component was requested in the URL
              // if not, all the components gets mounted here
              return <Component />; // load relevant component defined in Routes here
            }
            return null;
          }}
        </Route>
      ))}
    </div>
  );
};

export default App;
