import React from "react";
import useSWR from "swr";
import { ProductItemType } from "types";
import { makeRequest } from "api";

interface Props {
  productId: string;
}

const ProductsList: React.FC<Props> = ({ productId }) => {
  const { data, error } = useSWR(`product-${productId}`, () =>
    makeRequest<ProductItemType>(`products/${productId}`)
  );

  if (error) {
    return <span>{error}</span>;
  }
  return (
    <div className="">
      {!data ? (
        "Loading"
      ) : (
        <div>
          <div className="font-semibold text-lg mb-4">{data.name}</div>
          <p className="text-sm text-gray-600 leading-normal mb-3">
            {data.description}
          </p>
          <div className="flex flex-wrap items-center">
            <div className="font-semibold">
              <span className="uppercase text-gray-600 font-semibold mr-1">
                Brand:
              </span>
              {data.brand}
            </div>
            <div className="mx-4 font-semibold">
              <span className="uppercase text-gray-600 mr-1">Color:</span>
              {data.color}
            </div>
            <div className="font-semibold">
              <span className="uppercase text-gray-600 mr-1">Size:</span>
              {data.size}
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
