import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  // Calculate the total price of all items in the cart
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      <h3>Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {/* List of Cart Items */}
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
                style={{ cursor: "pointer" }}
                onClick={() => removeFromCart(item.id)} // Remove item on click
              >
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>

          {/* Display Total Price */}
          <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
};

export default Cart;
