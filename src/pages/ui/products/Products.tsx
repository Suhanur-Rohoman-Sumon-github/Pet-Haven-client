import React, { useState } from 'react';
import { FaHeart, FaExchangeAlt } from 'react-icons/fa';

const Products = () => {
  const petFoodData = [
    {
      id: 1,
      name: 'Premium Dog Food',
      category: 'Dog',
      price: 29.99,
      image:
        'https://htmldemo.net/petmark/petmark/image/product/product-details/product-details-4.jpg',
    },
    {
      id: 2,
      name: 'Cat Tuna Delight',
      category: 'Cat',
      price: 24.99,
      image:
        'https://htmldemo.net/petmark/petmark/image/product/product-details/product-details-1.jpg',
    },
    {
      id: 3,
      name: 'Bird Seed Mix',
      category: 'Bird',
      price: 15.99,
      image:
        'https://htmldemo.net/petmark/petmark/image/product/product-details/product-details-2.jpg',
    },
    {
      id: 4,
      name: 'Small Animal Pellets',
      category: 'Small Animal',
      price: 12.99,
      image:
        'https://htmldemo.net/petmark/petmark/image/product/product-details/product-details-3.jpg',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ['Dog', 'Cat', 'Bird', 'Small Animal'];

  const filteredProducts = selectedCategory
    ? petFoodData.filter(product => product.category === selectedCategory)
    : petFoodData;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className=" p-4 w-60">
        <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
        <ul>
          {categories.map(category => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer mb-2 p-2 rounded ${
                selectedCategory === category ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {category}
            </li>
          ))}
          <li
            onClick={() => setSelectedCategory(null)}
            className={`cursor-pointer mb-2 p-2 rounded ${
              selectedCategory === null ? 'bg-blue-500 text-white' : ''
            }`}
          >
            All
          </li>
        </ul>
      </div>

      {/* Product Display */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Pet Food Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden relative group transition-all duration-300 transform "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 my-10 object-cover "
              />

              <div className="absolute top-2 right-2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                <FaHeart className="text-[#f85606] hover:text-red-500 cursor-pointer transition-colors duration-200" />
                <FaExchangeAlt className="text-[#f85606] hover:text-blue-500 cursor-pointer transition-colors duration-200" />
              </div>

              {/* Product Info */}
              <div className="transition-opacity duration-300 opacity-100 group-hover:opacity-0 ml-4 mb-4">
                <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.category}</p>
                <p className="mt-2 text-[#f85606] font-semibold">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              {/* Add to Cart Button (appears on hover) */}
              <button className="button-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 left-4 right-4">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
