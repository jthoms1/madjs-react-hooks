import React, { Component } from 'react';
import './App.css';
import ExampleOne from './components/useState/ExampleOne';
import ExampleTwo from './components/useEffect/ExampleTwo';
import ExampleThree from './components/useEffect/ExampleThree';

class App extends Component {

  example = 1;
  render() {
    return (
      <div className="App">
        {this.example === 1 ? <ExampleOne/> : null}
        {this.example === 2 ? <ExampleTwo/> : null}
        {this.example === 3 ? <ExampleThree/> : null}
      </div>
    );
  }
}

export default App;
