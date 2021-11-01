import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../../Pages/Home";
import DynamicPage from "../../Pages/Dynamic";

class MainRouter extends Component {
  sampleLandingComponent = () => {
    return <h1>DERP</h1>;
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={this.sampleLandingComponent} />
          <Route path="/home" component={HomePage} />
          <Route path="/data/:id" render={(props) => <DynamicPage {...props} />} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default MainRouter;
