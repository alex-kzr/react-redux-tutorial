import React, { Component } from 'react';
import Ninjas from './Ninja';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Ninjas name="Ryu" age="25" belt="black" />
      </div>
    );
  }  
}

export default App;
