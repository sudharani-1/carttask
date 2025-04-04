import React from 'react';

const Navbar = ({ cartCount, setModalOpen }) => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold">Shopping Cart</h1>
      <button
        className="bg-blue-500 px-4 py-2 rounded-full"
        onClick={() => setModalOpen(true)}
      >
        Cart ({cartCount})
      </button>
    </div>
  );
};

export default Navbar;
