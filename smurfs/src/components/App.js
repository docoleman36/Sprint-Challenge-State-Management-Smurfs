import React, { Component } from "react";
import MakeSmurf from './MakeSmurf';

import "./App.css";
import GetSmurf from "./GetSmurf";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <MakeSmurf/>
        <GetSmurf/>
      </div>
    );
  }
}

export default App;
