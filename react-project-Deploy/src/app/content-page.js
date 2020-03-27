import React, { Component } from "react";
import ContentComponent from "../modules/content-component";

class ContentPage extends Component {
  state = {
    visible: false
  };

  componentDidMount() {}

  render() {
    return (
      <ContentComponent
        initialData={this.state}
      />
    );
  }
}

export default ContentPage;
