import React from "react";
import HomePage from "./pages/homepage/HomePage";
import {
  Route,
  Switch
} from "react-router-dom";
import ShopPage from "./pages/shop/Shop";
import "./App.css";
import Header from "./components/header/Header";
import AuthenPage from "./pages/authen-page/AuthenPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />
        <Route
          path="/shop"
          component={ShopPage}
        />
        <Route
          path="/signin"
          component={AuthenPage}
        />
      </Switch>
    </div>
  );
}

export default App;
