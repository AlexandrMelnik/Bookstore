import React, { Component } from 'react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert  } from 'react-bootstrap';

class SignupForm extends Component {
  state = {
    data: {
      username: '',
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value}
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if(Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data)
        .catch(err => this.setState({errors: err.response.data.errors, loading: false}));
    }
  };

  validate = data => {
    const errors = {};
    if(!data.username) errors.username = "Enter your name";
    if(!Validator.isEmail(data.email)) errors.email = "Enter your e-mail address, exapmle@example.com";
    if(!data.password) errors.password = "Enter your account password";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup validationState={errors.username && 'error'}>
          <ControlLabel>Your name</ControlLabel>
            <FormControl
              type="text"
              name="username"
              placeholder="Your name"
              value={data.username}
              onChange={this.onChange}
            />
          {errors.username && <HelpBlock>{errors.username}</HelpBlock>}
        </FormGroup>
        <FormGroup validationState={errors.email && 'error'}>
          <ControlLabel>Email address</ControlLabel>
            <FormControl
              type="email"
              name="email"
              placeholder="example@example.com"
              value={data.email}
              onChange={this.onChange}
            />
          {errors.email && <HelpBlock>{errors.email}</HelpBlock>}
        </FormGroup>
        <FormGroup validationState={errors.password && 'error'}>
          <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={this.onChange}
            />
          {errors.password && <HelpBlock>{errors.password}</HelpBlock>}
        </FormGroup>
        {errors.global && <Alert bsStyle="danger">{errors.global}</Alert>}
        <hr />
        <Button type="submit" bsStyle="primary" block disabled={!!loading}>Signup</Button>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default SignupForm;
