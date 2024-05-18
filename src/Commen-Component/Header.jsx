import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="header-top">
        <div className="container">
          <div className="left">
            <Link>
              <img src="assets/images/common/fb.png" alt="" />
            </Link>
            <Link>
              <img src="assets/images/common/twitter.png" alt="" />
            </Link>
            <Link>
              <img src="assets/images/common/linkedin.png" alt="" />
            </Link>
            <Link className="email-info">
              <img src="assets/images/common/email.png" alt="" />
              contact@uktraveltourism.com
            </Link>
          </div>
          <div className="right">
            <Link className="call-info">
              <img src="assets/images/common/call.png" alt="" />
              +01 2345 6789
            </Link>
            <Link to="/signup" className="regbtn">
                Agents Registration
            </Link>
          </div>
        </div>
      </section>
      <header className="header">
        <div className="container">
         <Link className="logo">
            <img src="assets/images/common/logo.png" alt="" />
            </Link>
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
              <Link>Contect Us</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
export { Header };
