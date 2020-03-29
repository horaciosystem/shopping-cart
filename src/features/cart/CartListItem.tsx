import React from "react";
import { useCartContext } from "src/lib/store/CartStore";
import { useObserver } from "mobx-react-lite";
import useSWR from "swr";
import { makeRequest } from "src/lib/api";
import { ProductItemType } from "src/lib/types";

interface CartListItemProps {
  productId: string;
}

export default function CartListItem<CartListItemProps>({ productId }) {
  const store = useCartContext();
  const { data, error } = useSWR(`product-${productId}`, () =>
    makeRequest<ProductItemType>(`products/${productId}`)
  );

  return useObserver(() => (
    <div className="flex flex-col">
      {error && <span>{error}</span>}
      {!data ? (
        <div>Loading...</div>
      ) : (
        <div className="flex-1 shadow rounded p-4">
          <div>{data.name}</div>
          <div>{data.description}</div>
          <div>{store.items.get(productId)?.quantity}</div>
        </div>
      )}
    </div>
  ));
}
