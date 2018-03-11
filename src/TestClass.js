import React, { Component } from 'react';

export default class TestClass extends Component {
  render() {
    return (
      <div>
        Hello from class component number ${ this.props.number }
      </div>
    )
  }
}