import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <Container fluid className="footer p-3 mt-5" variant="dark">
        <h1>Travel Guide</h1>
        <p>&copy; Copyright 2021</p>

        <div className="services">
          <p>Make a Tour</p>
          <p>Booking Now</p>
          <p>Our Motive</p>
          <p>Destination</p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
