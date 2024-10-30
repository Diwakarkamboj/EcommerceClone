import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    rating: { rate: 4.5, count: 125 }
  },
  {
    id: '2',
    title: 'Smart Watch Series X',
    price: 299.99,
    description: 'Advanced smartwatch with health monitoring features',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    rating: { rate: 4.8, count: 230 }
  },
  {
    id: '3',
    title: 'Professional Camera Kit',
    price: 899.99,
    description: 'Complete camera kit for professional photography',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500',
    rating: { rate: 4.9, count: 89 }
  },
  {
    id: '4',
    title: 'Laptop Pro 16"',
    price: 1299.99,
    description: 'Powerful laptop for professionals',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
    rating: { rate: 4.7, count: 156 }
  }
];

const CATEGORIES = [
  { name: 'Electronics', icon: '🔌' },
  { name: 'Fashion', icon: '👕' },
  { name: 'Home & Garden', icon: '🏡' },
  { name: 'Sports', icon: '⚽' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to Amazon
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Discover amazing products at unbeatable prices
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map(category => (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase()}`}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="text-3xl mb-2 block">{category.icon}</span>
              <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Deals Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Today's Deals</h2>
            <p className="text-lg mb-8">
              Get up to 70% off on selected items. Limited time offer!
            </p>
            <Link
              to="/deals"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}