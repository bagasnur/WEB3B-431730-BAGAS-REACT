import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../../app/landing-page";
import ContentPage from "../../app/content-page";
import AboutPage from "../../app/about-page";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/content" component={ContentPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    );
  }
}

export default Router;
