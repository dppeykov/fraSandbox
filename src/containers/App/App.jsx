import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Rank from "../../components/Rank/Rank"
import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm";
import Clarifai from 'clarifai';

// run npm install clarifai


const app = new Clarifai.App({
  apiKey: '06d95d6f6ecc41168836bd1818223c47'
 });

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
    };
  }

  onInputChange = e => this.setState({input: e.target.value})

  onButtonSubmit = () => {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
  }

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
