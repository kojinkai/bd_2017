import React, { Component } from 'react';
import './App.css';
import Masthead from './components/masthead/masthead'
import Intro from './components/intro/intro'

class App extends Component {
  render() {
    return (
      <div className="page-wrap">
        <Masthead />
        <Intro />
      </div>
    );
  }
}

export default App;
