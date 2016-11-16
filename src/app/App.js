import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Login from './containers/Login';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Orders from './containers/Orders';
import Kitchen from './containers/Kitchen';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/kitchen" component={Kitchen}/>
      </Router>
    );
  }
}

export default App;
