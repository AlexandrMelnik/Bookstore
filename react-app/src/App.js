import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

// Components
import Header from './components/Header';

// Pages
import HomePage from './components/pages/Home';
import ContactsPage from './components/pages/Contacts';
import SigninPage from './components/pages/Signin';
import ProfilePage from './components/pages/Profile';

const App = ({ location }) => (
  <div className="bookstore_app">
    <Header />
    <Grid>
      <Route location={location} exact path="/" component={HomePage} />
      <Route location={location} path="/contacts" component={ContactsPage} />
      <GuestRoute location={location} path="/signin" component={SigninPage} />
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
