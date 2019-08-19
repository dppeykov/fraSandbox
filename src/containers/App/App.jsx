import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Rank from "../../components/Rank/Rank"
import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm";

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
    };
  }

  onInputChange = e => this.setState({input: e.target.value})

  onButtonSubmit = () => console.log('click')

  render() {
    return (
      <div className="App">
        <Navigation />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      </div>
    );
  }
}

export default App;
