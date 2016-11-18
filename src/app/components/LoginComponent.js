import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import '../../css/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-modal">
          <FontAwesome name='user-circle-o' size='4x' className="Login-logo" inverse="white"/>
          <Form>
            <div className="Login-form">
              <FormGroup controlId="formUsername">
                <FormControl
                  type="text"
                  placeholder="Username"
                />
              </FormGroup>
              <FormGroup controlId="formPassword">
                <FormControl
                  type="text"
                  placeholder="Password"
                />
              </FormGroup>
            </div>
            <Button className="LoginBtn">Login</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;