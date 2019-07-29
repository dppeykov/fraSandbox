import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
