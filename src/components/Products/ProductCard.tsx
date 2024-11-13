import { FaExchangeAlt, FaHeart } from 'react-icons/fa';
type TProduct = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string; // Assuming the image will be a URL in string format
};
const ProductCard = ({ product }: { product: TProduct }) => {
  return (
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
  );
};

export default ProductCard;
