import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
