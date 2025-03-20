import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products.json";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="d-flex flex-wrap">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
