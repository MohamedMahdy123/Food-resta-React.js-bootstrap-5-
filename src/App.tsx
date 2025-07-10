import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AppNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryCard from './components/CategoryCard';
import FoodItemCard from './components/FoodItemCard';
import CartSidebar from './components/CartSidebar';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import { categories, foodItems, FoodItem } from './data/mockData';

interface CartItem extends FoodItem {
  quantity: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter food items based on category and search
  const filteredItems = foodItems.filter(item => {
    const matchesCategory = selectedCategory === null || 
      categories.find(cat => cat.id === selectedCategory)?.name === item.category;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: FoodItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const getCartQuantity = (id: number) => {
    const item = cartItems.find(cartItem => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const handleAuth = (userData: User) => {
    setUser(userData);
  };

  const handleCheckout = () => {
    if (!user) {
      setShowCart(false);
      setShowAuth(true);
      return;
    }
    
    // Here you would typically integrate with a payment system
    alert('Checkout functionality would be implemented here!');
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <AppNavbar 
        cartItems={getTotalItems()}
        onCartClick={() => setShowCart(true)}
        onAuthClick={() => user ? handleLogout() : setShowAuth(true)}
        user={user}
        onSearch={setSearchQuery}
      />
      
      <HeroSection />
      
      <Container className="py-5">
        {/* Categories Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Browse by Category</h2>
            <Row>
              {categories.map(category => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onCategoryClick={handleCategoryClick}
                />
              ))}
            </Row>
          </Col>
        </Row>

        {/* Search and Filter Section */}
        <Row className="mb-4">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search for food items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-3"
            />
          </Col>
          <Col md={6} className="text-end">
            {selectedCategory && (
              <Button
                variant="outline-primary"
                onClick={() => setSelectedCategory(null)}
              >
                Clear Filter
              </Button>
            )}
          </Col>
        </Row>

        {/* Food Items Section */}
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2>
                {selectedCategory 
                  ? `${categories.find(cat => cat.id === selectedCategory)?.name} Menu`
                  : 'All Items'
                }
              </h2>
              <span className="text-muted">
                {filteredItems.length} items found
              </span>
            </div>
            <Row>
              {filteredItems.map(item => (
                <FoodItemCard
                  key={item.id}
                  item={item}
                  onAddToCart={addToCart}
                  cartQuantity={getCartQuantity(item.id)}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </Row>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-5">
                <h4 className="text-muted">No items found</h4>
                <p className="text-muted">Try adjusting your search or category filter</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      <CartSidebar
        show={showCart}
        onHide={() => setShowCart(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckout}
      />

      <AuthModal
        show={showAuth}
        onHide={() => setShowAuth(false)}
        onAuth={handleAuth}
      />

      <Footer />
    </div>
  );
}

export default App;