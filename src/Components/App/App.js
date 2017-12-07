import React, { Component } from 'react';
import { Grid, Row, Col, Well, PanelGroup, Panel, Button } from 'react-bootstrap';

import RecipeBox from '../RecipeBox/RecipeBox';
import ListGroupComponent from '../ListGroup/ListGroup';
import ButtonComponent from '../Button/Button';

import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Recipe Box</h1>
        </header>
        <RecipeBox />
      </div>
    );
  }
}

export default App;
