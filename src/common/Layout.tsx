import React from "react";
import { Link } from "react-router-dom";
import CartItemsCounter from "src/features/cart/CartItemCounter";
import { useErrorContext } from "src/lib/api/ErrorBoundary";

const Layout = ({ children }) => {
  const error = useErrorContext();

  return (
    <div className="theme-light mx-auto max-w-screen-lg h-full px-3">
      <header className="py-4 flex">
        <Link to="/">Shopping cart</Link>
        <Link
          to="/cart"
          className="ml-auto border border-black rounded py-2 px-4"
        >
          <CartItemsCounter />
        </Link>
      </header>
      {error && <span>Error :/</span>}
      <main className="h-full">{children}</main>
    </div>
  );
};

export default Layout;
