const products = [
  {
    id: 1,
    name: "iPhone 16",
    price: 79999,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    description: "Apple iPhone with a powerful processor, advanced camera system, and stunning display."
  },
  {
    id: 2,
    name: "Samsung Galaxy S25",
    price: 74999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    description: "Premium Samsung smartphone with an AMOLED display and advanced camera features."
  },
  {
    id: 3,
    name: "MacBook Air",
    price: 114999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    description: "Lightweight laptop suitable for programming, office work, and everyday productivity."
  },
  {
    id: 4,
    name: "Dell Laptop",
    price: 58999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    description: "Reliable laptop with a modern design, large display, and powerful performance."
  },
  {
    id: 5,
    name: "Sony Headphones",
    price: 24999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description: "Wireless headphones offering immersive sound and comfortable listening."
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 4999,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500",
    description: "Compact wireless earbuds with clear audio and a comfortable fit."
  },
  {
    id: 7,
    name: "Smart TV",
    price: 54999,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    description: "Large-screen smart television for an immersive home entertainment experience."
  },
  {
    id: 8,
    name: "Canon Camera",
    price: 67999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    description: "Digital camera for capturing high-quality photos and videos."
  },
  {
    id: 9,
    name: "Apple Smart Watch",
    price: 42999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Modern smartwatch for tracking activity, checking notifications, and everyday use."
  },
  {
    id: 10,
    name: "Nike Sneakers",
    price: 8999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Stylish sneakers designed for everyday comfort and casual wear."
  },
  {
    id: 11,
    name: "Running Shoes",
    price: 12999,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500",
    description: "Lightweight running shoes with comfortable cushioning and breathable material."
  },
  {
    id: 12,
    name: "Denim Jacket",
    price: 4999,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=500",
    description: "Classic denim jacket with a timeless style for everyday fashion."
  },
  {
    id: 13,
    name: "Sports T-Shirt",
    price: 1499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    description: "Comfortable casual T-shirt suitable for workouts and everyday activities."
  },
  {
    id: 14,
    name: "Fossil Watch",
    price: 8999,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
    description: "Elegant wristwatch with a stylish dial and premium finish."
  },
  {
    id: 15,
    name: "Travel Backpack",
    price: 2499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    description: "Spacious backpack with multiple compartments for office, college, and travel."
  },
  {
    id: 16,
    name: "Electric Kettle",
    price: 1299,
    image: "https://images.unsplash.com/photo-1608181831718-c9c1c0b6c7a5?w=500",
    description: "Convenient electric kettle for quickly boiling water at home or in the office."
  },
  {
    id: 17,
    name: "Air Fryer",
    price: 8999,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500",
    description: "Modern kitchen appliance for preparing crispy meals with less oil."
  },
  {
    id: 18,
    name: "Vacuum Cleaner",
    price: 32999,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500",
    description: "Convenient home cleaning appliance designed to remove dust and dirt."
  },
  {
    id: 19,
    name: "Study Table",
    price: 6999,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500",
    description: "Minimalist desk suitable for studying, working, and setting up a home office."
  },
  {
    id: 20,
    name: "Travel Suitcase",
    price: 5499,
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500",
    description: "Durable travel suitcase with spacious storage for convenient journeys."
  }
];

export function getProducts(){
    return products;
}