import { FaCat, FaDog, FaFish } from 'react-icons/fa';
import Container from '../Container/Container';

import { SiAnimalplanet } from 'react-icons/si';
import { LuBird } from 'react-icons/lu';
import { useState } from 'react';
import ProductCard from '../Products/ProductCard';

const CategorySection = () => {
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
  const [selectedCategory, setSelectedCategory] = useState('Dog');
  const filteredProducts = selectedCategory
    ? petFoodData.filter(product => product.category === selectedCategory)
    : petFoodData;
  return (
    <Container>
      <div className="mt-[80px] mb-12 ">
        <div className="grid rounded-md overflow-hidden border border-slate-300  grid-cols-3 md:grid-cols-5 justify-between items-center">
          <div
            onClick={() => setSelectedCategory('Dog')}
            className={`border-e hover:bg-primary cursor-pointer  transition-all duration-200 border-slate-300  flex flex-col justify-center hover:text-white items-center h-48 p-5 ${
              selectedCategory === 'Dog' && 'bg-primary text-white'
            }`}
          >
            <FaDog className="text-7xl" />
            <span className="text-base ">Dog Collection</span>
          </div>
          <div
            onClick={() => setSelectedCategory('Cat')}
            className={`border-e hover:bg-primary cursor-pointer  transition-all duration-200 border-slate-300  flex flex-col hover:text-white justify-center items-center h-48 p-5 ${
              selectedCategory === 'Cat' && 'bg-primary text-white'
            }`}
          >
            <FaCat className="text-7xl" />
            Cat Collection
          </div>
          <div
            onClick={() => setSelectedCategory('Bird')}
            className={`border-e hover:bg-primary hover:text-white cursor-pointer  transition-all duration-200 border-slate-300  flex flex-col justify-center items-center h-48 p-5 ${
              selectedCategory === 'Bird' && 'bg-primary text-white'
            }`}
          >
            <LuBird className="text-7xl" />
            Bird Collection
          </div>
          <div
            onClick={() => setSelectedCategory('Small Animal')}
            className={` hover:bg-primary cursor-pointer hover:text-white  transition-all duration-200   flex flex-col justify-center items-center h-48 p-5 ${
              selectedCategory === 'Small Animal' && 'bg-primary text-white'
            }`}
          >
            <SiAnimalplanet className="text-7xl" />
            Small Animal Collection
          </div>
          <div
            onClick={() => setSelectedCategory('Fish')}
            className={` hover:bg-primary cursor-pointer hover:text-white  transition-all duration-200   flex flex-col justify-center items-center h-48 p-5 ${
              selectedCategory === 'Fish' && 'bg-primary text-white'
            }`}
          >
            <FaFish className="text-7xl" />
            Fish Collection
          </div>
        </div>
      </div>
      {/* show products */}
      {filteredProducts && filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl font-semibold mt-12">
          No Products Found
        </p>
      )}
    </Container>
  );
};

export default CategorySection;
