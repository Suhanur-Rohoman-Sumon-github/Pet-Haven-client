import Container from '../Container/Container';
import ProductCard from '../Products/ProductCard';

const BestSellingCollection = () => {
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
  return (
    <Container>
      <div className="mb-[100px]">
        <h3 className="text-3xl font-semibold">Bestseller Collection</h3>
        <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {petFoodData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BestSellingCollection;
