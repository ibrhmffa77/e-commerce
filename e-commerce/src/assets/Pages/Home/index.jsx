import React from 'react'
import {Helmet} from 'react-helmet'
import './home.scss'
import LatestProduct from '../../Components/LatestProduct'

export default function Home() {
  return (
    <>
   <Helmet>
    <title>Home</title>
   </Helmet>
   <div className="card-img">
    <img src="https://reactjs-ecommerce-app.vercel.app/assets/main.png.jpg" alt="nature" />
    <div className="card-img-text">
        <h5>New Season Arrivals</h5>
        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
   </div>
   <LatestProduct/>
    </>
  )
}
