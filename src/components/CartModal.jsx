import React from 'react';

const CartModal = ({ cart, removeFromCart, setModalOpen }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center py-2">
                <span>{item.title}</span>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-full w-full"
          onClick={() => setModalOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
