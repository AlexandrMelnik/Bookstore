import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { confirm } from '../../actions/auth';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

class ConfirmPage extends Component {
  state = {
    loading: true,
    success: false
  }

  componentDidMount() {
    this.props.confirm(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  render() {
    const { loading, success } = this.state;
    return (
      <div className="confirm">
        {loading && (
          <p>Checking...</p>
        )}
        {!loading && success && (
          <Alert bsStyle="success">
            <p>Your account has been verefied.</p>
            <p><Link to="/profile">Go to profile</Link></p>
          </Alert>
        )}
        {!loading && !success &&
          <Alert bsStyle="danger">
            <p>Invalid token.</p>
            <p><Link to="/">Go to main page</Link></p>
          </Alert>
        }
      </div>
    );
  }
}

ConfirmPage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default connect(null, { confirm })(ConfirmPage);
