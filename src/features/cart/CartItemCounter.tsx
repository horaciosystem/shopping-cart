import React from "react";
import { useCartContext } from "src/lib/store/CartStore";
import { useObserver } from "mobx-react-lite";

const CartItemsCounter = () => {
  const store = useCartContext();

  return useObserver(() => <span className="ml-auto">{store.count}</span>);
};

export default CartItemsCounter;
