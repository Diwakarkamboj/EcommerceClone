import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Download } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { downloadFile } from '../utils/download';

// Simulated product data - in a real app, this would come from an API
const PRODUCT: Product = {
  id: '1',
  title: 'Premium Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation. Features include: \n\n- Active Noise Cancellation\n- 30-hour battery life\n- Premium sound quality\n- Comfortable fit\n- Bluetooth 5.0',
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
  rating: { rate: 4.5, count: 125 }
};

// Sample downloadable files
const PRODUCT_FILES = [
  {
    name: 'User Manual',
    url: 'https://example.com/manual.pdf',
    size: '2.5 MB'
  },
  {
    name: 'Quick Start Guide',
    url: 'https://example.com/quickstart.pdf',
    size: '1.2 MB'
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  // In a real app, we would fetch the product data based on the ID
  const product = PRODUCT;

  const handleDownload = (url: string, filename: string) => {
    downloadFile(url, filename);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.round(product.rating.rate)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({product.rating.count} reviews)
                </span>
              </div>

              <p className="text-3xl font-bold text-gray-900 mb-6">
                ${product.price.toFixed(2)}
              </p>

              <div className="prose prose-sm text-gray-700 mb-6">
                {product.description.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              {/* Downloads Section */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Downloads</h3>
                <div className="space-y-2">
                  {PRODUCT_FILES.map((file) => (
                    <button
                      key={file.name}
                      onClick={() => handleDownload(file.url, file.name)}
                      className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Download className="h-5 w-5 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">{file.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{file.size}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mt-auto">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
                  <Heart className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}