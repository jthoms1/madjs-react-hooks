import React, { Component } from 'react';
import './App.css';
import ExampleOne from './components/useState/ExampleOne';
import ExampleTwo from './components/useEffect/ExampleTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExampleOne/>
        <ExampleTwo/>
      </div>
    );
  }
}

export default App;
