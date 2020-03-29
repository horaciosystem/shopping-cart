import React from "react";
import useSWR from "swr";
import { ProductItemType } from "src/lib/types";
import { makeRequest } from "src/lib/api";
import { useCartContext } from "src/lib/store/CartStore";
import { useHistory } from "react-router-dom";

interface Props {
  productId: string;
}

const ProductsList: React.FC<Props> = ({ productId }) => {
  const { data, error } = useSWR(`product-${productId}`, () =>
    makeRequest<ProductItemType>(`products/${productId}`)
  );
  const store = useCartContext();
  const history = useHistory();

  if (error) {
    return <span>{error}</span>;
  }
  return (
    <div className="">
      {!data ? (
        "Loading"
      ) : (
        <form
          onSubmit={event => {
            event.preventDefault();
            store.addItem(data.id);
            history.push("/cart");
          }}
        >
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
        </form>
      )}
    </div>
  );
};

export default ProductsList;
