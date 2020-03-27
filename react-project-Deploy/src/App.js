import React from "react";
import "../src/assets/css/App.css";
import Navbar from "./common/layout/navbar-landing";
import Routing from "./common/router/Router";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routing />
      </div>
    );
  }
}

export default App;
