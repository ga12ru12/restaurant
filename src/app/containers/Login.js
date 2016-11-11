import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import '../../css/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-modal">
          <h3>Login</h3>
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
            <Button>Login</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;