import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import HomePage from "pages/Home";
import DynamicPage from "pages/Dynamic";

import Header from "components/Header";
import Footer from "components/Footer";

class MainRouter extends Component {
  sampleLandingComponent = () => {
    return <h1>Sample Landing Page</h1>;
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={this.sampleLandingComponent} />
          <Route path="/home" component={HomePage} />
          <Route path="/data/:id" render={(props) => <DynamicPage {...props} />} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default MainRouter;
