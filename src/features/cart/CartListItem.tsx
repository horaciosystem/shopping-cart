import React from "react";
import { Link } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import useSWR from "swr";
import { useCartContext } from "src/lib/store/CartStore";
import { makeRequest } from "src/lib/api";
import { ProductItemType } from "src/lib/types";
import QuantityPicker from "src/common/QuantityPicker/QuantityPicker";

interface CartListItemProps {
  productId: string;
}

export default function CartListItem<CartListItemProps>({ productId }) {
  const store = useCartContext();
  const { data: product, error } = useSWR(`product-${productId}`, () =>
    makeRequest<ProductItemType>(`products/${productId}`)
  );

  return useObserver(() => (
    <div className="flex flex-col">
      {error && <span>{error}</span>}
      {product && (
        <div className="flex items-center p-4">
          <div className="flex-1 flex-grow-2">
            <Link className="hover:underline" to={`/products/${productId}`}>
              {product.name}
            </Link>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <QuantityPicker productId={productId} />
            <button
              className="mt-1"
              onClick={() => store.removeItem(productId)}
            >
              Remove
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            {(store?.items?.get(productId)?.quantity ?? 0) * product.price}
          </div>
        </div>
      )}
    </div>
  ));
}
