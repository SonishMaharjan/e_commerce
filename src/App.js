import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInAndSignOut from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { createStructuredSelector } from "reselect";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.action";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  // now no need of set constructor() ... redux handles it
  unsubscribeFromAuth = null;

  componentDidMount() {
    //setCurrentUser is received in this.props from connect and dispatch of redux (Look EOF)
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //if user -> signed in else not signed in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //snapshot contina actual data in snapshot.data
        // subscribeing for any change of data
        userRef.onSnapshot((snapShot) => {
          //onSnapshot is async: so talako setCurrentUser is called after setCurrentUser(userAuth){tala xa};
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      // this.setState({ currentUser: userAuth }); now for redux use setCurrentUser
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header> </Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage}></Route>

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  //es ma jj haleko mathi this.props garera access garna milxa..
  return {
    //setCurrentUser method return object { type: data, payload: data}
    setCurrentUser: (user) => dispatch(setCurrentUser(user)), //pass action object(object having type and payload attributes) in dispatch
  };
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

//fist arg is null as we dont need any state in this compoent
export default connect(mapStateToProps, mapDispatchToProps)(App);
