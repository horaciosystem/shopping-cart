import React from "react";
import { useCartContext } from "src/lib/store/CartStore";
import { useObserver } from "mobx-react-lite";
import CartListItem from "./CartListItem";

export default function CartList() {
  const store = useCartContext();

  return useObserver(() => (
    <div className="flex flex-col">
      {[...store.items.keys()].map(productId => (
        <CartListItem key={productId} productId={productId} />
      ))}
    </div>
  ));
}
