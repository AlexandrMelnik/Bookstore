import React from 'react';
import { Col } from 'react-bootstrap';

const Book = (props) => (
  <Col xs={12} sm={6} md={4} lg={3}>
    <a href={props.link} className="thumbnail" style={{textDecoration: 'none'}}>
      <img src={props.image}  alt={props.alt} />
      <h5 className="text-center">{props.title}</h5>
    </a>
  </Col>
);

export default Book;
