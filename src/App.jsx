import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import ItemContext from './store/ItemContext';

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Sport Shoes', price: 50 },
    { id: 2, title: 'Basketball', price: 30 },
    { id: 3, title: 'Baseball bat', price: 40 },
  ]);
  const [discount, setDiscount] = useState(20);

  // sukurti applyDiscount funkcija ir joje iskonsolinti kad veikia
  // perduoti funkcija i context value
  // pasiimti ja CartIteme ir ten ivydyti paspuadus mygtuka

  const applyDiscount = () => {
    console.log('paspausdeo');
    const cartItemsWithDiscount = cartItems.map((item) => {
      const discountedPrice = item.price - item.price * (discount / 100);

      return {
        ...item,
        discountedPrice,
      };
    });
    console.log('cartItemsWithDiscount', cartItemsWithDiscount);
    setCartItems(cartItemsWithDiscount);
  };
  const applySingle = (id) => {
    const findItem = cartItems.find((itemId) => itemId.id === id);
    const discountedPrice = findItem.discountedPrice;
    setDiscount(discountedPrice);
    console.log('single', id, findItem.discountedPrice);
  };

  return (
    <ItemContext.Provider value={{ discount, applyDiscount, applySingle }}>
      <div className="App">
        <h3>Context cart App component</h3>
        <Cart cartItems={cartItems} />
      </div>
    </ItemContext.Provider>
  );
}

export default App;
