import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/xjWkjP6/banner1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-primary fw-bold">Best Equipment</h3>
      <p>We have best O.T. with lost cost services to help you get well soon. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/QrzpCX4/banner2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-primary fw-bold">Best Doctor's</h3>
      <p>We have best doctor. who help you to recover soon</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/xXPvyGm/banner3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-primary fw-bold">Best Diagonistic</h3>
      <p>We have our own Diagonistic center with latest equipment.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;