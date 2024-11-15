import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../../Redux/features/product/productApis";

const ProductsDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleProductQuery(id);
  console.log(data?.data);
  return <div>this is product details page</div>;
};

export default ProductsDetails;
