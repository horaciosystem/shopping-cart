import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route>
            <span>Not found :(</span>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
