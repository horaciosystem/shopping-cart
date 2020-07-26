import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "src/common/Layout";
import { CartProvider } from "src/lib/store/CartStore";
import ErrorBoundary from "./lib/api/ErrorBoundary";
import ProductsPage from "src//pages/Products";

const ProductDetailsPage = lazy(() => import("src/pages/ProductDetails"));
const CartPage = lazy(() => import("src//pages/Cart"));

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <CartProvider>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
          </Layout>
        </CartProvider>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
