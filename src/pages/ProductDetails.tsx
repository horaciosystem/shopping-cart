import React from "react";
import ProductDetails from "../features/productDetails/ProductDetails";
import { useParams } from "react-router-dom";

const ProductDetailsPage: React.FC<{}> = () => {
  let { productId } = useParams();

  return productId ? (
    <ProductDetails productId={productId} />
  ) : (
    <span>No product id found</span>
  );
};

export default ProductDetailsPage;
