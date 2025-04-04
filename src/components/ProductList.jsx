import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md" />
          <h2 className="font-semibold mt-2">{product.title}</h2>
          <p className="text-gray-500">${product.price}</p>
          <button
            className="bg-blue-500 text-white mt-2 px-4 py-2 rounded-full"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
