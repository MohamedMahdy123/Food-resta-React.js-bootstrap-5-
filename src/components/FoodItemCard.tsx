import React from 'react';
import { Card, Col, Button, Badge } from 'react-bootstrap';
import { Star, Plus, Minus } from 'lucide-react';

interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  category: string;
  isVegetarian: boolean;
}

interface FoodItemCardProps {
  item: FoodItem;
  onAddToCart: (item: FoodItem) => void;
  cartQuantity: number;
  onUpdateQuantity: (id: number, change: number) => void;
}

const FoodItemCard: React.FC<FoodItemCardProps> = ({ 
  item, 
  onAddToCart, 
  cartQuantity, 
  onUpdateQuantity 
}) => {
  return (
    <Col md={6} lg={4} className="mb-4">
      <Card className="food-item-card">
        <div className="position-relative">
          <Card.Img 
            variant="top" 
            src={item.image} 
            alt={item.name}
            className="food-item-image"
          />
          {item.isVegetarian && (
            <Badge bg="success" className="position-absolute top-0 start-0 m-2">
              Vegetarian
            </Badge>
          )}
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title className="h5">{item.name}</Card.Title>
            <div className="d-flex align-items-center gap-1">
              <Star size={16} className="rating" fill="currentColor" />
              <span className="rating">{item.rating}</span>
            </div>
          </div>
          <Card.Text className="text-muted mb-3">{item.description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <span className="price-tag">${item.price.toFixed(2)}</span>
            {cartQuantity > 0 ? (
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => onUpdateQuantity(item.id, -1)}
                >
                  <Minus size={16} />
                </button>
                <span className="fw-bold">{cartQuantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => onUpdateQuantity(item.id, 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
            ) : (
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => onAddToCart(item)}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FoodItemCard;