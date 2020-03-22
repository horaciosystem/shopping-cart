import React from "react";
import "./styles.scss";

const Layout = ({ children }) => (
  <div className="mx-auto max-w-screen-lg Layout">
    <header>Header</header>
    <main>{children}</main>
  </div>
);

export default Layout;
