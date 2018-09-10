import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import LoginForm from '../forms/Login';
import { signin } from '../../actions/auth';

class SigninPage extends Component {
  submit = data => this.props.signin(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <Col md={4} mdOffset={4}>
        <h3>
          Signin page
        </h3>
        <hr />
        <LoginForm submit={this.submit} />
      </Col>
    );
  }
}

SigninPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signin: PropTypes.func.isRequired
};

export default connect(null, { signin })(SigninPage);
