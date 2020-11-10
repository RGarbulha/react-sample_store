import { useState, useEffect } from 'react';

import shoppingCart from './shopping-cart.svg';

import './cart.css';

const Cart = (props) => {
  var menuState = props.cart.menuState;

  useEffect(() => {}, [menuState]);

  return (
    <>
      <div>
        <img
          src={shoppingCart}
          alt="cart"
          style={{ width: 25, cursor: 'pointer' }}
          onClick={props.cart.menuHandler}
        />
      </div>
      <div
        className={menuState ? 'cart-display' : 'cart-display cart-inactive'}
      >
        <div className="closeBtn" onClick={props.cart.menuHandler}>
          X
        </div>
        <div className="cart-content">
          <div className="cart-header">
            <div>
              <h5>My Cart</h5>
            </div>
            <div>
              <h5>Checkout >></h5>
            </div>
          </div>
          <hr />
          <div className="cart-list">
            <div>product</div>
          </div>
          <hr />
          <div className="cart-footer">
            <small>Estimate Total</small>
            <small>
              <b>$29.99</b>
            </small>
          </div>
        </div>
      </div>
      <div
        className="hiddenMenu"
        style={{
          opacity: menuState ? 1 : 0,
          visibility: menuState ? 'visible' : 'hidden',
        }}
        onClick={props.cart.menuHandler}
      ></div>
    </>
  );
};

export default Cart;
