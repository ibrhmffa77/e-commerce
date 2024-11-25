import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="container">
      <h1>Register</h1>
      <hr />
      <form >
        <label htmlFor="register-email">Email</label>
        <input
          type="email"
          id="register-email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="register-password">Password</label>
        <input
          type="password"
          id="register-password"
          placeholder="Enter your password"
          required
        />

        <label htmlFor="register-confirm-password">Confirm Password</label>
        <input
          type="password"
          id="register-confirm-password"
          placeholder="Confirm your password"
          required
        />

        <p>
          Already have an account? <Link to="/login" style={{color: "#odca01"}}>Login</Link>
        </p>
        <button type="submit">Register</button>
      </form>

    </div>
  )
}
