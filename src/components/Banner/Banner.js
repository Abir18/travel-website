import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import banner from '../../Images/banner.jpg';
import banner1 from '../../Images/banner1.jpg';
import banner5 from '../../Images/banner5.jpg';

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
            height="800px"
          />
          <Carousel.Caption>
            <h1 className="text-warning custom">Switzerland</h1>
            <h3 className="text-warning">
              Journeys Are Best Measured In New Friends
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Second slide"
            height="800px"
          />

          <Carousel.Caption>
            <h1 className="text-info custom">Bali</h1>
            <h3 className="text-info ">
              Journeys Are Best Measured In New Friends
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner5}
            alt="Third slide"
            height="800px"
          />

          <Carousel.Caption>
            <h1 className="text-danger custom">Canada</h1>
            <h3 className="text-danger">
              Journeys Are Best Measured In New Friends
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
