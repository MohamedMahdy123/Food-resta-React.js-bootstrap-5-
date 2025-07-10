import React, { useState } from 'react';
import { Navbar, Nav, Container, Badge, Form, InputGroup } from 'react-bootstrap';
import { ShoppingCart, User, Search, X } from 'lucide-react';

interface NavbarProps {
  cartItems: number;
  onCartClick: () => void;
  onAuthClick: () => void;
  user: any;
  onSearch?: (query: string) => void;
}

const AppNavbar: React.FC<NavbarProps> = ({ cartItems, onCartClick, onAuthClick, user, onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
      if (onSearch) {
        onSearch('');
      }
    }
  };

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <span className="navbar-brand">🍕 Mo Food</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#menu" className="nav-link-custom">Menu</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
          
          {showSearch && (
            <Form onSubmit={handleSearchSubmit} className="me-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Search for food..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  autoFocus
                />
              </InputGroup>
            </Form>
          )}
          
          <Nav className="d-flex align-items-center gap-3">
            <Nav.Link onClick={handleSearchToggle} className="search-toggle">
              {showSearch ? <X size={20} /> : <Search size={20} />}
            </Nav.Link>
            <Nav.Link onClick={onCartClick} className="position-relative">
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <Badge bg="danger" className="cart-badge">
                  {cartItems}
                </Badge>
              )}
            </Nav.Link>
            <Nav.Link onClick={onAuthClick} className="d-flex align-items-center gap-2">
              <User size={20} />
              {user ? <span>Hi, {user.name}</span> : <span>Sign In</span>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;