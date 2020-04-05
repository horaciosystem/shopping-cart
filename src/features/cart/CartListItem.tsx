import React from "react";
import { useCartContext } from "src/lib/store/CartStore";
import { useObserver } from "mobx-react-lite";
import useSWR from "swr";
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
          <div className="flex-1 flex-grow-2">{product.name}</div>
          <div className="flex-1 flex justify-center">
            <QuantityPicker productId={productId} />
          </div>
          <div className="flex-1 flex justify-center">
            {(store.items.get(productId)?.quantity ?? 0) * product.price}
          </div>
        </div>
      )}
    </div>
  ));
}
