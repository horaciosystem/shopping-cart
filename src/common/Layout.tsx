import React from "react";
import CartItemsCounter from "src/features/cart/CartItemCounter";

const Layout = ({ children }) => {
  return (
    <div className="min-h-full flex flex-col">
      <header className="flex p-2 lg:p-4">
        Shopping cart
        <CartItemsCounter />
      </header>
      <div className="flex-grow mx-auto max-w-screen-lg w-full Layout">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
