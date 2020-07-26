import React from "react";
import useSWR from "swr";
import { ProductItemType } from "src/lib/types";
import { makeRequest } from "src/lib/api";
import { useCartContext } from "src/lib/store/CartStore";
import { useHistory } from "react-router-dom";
import Button from "src/common/Button/Button";

type Props = {
  productId: string;
};

const ProductDetails: React.FC<Props> = ({ productId }) => {
  const { data, error } = useSWR(
    `product-${productId}`,
    () => makeRequest<ProductItemType>(`products/${productId}`),
    { suspense: true }
  );
  const store = useCartContext();
  const history = useHistory();

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        store?.addItem(productId);
        history.push("/cart");
      }}
      className="space-y-3"
    >
      <div className="font-semibold text-lg mb-4">
        <h2 className="subtitle is-2">{data?.name}</h2>
      </div>
      <p className="text-sm text-gray-600 leading-normal mb-3">
        {data?.description}
      </p>
      <div className="flex flex-wrap items-center">
        <div className="font-semibold">
          <span className="uppercase text-gray-600 font-semibold mr-1">
            Brand:
          </span>
          {data?.brand}
        </div>
        <div className="mx-4 font-semibold">
          <span className="uppercase text-gray-600 mr-1">Color:</span>
          {data?.color}
        </div>
        <div className="font-semibold">
          <span className="uppercase text-gray-600 mr-1">Size:</span>
          {data?.size}
        </div>
      </div>
      <Button type="submit" theme="primary">
        Add to cart
      </Button>
    </form>
  );
};

export default ProductDetails;
