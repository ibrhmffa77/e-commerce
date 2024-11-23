import React from 'react'

export default function Cart() {
  return (
    <div className="cart">
    <h2>Səbət</h2>
    {cart.length === 0 ? (
        <p>Səbət boşdur.</p>
    ) : (
        cart.map((item, index) => (
            <div key={index} className="cart-item">
                <p>{item.title}</p>
                <p>${item.price}</p>
            </div>
        ))
    )}
</div>
  )
}
