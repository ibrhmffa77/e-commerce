import React from 'react'
import {FaArrowLeft } from 'react-icons/fa'
import './emptyCart.scss'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className="cart-empty">
    <h2>Your Cart is Empty</h2>
    <button className='emptyBtn'>
    <FaArrowLeft />
    <Link to="/">Continue shopping</Link>
    </button>
</div>
  )
}
