import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import BookList from '../books/BookList';
import Carousels from '../Carousel';
import Menu from '../Menu';

class HomePage extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={3}>
          <h6>MAIN MENU</h6>
          <Menu />
        </Col>
        <Col xs={12} md={9}>
          <Carousels />
          <BookList />
        </Col>
      </Row>
    );
  }
}

export default HomePage;
