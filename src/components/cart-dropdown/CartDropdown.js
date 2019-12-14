import React from "react";

import CustomButton from "../custom-button/CustomButton";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>PAY NOW</CustomButton>
  </div>
);

export default CartDropdown;
