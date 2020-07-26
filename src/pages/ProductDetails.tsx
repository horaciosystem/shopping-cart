import React from "react";
import ProductDetails from "src/features/product/ProductDetails";
import { useParams } from "react-router-dom";
import BackButton from "src/common/BackButton";

const ProductDetailsPage: React.FC<{}> = () => {
  let { productId } = useParams();

  return (
    <div>
      <div className="w-full py-2 mb-8">
        <BackButton>Back</BackButton>
      </div>
      {productId ? (
        <ProductDetails productId={productId} />
      ) : (
        <span>No product id found</span>
      )}
    </div>
  );
};

export default ProductDetailsPage;
