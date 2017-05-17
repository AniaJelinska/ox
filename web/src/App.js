import React, { Component } from 'react';
import './App.css';
import Cell from './components/Cell';
import { cell } from './model/cell';

class App extends Component {
  render() {
    return (
      <div>
        <Cell value={cell.o}/>
        <Cell value={cell.x}/>
        <Cell value={cell.empty}/>
      </div>
    );
  }
}

export default App;
