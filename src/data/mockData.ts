export interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  category: string;
  isVegetarian: boolean;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Pizza",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Fresh baked pizzas with premium toppings"
  },
  {
    id: 2,
    name: "Burgers",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Juicy burgers with fresh ingredients"
  },
  {
    id: 3,
    name: "Sushi",
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Fresh sushi rolls and sashimi"
  },
  {
    id: 4,
    name: "Pasta",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Authentic Italian pasta dishes"
  },
  {
    id: 5,
    name: "Desserts",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Sweet treats and delicious desserts"
  },
  {
    id: 6,
    name: "Salads",
    image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Fresh and healthy salad options"
  }
];

export const foodItems: FoodItem[] = [
  // Pizza
  {
    id: 1,
    name: "Margherita Pizza",
    price: 16.99,
    image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
    rating: 4.8,
    category: "Pizza",
    isVegetarian: true
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    price: 19.99,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Loaded with pepperoni, cheese, and our signature sauce",
    rating: 4.9,
    category: "Pizza",
    isVegetarian: false
  },
  {
    id: 3,
    name: "Veggie Supreme",
    price: 18.99,
    image: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Bell peppers, mushrooms, onions, olives, and tomatoes",
    rating: 4.7,
    category: "Pizza",
    isVegetarian: true
  },
  
  // Burgers
  {
    id: 4,
    name: "Classic Cheeseburger",
    price: 12.99,
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Juicy beef patty with cheese, lettuce, tomato, and pickles",
    rating: 4.6,
    category: "Burgers",
    isVegetarian: false
  },
  {
    id: 5,
    name: "Bacon Deluxe",
    price: 15.99,
    image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Double beef patty with bacon, cheese, and special sauce",
    rating: 4.8,
    category: "Burgers",
    isVegetarian: false
  },
  {
    id: 6,
    name: "Veggie Burger",
    price: 11.99,
    image: "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Plant-based patty with fresh vegetables and avocado",
    rating: 4.4,
    category: "Burgers",
    isVegetarian: true
  },
  
  // Sushi
  {
    id: 7,
    name: "Salmon Roll",
    price: 13.99,
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Fresh salmon, avocado, and cucumber wrapped in nori",
    rating: 4.9,
    category: "Sushi",
    isVegetarian: false
  },
  {
    id: 8,
    name: "California Roll",
    price: 11.99,
    image: "https://images.pexels.com/photos/248509/pexels-photo-248509.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Crab meat, avocado, and cucumber with sesame seeds",
    rating: 4.7,
    category: "Sushi",
    isVegetarian: false
  },
  {
    id: 9,
    name: "Vegetarian Roll",
    price: 10.99,
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Avocado, cucumber, and pickled radish with sesame",
    rating: 4.5,
    category: "Sushi",
    isVegetarian: true
  },
  
  // Pasta
  {
    id: 10,
    name: "Spaghetti Carbonara",
    price: 14.99,
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Classic Italian pasta with eggs, cheese, and pancetta",
    rating: 4.8,
    category: "Pasta",
    isVegetarian: false
  },
  {
    id: 11,
    name: "Penne Arrabbiata",
    price: 13.99,
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Spicy tomato sauce with garlic and red pepper flakes",
    rating: 4.6,
    category: "Pasta",
    isVegetarian: true
  },
  {
    id: 12,
    name: "Fettuccine Alfredo",
    price: 15.99,
    image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Rich and creamy white sauce with parmesan cheese",
    rating: 4.7,
    category: "Pasta",
    isVegetarian: true
  },
  
  // Desserts
  {
    id: 13,
    name: "Chocolate Cake",
    price: 6.99,
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Rich chocolate cake with chocolate frosting",
    rating: 4.9,
    category: "Desserts",
    isVegetarian: true
  },
  {
    id: 14,
    name: "Tiramisu",
    price: 7.99,
    image: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Classic Italian dessert with coffee and mascarpone",
    rating: 4.8,
    category: "Desserts",
    isVegetarian: true
  },
  {
    id: 15,
    name: "Cheesecake",
    price: 6.99,
    image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Creamy New York style cheesecake with berry topping",
    rating: 4.7,
    category: "Desserts",
    isVegetarian: true
  },
  
  // Salads
  {
    id: 16,
    name: "Caesar Salad",
    price: 9.99,
    image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Crisp romaine lettuce with parmesan and croutons",
    rating: 4.5,
    category: "Salads",
    isVegetarian: true
  },
  {
    id: 17,
    name: "Greek Salad",
    price: 11.99,
    image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Fresh vegetables with feta cheese and olive oil",
    rating: 4.6,
    category: "Salads",
    isVegetarian: true
  },
  {
    id: 18,
    name: "Quinoa Bowl",
    price: 12.99,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Healthy quinoa with roasted vegetables and avocado",
    rating: 4.7,
    category: "Salads",
    isVegetarian: true
  }
];