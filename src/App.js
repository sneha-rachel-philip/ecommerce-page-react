import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import './App.css';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Header cartCount={cart.length} />
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cart} />
    </div>
  );
}

export default App;
