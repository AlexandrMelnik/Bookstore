import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

// Contacts components
import Map from '../contacts/Map';
import Address from '../contacts/Address';
import ContactsForm from '../forms/Contacts';

class ContactsPage extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col xs={12} md={8}>
          <Map />
          <h3>
            Send message
          </h3>
          <hr />
          <ContactsForm />
        </Col>
        <Col xs={12} md={4}>
          <h3>
            Our contacts
          </h3>
          <hr />
          <Address />
        </Col>
      </Row>
    );
  }
}

export default ContactsPage;
