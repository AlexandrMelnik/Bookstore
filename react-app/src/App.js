import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

// Components
import Header from './components/Header';

// Pages
import HomePage from './components/pages/Home';
import SigninPage from './components/pages/Signin';
import SignupPage from './components/pages/Signup';
import ProfilePage from './components/pages/Profile';
import ContactsPage from './components/pages/Contacts';

const App = ({ location }) => (
  <div className="bookstore_app">
    <Header />
    <Grid>
      <Route location={location} exact path="/" component={HomePage} />
      <Route location={location} path="/contacts" component={ContactsPage} />
      <GuestRoute location={location} path="/signin" component={SigninPage} />
      <GuestRoute location={location} path="/signup" component={SignupPage} />
      <UserRoute location={location} path="/profile" component={ProfilePage} />
    </Grid>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
