import React, { Component } from 'react';
import './App.css';
import Masthead from './components/masthead/masthead';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';

class App extends Component {
  render() {
    return (
      <div className="page-wrap">
        <Masthead />
        <Intro />
        <Skills />
      </div>
    );
  }
}

export default App;
