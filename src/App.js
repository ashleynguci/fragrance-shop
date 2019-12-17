import React from "react";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import CheckoutPage from './pages/checkout/Checkout';
import ShopPage from "./pages/shop/Shop";
import "./App.css";
import AuthenPage from "./pages/authen-page/AuthenPage";

import Header from "./components/header/Header";
import {
  auth,
  createUserProfileDocument
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {
      setCurrentUser
    } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(
            userAuth
          );

          userRef.onSnapshot(
            snapShot => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
            }
          );
        }

        setCurrentUser(userAuth);
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
            exact
            path="/checkout"
            component={CheckoutPage}
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                  <AuthenPage />
                )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user =>
    dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
