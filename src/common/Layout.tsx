import React from "react";
import { Link } from "react-router-dom";
import CartItemsCounter from "src/features/cart/CartItemCounter";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-lg h-full">
      <header className="py-3 px-4">
        <Link to="/">Shopping cart</Link>
        <Link
          to="/cart"
          className="ml-auto border border-black rounded py-2 px-4"
        >
          <CartItemsCounter />
        </Link>
      </header>
      <main className="h-full">{children}</main>
    </div>
  );
};

export default Layout;
