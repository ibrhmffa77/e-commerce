import React from 'react'
import './about.scss'

export default function About() {
  return (
    <>
    <div className="container">
             <h1>About Us</h1>
             <hr />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum</p>

             <div className="our-product">
              <h2>Our Product</h2>
              <div className="our-product-card">
                <div className="our-product-card-item">
                  <div className="our-product-card-img">
                    <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Men's Clothing" />
                  </div>
                  <div className="card-title">
                    <h5>Men's Clothing</h5>
                  </div>
                </div>
                <div className="our-product-card-item">
                  <div className="our-product-card-img">
                    <img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Women's Clothing" />
                  </div>
                  <div className="card-title">
                    <h5>Men's Clothing</h5>
                  </div>
                </div><div className="our-product-card-item">
                  <div className="our-product-card-img">
                    <img src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jewellery" />
                  </div>
                  <div className="card-title">
                    <h5>Men's Clothing</h5>
                  </div>
                </div><div className="our-product-card-item">
                  <div className="our-product-card-img">
                    <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Electronics" />
                  </div>
                  <div className="card-title">
                    <h5>Men's Clothing</h5>
                  </div>
                </div>
              </div>
             </div>
    </div>
    </>
  )
}
