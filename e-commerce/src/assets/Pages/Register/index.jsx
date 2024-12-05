import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (email === "" || password === "" || confirmPassword === "") {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords not same ");
      return;
    }

   
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));

    setError(""); 

    
    navigate("/login");
  };


  return (
    <>
      <Helmet>
        <title>E-Commerce Register</title>
      </Helmet>
      <div className="container">
        <h1>Register</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="register-email">Email</label>
          <input
            type="email"
            id="register-email"
            value={email} 
          onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="register-password">Password</label>
          <input
            type="password"
            id="register-password"
            value={password} 
          onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <label htmlFor="register-confirm-password">Confirm Password</label>
          <input
            type="password"
            id="register-confirm-password"
            value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
              {error && <p className="error">{error}</p>}
          <p>
            Already have an account? <Link to="/login" style={{ color: "#odca01" }}>Login</Link>
          </p>
          <button type="submit">Register</button>
        </form>

      </div>
    </>
  )
}
