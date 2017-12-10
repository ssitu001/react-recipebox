import React, { Component } from 'react';
// import { Grid, Row, Col, Well, PanelGroup, Panel, Button } from 'react-bootstrap';

import RecipeBox from '../RecipeBox/RecipeBox';

import logo from '../../recipe-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <RecipeBox />
      </div>
    );
  }
}

export default App;
