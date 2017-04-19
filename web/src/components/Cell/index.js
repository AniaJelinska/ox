import React, { Component } from 'react';

export default class Cell extends Component {
  constructor () {
    super();
    this.state = {
      value: ''
    }

    this.setX = this.setX.bind(this);
  }

  setX () {
    this.setState({
      value: 'X'
    });
  }

  render() {
    return (
      <div>
        <button
          className="pure-button pure-button-primary"
          onClick={this.setX}
        >
        {this.state.value}
        </button>
      </div>
    );
  }
}
