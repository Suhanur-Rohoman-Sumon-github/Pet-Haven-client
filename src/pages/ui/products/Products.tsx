import ProductCard, {
  TProduct,
} from '../../../components/Products/ProductCard';
import { useGetAllProductsQuery } from '../../../Redux/features/product/productApis';

const Products = () => {
  // const petFoodData = [
  //   {
  //     id: 1,
  //     name: "Premium Dog Food",
  //     category: "Dog",
  //     price: 29.99,
  //     image:
  //       "https://htmldemo.net/petmark/petmark/image/product/product-details/product-details-4.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Cat Tuna Delight",
  //     category: "Cat",
  //     price: 24.99,
  //     image:
  //       "https://htmldemo.net/petmark/petmark/image/product/product-details/product-details-1.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Bird Seed Mix",
  //     category: "Bird",
  //     price: 15.99,
  //     image:
  //       "https://htmldemo.net/petmark/petmark/image/product/product-details/product-details-2.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Small Animal Pellets",
  //     category: "Small Animal",
  //     price: 12.99,
  //     image:
  //       "https://htmldemo.net/petmark/petmark/image/product/product-details/product-details-3.jpg",
  //   },
  // ];
  const { data: prodRes } = useGetAllProductsQuery(undefined);
  const petFoodData = prodRes?.data;
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="p-4 w-64 bg-gray-100 border-r border-gray-200">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Category</h3>
          <ul>
            <li className="cursor-pointer mb-2 p-2 rounded hover:bg-blue-500 hover:text-white">
              Dog
            </li>
            <li className="cursor-pointer mb-2 p-2 rounded hover:bg-blue-500 hover:text-white">
              Cat
            </li>
            <li className="cursor-pointer mb-2 p-2 rounded hover:bg-blue-500 hover:text-white">
              Bird
            </li>
            <li className="cursor-pointer mb-2 p-2 rounded hover:bg-blue-500 hover:text-white">
              Small Animal
            </li>
            <li className="cursor-pointer mb-2 p-2 rounded hover:bg-blue-500 hover:text-white">
              All
            </li>
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <ul>
            <li className="cursor-pointer mb-2 p-2 rounded hover:bg-blue-500 hover:text-white">
              Under $10
            </li>
            <li className="cursor-pointer mb-2 p-2 rounded hover:bg-blue-500 hover:text-white">
              $10 - $20
            </li>
            <li className="cursor-pointer mb-2 p-2 rounded hover:bg-blue-500 hover:text-white">
              $20 - $30
            </li>
            <li className="cursor-pointer mb-2 p-2 rounded hover:bg-blue-500 hover:text-white">
              Over $30
            </li>
          </ul>
        </div>

        {/* Sorting Options */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sort By</h3>
          <ul>
            <li className="cursor-pointer mb-2 p-2 rounded hover:bg-blue-500 hover:text-white">
              Price: Low to High
            </li>
            <li className="cursor-pointer mb-2 p-2 rounded hover:bg-blue-500 hover:text-white">
              Price: High to Low
            </li>
          </ul>
        </div>
      </div>

      {/* Product Display */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Pet Food Products</h1>
        {petFoodData && petFoodData.length > 0 ? (
          <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {petFoodData.slice(0, 8).map((product: TProduct) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p>No Product found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
