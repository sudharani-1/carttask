import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  const addToCart = (product) => {
    const isInCart = cart.find(item => item.id === product.id);
    if (isInCart) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar cartCount={cart.length} setModalOpen={setModalOpen} />
      <ProductList products={products} addToCart={addToCart} />
      {modalOpen && <CartModal cart={cart} removeFromCart={removeFromCart} setModalOpen={setModalOpen} />}
    </div>
  );
};

export default App;
