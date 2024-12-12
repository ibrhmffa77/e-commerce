import React, { useState, useEffect } from 'react';
import './cardProduct.scss';

export default function CardProduct({ category, updateCart}) {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]); // Filtrlənmiş məhsullar
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Məlumatları çəkə bilmədik!');
        }
        const data = await response.json();
        setProduct(data); 
        setFilteredProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const productExists = existingCart.find((item) => item.id === product.id);
  
    let updatedCart;
    if (productExists) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...existingCart, { ...product, quantity: 1 }];
    }
  
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  
 
    window.dispatchEvent(new Event('storage'));
  };
  

  useEffect(() => {
    if (category === 'all') {
      setFilteredProduct(product); 
    } else {
      const filtered = product.filter((item) => item.category === category);
      setFilteredProduct(filtered); 
    }
  }, [category, product]);

  return (
    <>
      {loading && <p>Yüklənir...</p>}
      {error && <p>{error}</p>}
      <div className="productCard">
        {filteredProduct.map((product) => (
          <div className="card-item" key={product.id}>
            <div className="card-item-img">
              <img src={product.image} alt={product.title} />
            </div>
            <h5>{product.title.substring(0, 20)}...</h5>
            <p>{product.description.substring(0, 60)}...</p>
            <hr />
            <p>${product.price}</p>
            <hr />
            <div className="card-item-btn">
              <button>Buy Now</button>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
