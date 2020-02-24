import React, { Component } from "react";
import "./App.css";

// This URL can be combined with an photo id to fetch a photo.
const PHOTO_URL = insertHere => `https://picsum.photos/id/${insertHere}/200/200`;
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

class App extends Component {
  // 1. Declare a state object that will be used to track an array of photos
  state = {
    photos:[],
  };

  componentDidMount(){
    fetch(PHOTO_LIST_URL)
      .then(res => {return res.json()})
      .then(photos => {this.setState({photos})})
  }

  // 2. Declare a life cycle method
  // This life cycle method should:
  //  - will be called after the component is initially rendered
  // - will fetch an array of photos
  // - will add that array of photos to state once received

  render() {
    const { photos = [] } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <header>
            <h1>Photo Wall</h1>
            <p>
              Start by reading App.jsx and completing the numbered steps.
              Afterward, delete this paragraph. Then, open up App.css and complete
              the instructions there.
            </p>
          </header>
          <div className="collage">
            {photos.map(image => (
              <img
                alt={image.filename}
                key={image.id}
                src={PHOTO_URL(image.id)}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
