import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './containers/Home';
import Login from './containers/Login';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/login" component={Login}/>
      </Router>
    );
  }
}

export default App;
