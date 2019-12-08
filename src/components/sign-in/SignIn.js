import React, { useState } from "react";

import FormInput from "../form-input/FormInput.js";
import CustomButton from "../custom-button/CustomButton.js";

import "./sign-in.styles.scss";

export default function SignIn() {
  const [
    credentials,
    setCredentials
  ] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    setCredentials({
      email: "",
      password: ""
    });
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>
        Sign in with your email and
        password
      </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={credentials.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={credentials.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit">
          {" "}
          Sign in{" "}
        </CustomButton>
      </form>
    </div>
  );
}
