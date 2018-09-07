import React, { Component } from 'react';
import { Form, FormGroup,  FormControl,  Button, Col } from 'react-bootstrap';

class ContactsForm extends Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col sm={4}>
            <FormControl
              type="text"
              name="name"
              placeholder="Your name"
            />
          </Col>
          <Col sm={4}>
            <FormControl
              type="text"
              name="phone"
              placeholder="Phone"
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={12}>
            <FormControl
              type="email"
              name="email"
              placeholder="Email"
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={12}>
            <FormControl
              componentClass="textarea"
              placeholder="Message"
            />
          </Col>
        </FormGroup>
        <Button type="submit" bsStyle="success">Send message</Button>
      </Form>
    );
  }
}

export default ContactsForm;
