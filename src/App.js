import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Masthead from './components/masthead/masthead';
import Sidemenu from './components/sidemenu/sidemenu';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-wrap">
          <Masthead />
          <Sidemenu />
          <Route exact path="/" component={Intro}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact}/>          
        </div>
      </Router>
    );
  }
}

export default App;
