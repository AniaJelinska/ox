import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'cerebral/react';
import { state } from 'cerebral/tags';

import { cell } from './../model/cell';
import './Cell.css';

function showValue (value, a) {
  return value === a ? '' : 'hidden-cell';
}
class Cell extends Component {
  render() {
    const { board, cellNumber } = this.props;
    const value = board[cellNumber];
    return (
      <div className={this.props.className}>
        <div className={showValue(value, cell.o)}>
          <button className="pure-button"><b>O</b></button>
        </div>
        <div className={showValue(value, cell.x)}>
          <button className="pure-button"><b>X</b></button>
        </div>
        <div className={showValue(value, cell.empty)}>
          <button className="pure-button"><b>_</b></button>
        </div>
      </div>
    );
  }
}

export default connect(
  {
    board: state`application.board`
  },
  Cell
);

Cell.propTypes = {
  className: PropTypes.string,
  cellNumber: PropTypes.number.isRequired
}

Cell.defaultProps = {
  className: ''
}
