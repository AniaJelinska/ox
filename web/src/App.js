import React, { Component } from 'react';
import './App.css';
import 'purecss/build/pure-min.css';
import CellRow from './components/CellRow';

class App extends Component {
  render() {
    return (
      <div>
      <CellRow/>
      <CellRow/>
        <CellRow/>
      </div>
    );
  }
}

export default App;
