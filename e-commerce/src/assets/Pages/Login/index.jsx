import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(email === "" || password === ""){
      setError("Please fill in all fields");
      return;
    }

    const strUsed = JSON.parse(localStorage.getItem("user"));
    if(strUsed && strUsed.email === email && strUsed.password === password){
      navigate("/")
    }
    else{
      setError("Invalid email or password ")
    }
  }




  return (
    <>
      <Helmet>
        <title>E-Commerce Login</title>
      </Helmet>
      <div className="container">
        <h1>Login</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e)=> setPasword(e.target.value)}
            placeholder="Enter your password"
            required
          />
                  {error && <p className="error">{error}</p>}
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>

          <button type="submit">Login</button>
        </form>

      </div>
    </>
  )
}
