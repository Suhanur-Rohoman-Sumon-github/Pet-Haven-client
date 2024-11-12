import { useState } from 'react';

import ProductCard from '../../../components/Products/ProductCard';

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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
