import React from 'react';
import { Offcanvas, Button, ListGroup, Badge } from 'react-bootstrap';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartSidebarProps {
  show: boolean;
  onHide: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, change: number) => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ 
  show, 
  onHide, 
  cartItems, 
  onUpdateQuantity,
  onCheckout 
}) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Offcanvas show={show} onHide={onHide} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="d-flex align-items-center gap-2">
          <ShoppingBag size={24} />
          Your Cart
          <Badge bg="primary">{itemCount}</Badge>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <ShoppingBag size={48} className="text-muted mb-3" />
            <p className="text-muted">Your cart is empty</p>
            <Button variant="primary" onClick={onHide}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ListGroup variant="flush">
              {cartItems.map(item => (
                <ListGroup.Item key={item.id} className="px-0">
                  <div className="d-flex align-items-center gap-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.name}</h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="price-tag">${item.price.toFixed(2)}</span>
                        <div className="quantity-controls">
                          <button 
                            className="quantity-btn"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="cart-summary mt-4">
              <div className="d-flex justify-content-between mb-3">
                <span className="h6">Total ({itemCount} items)</span>
                <span className="h5 price-tag">${total.toFixed(2)}</span>
              </div>
              <Button 
                variant="primary" 
                size="lg" 
                className="w-100"
                onClick={onCheckout}
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartSidebar;