import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div style={{textAlign:'center',fontSize:'20px', padding:'10px 20px 40px'}}>
        <p>Made with ❤️ by <Link to="https://github.com/dashboard" style={{color: 'black'}}>Ragsana</Link></p>
    </div>
  )
}
