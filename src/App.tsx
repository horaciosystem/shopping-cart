import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "common/Layout";

const ProductDetailsPage = lazy(() => import("pages/ProductDetails"));
const ProductsPage = lazy(() => import("./pages/Products"));
const CartPage = lazy(() => import("./pages/Cart"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Switch>
            <Route exact path="/">
              <ProductsPage />
            </Route>
            <Route exact path="/products/:productId">
              <ProductDetailsPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route>
              <span>Page not found :(</span>
            </Route>
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default App;
