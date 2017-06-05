import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Masthead from './components/masthead/masthead';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-wrap">
          <Masthead />
          <Route exact path="/" component={Intro}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact}/>          
        </div>
      </Router>
    );
  }
}

export default App;
