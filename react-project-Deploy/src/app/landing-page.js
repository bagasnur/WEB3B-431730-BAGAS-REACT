import React, { Component } from "react";
import LandingComponent from "../modules/landing-component";

class LandingPage extends Component {
  state = {
    visible: false
  };

  componentDidMount() {}

  render() {
    return (
      <LandingComponent
        initialData={this.state}
      />
    );
  }
}

export default LandingPage;
