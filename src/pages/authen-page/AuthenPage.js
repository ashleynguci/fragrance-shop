import React from "react";

import SignIn from "../../components/sign-in/SignIn.js";
import SignUp from "../../components/sign-up/SignUp.js";

import "./authen-page.styles.scss";

const AuthenPage = () => (
  <div className="authen-page">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthenPage;
