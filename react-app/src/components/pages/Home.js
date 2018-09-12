import React from 'react';
import Carousels from '../Carousel';
import Menu from '../Menu';
import { Row, Col } from 'react-bootstrap';

const HomePage = () => (
  <Row>
    <Col xs={12} md={3}>
      <h6>MAIN MENU</h6>
      <Menu />
    </Col>
    <Col xs={12} md={9}>
      <Carousels />
    </Col>
  </Row>
);

export default HomePage;
