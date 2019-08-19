import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Rank from "../../components/Rank/Rank"
import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
