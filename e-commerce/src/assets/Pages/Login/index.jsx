import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <Helmet>
        <title>E-Commerce Login</title>
      </Helmet>
      <div className="container">
        <h1>Login</h1>
        <hr />
        <form>
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            id="login-email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            placeholder="Enter your password"
            required
          />
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>

          <button type="submit">Login</button>
        </form>

      </div>
    </>
  )
}
