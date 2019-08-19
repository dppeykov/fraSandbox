import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Rank from "../../components/Rank/Rank"
import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm";
import Clarifai from "clarifai";
import FaceRecognition from "../../components/FaceRecognition/FaceRecognition";
import SignIn from "../../components/SignIn/SignIn";
import Register from "../../components/Register/Register";


const app = new Clarifai.App({
  apiKey: ''
 });

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      imageUrl: 'http://ericsusch.com/blog1/wp-content/uploads/2018/06/Man-Concentrated-1000x1000.jpg',
      box: {},
      route: 'signin'
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = box => {
    this.setState({box})
  }

  onInputChange = e => this.setState({input: e.target.value})

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
     .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
     .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
  const { route, imageUrl, box } = this.state;
    return (
      <div className="App">
        <Navigation display={route} onRouteChange={this.onRouteChange}/>
        { route === 'home' ?
          <div>
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition imageUrl={imageUrl} box={box}/> 
          </div> :
          (
            route === 'signin' 
            ? <SignIn onRouteChange={this.onRouteChange}/> 
            : <Register onRouteChange={this.onRouteChange}/> 
          )
        
}
      </div>
    );
  }
}

export default App;
