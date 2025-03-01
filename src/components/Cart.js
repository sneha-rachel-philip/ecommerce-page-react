import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-4">
      <h4>Shopping Cart</h4>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              {item.name} - ${item.price}
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h5 className="mt-3">Total: ${totalPrice.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
