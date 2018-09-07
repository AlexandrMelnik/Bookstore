import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

// Components
import Header from './components/Header';

// Pages
import HomePage from './components/pages/Home';
import ContactsPage from './components/pages/Contacts';
import SigninPage from './components/pages/Signin';


const App = () => (
  <div className="App">
    <Header />
    <Grid>
      <Route exact path="/" component={HomePage} />
      <Route path="/contacts" component={ContactsPage} />
      <Route path="/signin" component={SigninPage} />
    </Grid>
  </div>
);

export default App;
