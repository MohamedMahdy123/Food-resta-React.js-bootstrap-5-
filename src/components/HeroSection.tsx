import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h1 className="display-4 fw-bold mb-4">
              Delicious Food, Delivered Fast
            </h1>
            <p className="lead mb-4">
              Experience the finest flavors from local restaurants, delivered right to your doorstep. 
              Fresh ingredients, expert chefs, and lightning-fast delivery.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Button variant="primary" size="lg" href="#menu">
                Order Now
              </Button>
              <Button variant="outline-light" size="lg" href="#about">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;