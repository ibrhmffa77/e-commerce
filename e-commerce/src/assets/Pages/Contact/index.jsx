import React from 'react'
import './contact.scss'

export default function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <hr />
      <form action="">

        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="name@example.com" />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Enter your message"></textarea>

        <button className='center' type="submit">Send</button>
      </form>
    </div>
  )
}
