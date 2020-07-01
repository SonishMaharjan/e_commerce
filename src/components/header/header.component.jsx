import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
//esa ma jj rentrurn hunxat tyo this.prop ma aaunx
//state is top level reducer // root reducer
const mapStateToProps = (state) => {
  return { currentUser: state.user.currentUser };
};

export default connect(mapStateToProps)(Header);
