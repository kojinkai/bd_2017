import React, { Component } from 'react';
import './App.css';
import Masthead from './components/masthead/masthead';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';

class App extends Component {
  render() {
    return (
      <div className="page-wrap">
        <Masthead />
        <Intro />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
