import React, { useState } from 'react';
import { Modal, Button, Form, Nav } from 'react-bootstrap';
import { User, Mail, Lock, Phone } from 'lucide-react';

interface AuthModalProps {
  show: boolean;
  onHide: () => void;
  onAuth: (user: any) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ show, onHide, onAuth }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate authentication
    const user = {
      id: 1,
      name: formData.name || 'John Doe',
      email: formData.email,
      phone: formData.phone
    };
    
    onAuth(user);
    onHide();
    
    // Reset form
    setFormData({
      email: '',
      password: '',
      name: '',
      phone: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered className="auth-modal">
      <Modal.Header closeButton>
        <Modal.Title>
          <Nav variant="tabs" defaultActiveKey="login">
            <Nav.Item>
              <Nav.Link 
                eventKey="login" 
                active={activeTab === 'login'}
                onClick={() => setActiveTab('login')}
              >
                Sign In
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                eventKey="register" 
                active={activeTab === 'register'}
                onClick={() => setActiveTab('register')}
              >
                Sign Up
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="auth-form">
          {activeTab === 'register' && (
            <Form.Group className="mb-3">
              <Form.Label className="d-flex align-items-center gap-2">
                <User size={16} />
                Full Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </Form.Group>
          )}
          
          <Form.Group className="mb-3">
            <Form.Label className="d-flex align-items-center gap-2">
              <Mail size={16} />
              Email Address
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          {activeTab === 'register' && (
            <Form.Group className="mb-3">
              <Form.Label className="d-flex align-items-center gap-2">
                <Phone size={16} />
                Phone Number
              </Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>
          )}

          <Form.Group className="mb-4">
            <Form.Label className="d-flex align-items-center gap-2">
              <Lock size={16} />
              Password
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-3">
            {activeTab === 'login' ? 'Sign In' : 'Create Account'}
          </Button>

          <div className="text-center">
            <small className="text-muted">
              {activeTab === 'login' ? "Don't have an account? " : "Already have an account? "}
              <Button 
                variant="link" 
                size="sm" 
                className="p-0"
                onClick={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
              >
                {activeTab === 'login' ? 'Sign Up' : 'Sign In'}
              </Button>
            </small>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;