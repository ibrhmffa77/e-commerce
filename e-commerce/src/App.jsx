import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './assets/Layout/Header'
import Footer from './assets/Layout/Footer'
import Home from './assets/Pages/Home'
import Products from './assets/Pages/Products'
import About from './assets/Pages/About'
import Contact from './assets/Pages/Contact'
import Login from './assets/Pages/Login'
import Register from './assets/Pages/Register'
import { useEffect, useState } from 'react'
import Cart from './assets/Pages/Cart'

function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCart = (count) => {
    setCartCount(count);
    localStorage.setItem('cartCount', count);
  };
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(cart.reduce((total, item) => total + (item.quantity || 1), 0));
    };
   
    updateCartCount();
   window.addEventListener('storage', updateCartCount);
   return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);
   return (
    <BrowserRouter>
<Header cartCount={cartCount} />
      <Routes>
      <Route path="/" element={<Home updateCart={updateCart} />} />
      <Route path="/products" element={<Products updateCart={updateCart} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/cart" element={<Cart updateCart={updateCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App





