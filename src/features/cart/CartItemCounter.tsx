import React from "react";
import { useCartContext } from "src/lib/store/CartStore";
import { useObserver } from "mobx-react-lite";

const CartItemsCounter = () => {
  const store = useCartContext();

  return useObserver(() => (
    <span>{String(store?.count ?? 0).padStart(2, "0")}</span>
  ));
};

export default CartItemsCounter;
