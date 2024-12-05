import React, { useState } from 'react';
import './latestProduct.scss';
import CardProduct from '../CardProduct';

export default function LatestProduct() {
  const [selectedCategory, setSelectedCategory] = useState('all'); 
 

  return (
    <div className="container">
      <h2>Latest Products</h2>
      <hr />
      <div className="productsBtn">
        <button className="allBtn" onClick={() => setSelectedCategory('all')}>
          All
        </button>
        <button className="menBtn" onClick={() => setSelectedCategory("men's clothing")}>
          Men's Clothing
        </button>
        <button className="womenBtn" onClick={() => setSelectedCategory("women's clothing")}>
          Women's Clothing
        </button>
        <button className="jeweleryBtn" onClick={() => setSelectedCategory('jewelery')}>
          Jewelery
        </button>
        <button className="electronicsBtn" onClick={() => setSelectedCategory('electronics')}>
          Electronics
        </button>
      </div>

      <CardProduct category={selectedCategory} />
    </div>
  );
}
