import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

const Profile = ({ isConfirm }) => (
  <div className="profile">
    {
      !isConfirm &&
      <Alert bsStyle="warning">
        Please check your email account and confirm the account
      </Alert>
    }
  </div>
);

Profile.propTypes = {
  isConfirm: PropTypes.bool.isRequired
}

function mapStateToProps(state){
  return {
    isConfirm: !!state.user.confirm
  }
}

export default connect(mapStateToProps)(Profile);
