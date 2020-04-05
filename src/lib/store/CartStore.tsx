import React, { createContext, useContext } from "react";
import { useLocalStore } from "mobx-react-lite";

const CART_ENTRY = "shopping-cart-entry";

function loadLocalCart() {
  const value = window.localStorage.getItem(CART_ENTRY);
  return value ? JSON.parse(value) : null;
}

function persistCart(items) {
  window.localStorage.setItem(CART_ENTRY, JSON.stringify([...items]));
}

const CartContext = createContext<Cart>({
  items: new Map(),
  total: 0,
  count: () => 0,
  addItem: () => ({}),
  setQuantity: () => ({}),
});

interface CartItem {
  quantity: number;
}

interface QuantityUpdate {
  productId: string;
  value: number;
}

interface Cart {
  items: Map<string, CartItem>;
  total: number;
  count(): number;
  addItem(productId: string): void;
  setQuantity(quantityUpdate: QuantityUpdate): void;
}

export const CartProvider: React.FC = ({ children }) => {
  const store = useLocalStore<Cart>(() => ({
    items: new Map(loadLocalCart()),
    total: 0,
    get count() {
      return [...store.items.values()].reduce(
        (acc: number, item: CartItem) => (acc += Number(item.quantity)),
        0
      );
    },
    addItem(productId: string) {
      const item = store.items.get(productId);
      const quantity = item ? item.quantity + 1 : 1;
      store.items.set(productId, { quantity });
      persistCart(store.items);
    },
    setQuantity({ productId, value }) {
      store.items.set(productId, { quantity: value });
      persistCart(store.items);
    },
  }));

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
