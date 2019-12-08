import React, {
  useEffect,
  useState
} from "react";
import HomePage from "./pages/homepage/HomePage";
import {
  Route,
  Switch
} from "react-router-dom";
import ShopPage from "./pages/shop/Shop";
import "./App.css";
import Header from "./components/header/Header";
import AuthenPage from "./pages/authen-page/AuthenPage";
import { auth } from "./firebase/firebase.utils.js";

function App() {
  const [
    currentUser,
    setCurrentUser
  ] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    });
  });
  return (
    <div>
      <Header
        currentUser={currentUser}
      />
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
