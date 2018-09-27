import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

// Components
import Header from './components/Header';
import ConfirmMessage from './components/messages/ConfirmMessage';

// Pages
import HomePage from './components/pages/Home';
import SigninPage from './components/pages/Signin';
import SignupPage from './components/pages/Signup';
import ConfirmPage from './components/pages/Confirm';
import ProfilePage from './components/pages/Profile';
import ContactsPage from './components/pages/Contacts';
import BooksPage from './components/pages/Books';

const App = ({ location }) => (
  <div className="bookstore_app">
    <Header />
    <Grid>
      <ConfirmMessage />
      <Route location={location} exact path="/" component={HomePage} />
      <Route location={location} path="/contacts" component={ContactsPage} />
      <Route location={location} path="/confirm/:token" component={ConfirmPage} />
      <Route location={location} path="/categories/:id" component={BooksPage} />
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
