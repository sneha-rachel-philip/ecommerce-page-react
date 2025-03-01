import React from "react";

const Header = ({ cartCount, setSearchTerm }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">🛒 React Shopping Cart</span>
      <input
        type="text"
        className="form-control w-25"
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span>Cart: {cartCount} items</span>
    </nav>
  );
};

export default Header;
