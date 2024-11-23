import React from 'react'
import './latestProduct.scss'
import CardProduct from '../CardProduct'

export default function LatestProduct() {
  return (
   <>
   <div className="container">
    <h2>Latest Products</h2>
    <hr />
    <div className="productsBtn">
        <button className='allBtn'>All</button>
        <button className='menBtn'>Men's Clothing</button>
        <button className='womenBtn'>Women's Clothing</button>
        <button className='jeweleryBtn'>Jewelery</button>
        <button className='electronicsBtn'>Electronics</button>
    </div>

    
           <CardProduct/>
 
   </div>
   </>
  )
}
