import React, { useContext } from 'react';
import CartContext from './CartContext';
export const CartItem = () => {
  const cartContext = useContext(CartContext);
  return (
    <div>
      {cartContext.map((cart) => (
        <div>
          <h4>{cart.title}</h4>
          <p>Price: {cart.price}</p>
        </div>
      ))}
    </div>
  );
};
