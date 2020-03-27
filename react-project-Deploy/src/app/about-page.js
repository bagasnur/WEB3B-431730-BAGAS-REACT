import React, { Component } from "react";
import AboutComponent from "../modules/about-component";

class AboutPage extends Component {
  state = {
    visible: false
  };

  componentDidMount() {}

  render() {
    return (
      <AboutComponent
        initialData={this.state}
      />
    );
  }
}

export default AboutPage;
