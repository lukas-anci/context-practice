import './App.css';
import Cart from './components/Cart';
import React, { useState } from 'react';
import CartContext from './components/CartContext';

function App() {
  const cartData = [
    {
      id: 1,
      title: 'Batai',
      price: 20,
    },
    {
      id: 2,
      title: 'Striuke',
      price: 30,
    },
    {
      id: 3,
      title: 'Kepure',
      price: 40,
    },
  ];

  const [cart, setCart] = useState(cartData);
  return (
    <CartContext.Provider value={cart}>
      <div className="App">
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
