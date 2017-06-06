import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Masthead from './components/masthead/masthead';
import Sidemenu from './components/sidemenu/sidemenu';
import MenuToggle from './components/menu-toggle/menu-toggle';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sideMenuIsOpen: false
    }
    this.openSideMenu = this.openSideMenu.bind(this);    
  }

  openSideMenu() {
    console.log('opening side menu');
    this.setState({
      sideMenuIsOpen: true
    });
  }  

  render() {
    return (
      <Router>
        <div className="page-wrap">
          <Masthead />
          <Sidemenu />
          <MenuToggle toggle={this.openSideMenu}/>
          <Route exact path="/" component={Intro} />
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact}/>          
        </div>
      </Router>
    );
  }
}

export default App;
