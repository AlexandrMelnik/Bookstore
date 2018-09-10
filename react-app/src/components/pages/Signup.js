import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import SignupForm from '../forms/Signup';
import { signup } from '../../actions/users';

class SignupPage extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/"));
  
  render() {
    return (
      <Col md={4} mdOffset={4}>
        <h3>
          Signup page
        </h3>
        <hr />
        <SignupForm submit={this.submit} />
      </Col>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);
