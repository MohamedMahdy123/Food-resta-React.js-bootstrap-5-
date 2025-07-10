import React from 'react';
import { Card, Col } from 'react-bootstrap';

interface CategoryCardProps {
  category: {
    id: number;
    name: string;
    image: string;
    description: string;
  };
  onCategoryClick: (categoryId: number) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onCategoryClick }) => {
  return (
    <Col md={4} lg={3} className="mb-4">
      <Card 
        className="category-card h-100 cursor-pointer" 
        onClick={() => onCategoryClick(category.id)}
      >
        <Card.Img 
          variant="top" 
          src={category.image} 
          alt={category.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <Card.Body className="text-center">
          <Card.Title className="h5">{category.name}</Card.Title>
          <Card.Text className="text-muted">{category.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CategoryCard;