import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import BookList from '../books/BookList';
import Carousels from '../Carousel';
import Categories from '../books/Categories';

class HomePage extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={3}>
          <h5>Categories</h5>
          <Categories />
        </Col>
        <Col xs={12} md={9}>
          <Carousels />
          <h3>Popular</h3>
          <hr />
          <BookList />
        </Col>
      </Row>
    );
  }
}

export default HomePage;
