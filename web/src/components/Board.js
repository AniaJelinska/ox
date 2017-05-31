import React, { Component } from 'react';
import { connect } from 'cerebral/react';
import { state } from 'cerebral/tags';
import Cell from "./Cell"
import { cell } from './../model/cell';

class Board extends Component {
  render() {
    console.log(this.props);
    const board = this.props.board;
    return (
      <div>
      <table className="pure-table">
          <tr>
              <td><Cell cellNumber={0} /></td>
              <td>
                <Cell cellNumber={1} />
              </td>
              <td><Cell cellNumber={2} /></td>

          </tr>
          <tr>
              <td><Cell cellNumber={3} /></td>
              <td><Cell cellNumber={4} /></td>
              <td><Cell cellNumber={5} /></td>

          </tr>
          <tr>
              <td><Cell cellNumber={6} /></td>
              <td><Cell cellNumber={7} /></td>
              <td>
                <Cell cellNumber={8} />
              </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default connect(
  {
    board: state`application.board`
  },
  Board
);
