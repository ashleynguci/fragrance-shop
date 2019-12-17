import React from "react";
import { connect } from 'react-redux';
import CustomButton from "../custom-button/CustomButton";
import CartItem from '../cart-item/CartItem';
import { createStructuredSelector } from 'reselect';
import "./cart-dropdown.styles.scss";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}>GO PAY NOW</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
