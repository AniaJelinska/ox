import React, { Component } from 'react';
import Cell from './../../components/Cell';

export default class CellRow extends Component {
  render() {
    return (
        <div className="pure-g">
          <div className="pure-u-1-5"></div>
          <div className="pure-u-3-5">
            <div className="pure-g">
              <div className="pure-u-1-3"><Cell/></div>
              <div className="pure-u-1-3"><Cell/></div>
              <div className="pure-u-1-3"><Cell/></div>
            </div>
          </div>
          <div className="pure-u-1-5"></div>
        </div>
    );
  }
}
