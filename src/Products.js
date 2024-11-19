import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Headphones" },
  { id: 4, name: "Smartwatch" },
  { id: 5, name: "Tablet" },
];

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredProducts.length > 0 ? (
        <ul className="space-y-2">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="p-3 border-b border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
            >
              {product.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
