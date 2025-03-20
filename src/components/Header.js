import React from "react";

const Header = ({ cartCount }) => {
  return (
    <header className="bg-dark text-white p-3 d-flex justify-content-between">
      <h2>Shopping Cart</h2>
      <div>
        🛒 Cart ({cartCount})
      </div>
    </header>
  );
};

export default Header;
