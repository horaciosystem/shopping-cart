import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "src/common/Layout";
import { CartProvider } from "src/lib/store/CartStore";

const ProductDetailsPage = lazy(() => import("src/pages/ProductDetails"));
const ProductsPage = lazy(() => import("src//pages/Products"));
const CartPage = lazy(() => import("src//pages/Cart"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <CartProvider>
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
        </CartProvider>
      </Suspense>
    </Router>
  );
};

export default App;
