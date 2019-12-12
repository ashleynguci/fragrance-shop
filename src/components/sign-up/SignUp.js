import React, { useState } from "react";
import FormInput from "../form-input/FormInput.js";
import CustomButton from "../custom-button/CustomButton.js";
import {
  auth,
  createUserProfileDocument
} from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

export default function SignUp() {
  const [
    newAccount,
    setNewAccount
  ] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = newAccount;
  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    // signUpStart({
    //   displayName,
    //   email,
    //   password
    // });
  };

  const handleChange = event => {
    const {
      name,
      value
    } = event.target;

    setNewAccount({
      ...newAccount,
      [name]: value
    });
  };
  return (
    <div className="sign-up">
      <h2 className="title">
        I do not have an account
      </h2>
      <span>
        Sign up with your email and
        password
      </span>
      <form
        className="sign-up-form"
        onSubmit={handleSubmit}
      >
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">
          SIGN UP
        </CustomButton>
      </form>
    </div>
  );
}
