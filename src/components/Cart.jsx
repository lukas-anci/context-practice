import React, { useContext } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  return (
    <div>
      <h4>Current cart</h4>
      <div className="cart-container">
        {props.cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <br />
      Discount: XX
    </div>
  );
};

export default Cart;
