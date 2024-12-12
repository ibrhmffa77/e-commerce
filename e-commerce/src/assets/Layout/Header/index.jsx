import React from 'react'
import './header.scss'
import { Link, NavLink } from 'react-router-dom'
import { FaArrowRightToBracket } from "react-icons/fa6";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiShoppingCart2Fill } from "react-icons/ri";



export default function Header({ cartCount }) {
  return (
     <div className="header">
      <div className="container">
      <div className='header-title'>
        <Link to='/'>
        <b>React Ecommerce</b>
        </Link>
       </div>
       <div className='header-navbar'>
         <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/products' className={({ isActive }) => (isActive ? 'active' : '')}>Products</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')} >Contact</NavLink>
          </li>
         </ul>
         
       </div>
       <div className="header-button">
          <button className='login'> <FaArrowRightToBracket className='btnIcons'/><Link to='/login'>Login</Link></button>
          <button className='register'> <BsFillPersonPlusFill className='btnIcons'/><Link to='/register'> Register</Link></button>
          <button className='cart'> <RiShoppingCart2Fill className='btnIcons'/><Link to='/cart'> Cart <span className='counter'>({cartCount})</span></Link></button>

         </div>
      </div>
    </div>
  )
}
