import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Rank from "../../components/Rank/Rank"
import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm";
// import Clarifai from 'clarifai';
import FaceRecognition from "../../components/FaceRecognition/FaceRecognition"

// run npm install clarifai
// http://ericsusch.com/blog1/wp-content/uploads/2018/06/Man-Concentrated-1000x1000.jpg  -->> testing image


// const app = new Clarifai.App({
//   apiKey: '06d95d6f6ecc41168836bd1818223c47'
//  });

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      imageUrl: '',
    };
  }

  onInputChange = e => this.setState({input: e.target.value})

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})

    // app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    // function(response) {
    //   response.outputs[0].data.regions[0].region_info.bounding_box
    // },
    // function(err) {
    //   // there was an error
    // }
  //);
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
