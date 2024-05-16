import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return (
        <>
      <section className="header-top">
        <div className="container">
          <div className="left">
            <a>
              <img src="assets/images/common/fb.png" alt="" />
            </a>
            <a>
              <img src="assets/images/common/twitter.png" alt="" />
            </a>
            <a>
              <img src="assets/images/common/linkedin.png" alt="" />
            </a>
            <a className="email-info">
              <img src="assets/images/common/email.png" alt="" />
              contact@uktraveltourism.com
            </a>
          </div>
          <div className="right">
            <a className="call-info">
              <img src="assets/images/common/call.png" alt="" />
              +01 2345 6789
            </a>
            <Link to="/signup"><a href="./signup.html" className="regbtn">
              Agents Registration
            </a></Link>
          </div>    
        </div>
      </section>
      <header className="header">
        <div className="container">
          <a href="/" className="logo">
            <img src="assets/images/common/logo.png" alt="" />
          </a>
          <ul className="menus">
            <li>
             <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/feature">Features</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="./contactus">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>
        </>
    )
}
export {Header};