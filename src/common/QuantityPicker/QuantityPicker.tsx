import React from "react";
import { useObserver } from "mobx-react-lite";
import { useCartContext } from "src/lib/store/CartStore";

export default function QuantityPicker({ productId }) {
  const store = useCartContext();

  function setQuantity(event) {
    store.setQuantity({ productId, value: Number(event.target.value) });
  }

  return useObserver(() => (
    <div className="flex border border-black">
      <button
        className="py-2 px-4"
        onClick={() => store.decreaseQuantity(productId)}
      >
        -
      </button>
      <input
        className="mx-2 p-2 text-center w-10"
        value={store.items.get(productId)?.quantity}
        onChange={setQuantity}
        maxLength={2}
      />
      <button
        className="py-2 px-4"
        onClick={() => store.increaseQuantity(productId)}
      >
        +
      </button>
    </div>
  ));
}
