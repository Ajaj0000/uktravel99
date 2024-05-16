import React from "react";
import { Link } from "react-router-dom";

function Header2() {
  return (
    <>
      <header className="header">
        <div className="container">
        <Link to="/">
        <a href="#" className="logo">
            <img src="dashboard-assets/images/common/logo.png" alt="" />
          </a>
        </Link>
          <a href="#" className="creditbalance">
            {" "}
            <i className="fa-regular fa-money-bill-1"></i> Credit Balance: USD
            4000{" "}
          </a>
          <div className="header-right">
            <a href="#" className="acc">
              Account Statements
            </a>
            <a href="#" className="loginuser">
              <i className="fa fa-user"></i>Mr Jack{" "}
              <i className="fa fa-caret-down"></i>
            </a>
          </div>
        </div>
      </header>
      <section className="navbar-nav">
        <div className="container">
          <ul className="menu_list">
            <li className="dropdown_mainmenu">
              {" "}
            <Link to="/deshbord">  <a href="./dashboard.html" className="dropdown_item">
                {" "}
                <i className="fa fa-gauge"></i> Dashboard
              </a></Link>
              {" "}
            </li>
            <li className="dropdown_mainmenu">
              <a href="javascript:void(0)" className="dropdown_item">
                {" "}
                <i className="fa fa-building"></i>
                <span>Flights</span>{" "}
                <i className="fa-solid fa-chevron-right itemrotate"></i>{" "}
              </a>
              <ul className="dropdown_menu">
                <li className="dropdown-submenu">
                 
                 <a href="./flightsearch.html">
                 <Link to="/search">
                    <i className="fa fa-building"></i> <span>Search</span>{" "}
                    </Link>
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown_mainmenu">
            
              <a href="javascript:void(0)" className="dropdown_item">
               
                <i className="fa fa-bar-chart"></i> <span>Hotels</span>{" "}
                <i className="fa-solid fa-chevron-right itemrotate"></i>{" "}
              </a>

              <ul className="dropdown_menu">
                <li className="dropdown-submenu">
                <Link to="/hotelsearch">
                  <a href="./hotelsearch.html">
                    <i className="fa fa-building"></i> <span>Search</span>{" "}
                  </a>
                  </Link>
                </li>
              </ul>

            </li>
            <li className="dropdown_mainmenu">
              {" "}
              <a href="javascript:void(0)" className="dropdown_item">
                {" "}
                <i className="fa fa-building"></i>
                <span>Booking</span>{" "}
                <i className="fa-solid fa-chevron-right itemrotate"></i>{" "}
              </a>

              <ul className="dropdown_menu">
                <li className="dropdown-submenu">
                  <a href="javascript:void(0)">
                    <i className="fa fa-duotone fa-plane-departure"></i>{" "}
                    <span>Flight</span>{" "}
                    <i className="fa fa-angle-right right_arrow"></i>{" "}
                  </a>

                  <ul className="dropdown_menu dash-dropdown-menu">
                    <li className="dropdown-submenu">
                      {" "}
                     <Link to="/booking">
                     <a href="./FlightBookings.html" className="dropdown_item">
                        {" "}
                        <i className="fa fa-building"></i> <span>Bookings</span>
                      </a></Link>
                    </li>
                    <li className="dropdown-submenu">
                      {" "}
                      <Link to="/ticket">
                      <a href="./Flightticket.html" className="dropdown_item">
                        {" "}
                        <i className="fa fa-building"></i> <span>Tickets</span>
                      </a></Link>
                    </li>
                    <li className="dropdown-submenu">
                      {" "}
                    <Link to="/credit">
                    <a
                        href="./Flightcreditnotes.html"
                        className="dropdown_item"
                      >
                        {" "}
                        <i className="fa fa-building"></i>{" "}
                        <span>Credit Note</span>
                      </a>
                      </Link>
                    </li>
                  </ul>
    
                </li>
                <li className="dropdown-submenu">
                  <a href="javascript:void(0)">
                    <i className="fa fa-building"></i> <span>Hotel</span>{" "}
                    <i className="fa fa-angle-right right_arrow"></i>{" "}
                  </a>

                  <ul className="dropdown_menu dash-dropdown-menu">
                    <li className="dropdown-submenu">
                      {" "}
                      <Link to="/hotelbooking">
                      <a href="./hotelBookings.html" className="dropdown_item">
                        {" "}
                        <i className="fa fa-building"></i>{" "}
                        <span>Hotel Bookings</span>
                      </a>
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      {" "}
                    <Link to="/hotelcredit">
                    <a
                        href="./hotelcreditnotes.html"
                        className="dropdown_item"
                      >
                        {" "}
                        <i className="fa fa-building"></i>{" "}
                        <span>Hotel Credit Note Queue</span>
                      </a>
                    </Link>
                    </li>
                  </ul>
  
                </li>
                <li className="dropdown-submenu">
                  <a href="javascript:void(0)">
                    <i className="fa fa-building"></i> <span>Transfer</span>{" "}
                    <i className="fa fa-angle-right right_arrow"></i>{" "}
                  </a>
    
                  <ul className="dropdown_menu dash-dropdown-menu">
                    <li className="dropdown-submenu">
                      {" "}
                      <a href="javascript:void(0)" className="dropdown_item">
                        {" "}
                        <i className="fa fa-building"></i>{" "}
                        <span>Transfer Bookings</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

            </li>


            <li className="dropdown_mainmenu">
              <a href="javascript:void(0)" className="dropdown_item">
                <i className="fa fa-bar-chart"></i> <span>Manage Markup</span>{" "}
                <i className="fa-solid fa-chevron-right itemrotate"></i>{" "}
              </a>
       
              <ul className="dropdown_menu">
                <li className="dropdown-submenu">
                  <Link to="/flightmarkup">
                  <a href="./flgthmarkup.html">
                    <i className="fa fa-building"></i>{" "}
                    <span>Flight Markup</span>{" "}
                  </a>
                  </Link>
                </li>
                <li className="dropdown-submenu">
                <Link to="/hotelmarkup">
                  <a href="./hotelmarkup.html">
                    <i className="fa fa-building"></i> <span>Hotel Markup</span>{" "}
                  </a>
                  </Link>
                </li>
              </ul>
         
            </li>
            <li className="dropdown_mainmenu">
              <Link to="/viewnews">
              <a href="./viewnews.html" className="dropdown_item">
                <i className="fa fa-bar-chart"></i> <span>View News</span>{" "}
              </a>
              </Link>
          
            </li>
          </ul>
        </div>
      </section>
 
    </>
  );
}
export { Header2 };