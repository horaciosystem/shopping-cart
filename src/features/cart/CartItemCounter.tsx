import React from "react";
import { useCartContext } from "src/lib/store/CartStore";
import { useObserver } from "mobx-react-lite";

const CartItemsCounter = () => {
  const store = useCartContext();

  return useObserver(() => <span>{`${store.count}`.padStart(2, "0")}</span>);
};

export default CartItemsCounter;
