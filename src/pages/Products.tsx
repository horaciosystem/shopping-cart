import React from "react";
import ProductsList from "src/features/product/ProductsList";
import PageHeader from "src/common/PageHeader/PageHeader";

const Products: React.FC<{}> = () => {
  return (
    <>
      <PageHeader title="Products" />
      <ProductsList />
    </>
  );
};

export default Products;
