import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Jumbotron, Button, Container, CardDeck, Card } from 'react-bootstrap';
import Header from "./layouts/Header";
import Homepage from "./components/Homepage";
import "./App.css";
import Portfolio from './components/Portfolio';

export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    );
  }
}

export default App;

