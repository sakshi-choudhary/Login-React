import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/home";
import Dash from "./Pages/dash";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact render={() => <Home />} />

            <Route path="/dashboard" exact render={() => <Dash />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
