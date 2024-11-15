import { Link } from "react-router-dom";
import Container from "../Container/Container";
import ProductCard, { TProduct } from "../Products/ProductCard";
import { useGetAllProductsQuery } from "../../Redux/features/product/productApis";

const BestSellingCollection = () => {
  const {
    data: prodRes,
    isLoading,
    isError,
  } = useGetAllProductsQuery(undefined);
  const petFoodData = prodRes?.data;

  return (
    <Container>
      <div className="mb-[100px]">
        <h3 className="text-3xl font-semibold text-center my-4">
          Bestseller Collection
        </h3>

        {/* Loading State */}
        {isLoading && <p>Loading products...</p>}

        {/* Error Handling */}
        {isError && <p className="text-red-500">Failed to load products.</p>}

        {/* Products Display */}
        {petFoodData && petFoodData.length > 0 ? (
          <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {petFoodData.slice(0, 8).map((product: TProduct) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          !isLoading && !isError && <p>No Product found</p>
        )}

        {/* Show All Products Button */}
        {petFoodData?.length >= 8 && (
          <div className="mt-8 w-fit mx-auto text-center">
            <Link to="/products">
              <button className="button-primary hover:bg-blue-600 transition-all duration-300">
                Show All Products
              </button>
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default BestSellingCollection;
