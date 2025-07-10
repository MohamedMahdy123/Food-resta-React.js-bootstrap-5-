import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="mb-3">🍕 FoodieHub</h5>
            <p className="text-muted">
              Delivering delicious food from your favorite local restaurants. 
              Fresh ingredients, expert chefs, and lightning-fast delivery.
            </p>
            <div className="social-links">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Home</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Menu</a></li>
              <li><a href="#" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h6 className="mb-3">Contact Info</h6>
            <div className="d-flex align-items-center mb-2">
              <MapPin size={16} className="me-2" />
              <span className="text-muted">123 Food Street, City, State 12345</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Phone size={16} className="me-2" />
              <span className="text-muted">+1 (555) 123-4567</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Mail size={16} className="me-2" />
              <span className="text-muted">info@Mofood.com</span>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="text-muted mb-0">
              © 2024 FoodieHub. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;