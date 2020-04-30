import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Routes from "./Routes";
import { NavigationMenu } from "./components/navigation-bar/navigation-bar.component";
import { CSSTransition } from "react-transition-group";

const App = () => {
  // mobile handlers can be places here

  return (
    <>
      <div className="App">
        <NavigationMenu />
        {Routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {/* http://reactcommunity.org/react-transition-group/with-react-router.
            use of CSSTransition to animate page routing */}
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1000}
                  classNames="view"
                  unmountOnExit
                >
                  <div className="view">
                    {/* rendering the component onto the div */}
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
        ))}
      </div>
    </>
  );
};

export default App;
