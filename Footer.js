// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';


const Footer = () => {
  return (
    <footer className="footer pt-5">
      <Container className='mb-5'>
        <Row className="justify-content-between ">
          {/* Left Section */}
          <Col md={5} className="">
            <div className="footer-logo mb-3 d-flex align-items-center">
              <img src="https://flipkartacademy-scoa.in/assets/logo/Flipkart_logo.png" alt='logo image' />
            </div>
            <p className='fw-medium size'>
              Mollis duis conubia phasellus iaculis hendrerit taciti. Ligula morbi velit facilisis imperdiet si suscipit tristique netus cursus.
            </p>
            <div className="social-icons mt-4">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </Col>

          {/* Services */}
          <Col md={2} className="mb-4">
            <h5 className='pb-2'>Services</h5>
            <ul className="footer-links fw-normal">
              <li>Cyber Security</li>
              <li>Database</li>
              <li>Cloud Service</li>
              <li>Mobile App</li>
              <li>Web Design</li>
              <li>Online Marketing</li>
            </ul>
          </Col>

          {/* Support */}
          <Col md={2} className="mb-4">
            <h5 className='pb-2'>Support</h5>
            <ul className="footer-links">
              <li>Help Center</li>
              <li>Ticket Support</li>
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </Col>

          {/* Company */}
          <Col md={2} className="mb-4">
            <h5 className='pb-2'>Company</h5>
            <ul className="footer-links">
              <li>About us</li>
              <li>Leadership</li>
              <li>Careers</li>
              <li>Article & News</li>
              <li>Legal Notice</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className='bg pb-4'>
        <Container>
        {/* Bottom Text */}
        <Row className="pt-4">
          <Col md={8}>
            <p className="mb-0 text-">
              Copyright © 2023 techbiz, All rights reserved. Powered by MoxCreative.
            </p>
          </Col>
          <Col md={4} className="text-md-end">
            <a href="#">Term of use</a> |
            <a href="#"> Cookie Policy</a> |
            <a href="#"> Privacy Policy</a>
          </Col>
        </Row>
      </Container>
      </div>
      
    </footer>
  );
};

export default Footer;