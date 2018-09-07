import React, { Component } from 'react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert  } from 'react-bootstrap';

class LoginForm extends Component {
  state = {
    data: {
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

  validate = (data) => {
    const errors = {};
    if(!Validator.isEmail(data.email)) errors.email = "Enter your e-mail address, exapmle@example.com";
    if(!data.password) errors.password = "Enter your account password";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
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
              placeholder="Enter your password"
              value={data.password}
              onChange={this.onChange}
            />
          {errors.password && <HelpBlock>{errors.password}</HelpBlock>}
        </FormGroup>
        {errors.global && <Alert bsStyle="danger">{errors.global}</Alert>}
        <hr />
        <Button type="submit" bsStyle="primary" block disabled={!!loading}>Signin</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;
