import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestClass from './TestClass';
import TestStateless from './TestStateless';
import HelloClass from './HelloClass';

class App extends Component {
  state = {
    showStateless: false,
  }

  constructor(props) {
    super(props);

    this.diff = 0;
  }

  componentWillUpdate() {
    this.diff = performance.now();
  }

  componentDidUpdate() {
    console.log(this.state.showStateless ? 'stateless' : 'class', performance.now() - this.diff);
  }

  render() {
    const { showStateless } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <HelloClass />
        </header>
        <div className="App-intro">
          {showStateless ? 'Stateless' : 'Classes'}
          <button onClick={() => this.setState({ showStateless: !showStateless })}>Toggle classes</button>
          {showStateless && new Array(10000).fill().map((e, i) => <TestStateless key={i} number={i} />)}
          {!showStateless && new Array(10000).fill().map((e, i) => <TestClass key={i} number={i} />)}
        </div>
      </div>
    );
  }
}

export default App;
