import React from 'react';
import { Carousel } from 'react-bootstrap';

// TODO: map Carousel > DB
const Carousels = () => (
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/slider-01.jpg" />
      <Carousel.Caption>
        <h3>Start Reading</h3>
        <p>Reading is the best for get idea</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/slider-02.jpg" />
      <Carousel.Caption>
        <h3>Lets Writing</h3>
        <p>NWriting to improve your imagination</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/slider-03.jpg" />
      <Carousel.Caption>
        <h3>Keep Reading</h3>
        <p>Reading is the best for get idea</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Carousels;
