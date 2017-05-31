import React, { Component } from 'react';
import './App.css';
import Cell from './components/Cell';
import Board from './components/Board';
import { cell } from './model/cell';

class App extends Component {
  render() {
    return (
      <div>
        <Board/>
      </div>
    );
  }
}

export default App;
