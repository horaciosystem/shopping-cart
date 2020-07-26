import React from "react";
import { useCartContext } from "src/lib/store/CartStore";
import { useObserver } from "mobx-react-lite";
import CartListItem from "./CartListItem";

export default function CartList() {
  const store = useCartContext();

  return useObserver(() => (
    <div className="flex flex-col flex-wrap">
      <div>
        <div className="flex items-center p-4">
          <div className="flex-1 flex-grow-2">Items</div>
          <div className="flex-1 flex justify-center">Quantity</div>
          <div className="flex-1 flex justify-center">Total</div>
        </div>
      </div>
      {[...(store.items?.keys() ?? [])].map((productId) => (
        <CartListItem key={productId} productId={productId} />
      ))}
    </div>
  ));
}
