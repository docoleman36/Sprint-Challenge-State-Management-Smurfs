import React, { Component } from "react";
import MakeSmurf from './MakeSmurf';

import "./App.css";
import GetSmurf from "./GetSmurf";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf React/ Redux</h1>
        <div className="smurfCombine">
          <MakeSmurf />
          <GetSmurf />
        </div>
      </div>
    );
  }
}

export default App;
