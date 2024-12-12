import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import './cart.scss'
import { Link } from 'react-router-dom';
import EmptyCart from '../../Components/EmptyCard';

const Cart = ({ updateCart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
    updateCart(savedCart.length);
  }, [updateCart]);

  const handleIncrement = (product) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    updateCart(updatedCart.length);
  };

  const handleDecrement = (product) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    updateCart(updatedCart.length);
  };


  const totalAmount = cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);


  const shipping = totalAmount > 50 ? 20 : 0;

  return (
      <div className="container">
        <h1>Card</h1>
        <hr />
        {cartItems.length === 0 ? (
         <EmptyCart/>
        ) : (
          <div className="card-product">

            <div className="card-product-item">

              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p>Price: {item.quantity}x${item.price}</p>
                    <div className="quantity">
                      <button onClick={() => handleDecrement(item)}>-</button>
                      <span>{item.quantity || 1}</span>
                      <button onClick={() => handleIncrement(item)}>+</button>

                    </div>
                  </div>
                </div>
              ))}

            </div>
            <div className="card-product-summary">
              <div className="product-head"> <h2>Order Summary</h2></div>
              <div className="product-calculate">
                <p>Products: {cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}
                </p>
                <span>Shipping: ${shipping}</span>
                <h4>Total Amount: ${(totalAmount + shipping).toFixed(2)}</h4>
                <button className='checkout'>Go To checkout</button>
              </div>
            </div>
          </div>

        )}
    </div>
  );
};
export default Cart;


