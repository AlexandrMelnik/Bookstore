import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

const ConfirmAccount = ({ isConfirm, isAuth }) => (
  <div className="profile">
    {isAuth && !isConfirm &&
      <Alert bsStyle="warning">
        <p>Please check your email account and confirm the account</p>
      </Alert>
    }
  </div>
);

ConfirmAccount.propTypes = {
  isConfirm: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired
}

function mapStateToProps(state){
  return {
    isConfirm: !!state.user.confirm,
    isAuth: !!state.user.token
  }
}

export default connect(mapStateToProps)(ConfirmAccount);
