import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import '../../css/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-modal">
          <FontAwesome name='user-circle-o' size='4x' className="Login-logo" inverse={true}/>
          <Form role="form" onSubmit={ e => {
            e.preventDefault();
            this.props.onSubmit(findDOMNode(this.refs.username).value, findDOMNode(this.refs.password).value);
          }}>
            <div className="Login-form">
              <FormGroup controlId="formUsername">
                <FormControl
                  type="text"
                  placeholder="Username"
                  ref='username'
                />
              </FormGroup>
              <FormGroup controlId="formPassword">
                <FormControl
                  type="password"
                  placeholder="Password"
                  ref='password'
                />
              </FormGroup>
            </div>
            <Button className="LoginBtn" type="submit">Login</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;