import React, { Component } from 'react';
import { cell } from './../model/cell';
import './Cell.css';

function showValue (value, a) {
  return value === a ? '' : 'hidden-cell';
}
export default class Cell extends Component {
  render() {
    const { value } = this.props;
    return (
      <div>
        <div className={showValue(value, cell.o)}>
          <b>O</b>
        </div>
        <div className={showValue(value, cell.x)}>
          <b>X</b>
        </div>
        <div className={showValue(value, cell.empty)}>
          <b>_</b>
        </div>
      </div>
    );
  }
}
