import React from "react";
import { Link } from "react-router-dom";

function Header2() {
  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <img src="dashboard-assets/images/common/logo.png" alt="" />
          </Link>
          <Link className="creditbalance">
            {" "}
            <i className="fa-regular fa-money-bill-1"></i> Credit Balance: USD
            4000{" "}
          </Link>
          <div className="header-right">
            <Link className="acc">Account Statements</Link>
            <Link className="loginuser">
              <i className="fa fa-user"></i>Mr Jack{" "}
              <i className="fa fa-caret-down"></i>
            </Link>
          </div>
        </div>
      </header>
      <section className="navbar-nav">
        <div className="container">
          <ul className="menu_list">
            <li className="dropdown_mainmenu">
              {" "}
              <Link to="/deshbord" className="dropdown_item">
                {" "}
                <i className="fa fa-gauge"></i> Dashboard
              </Link>{" "}
            </li>
            <li className="dropdown_mainmenu">
              <Link className="dropdown_item">
                {" "}
                <i className="fa fa-building"></i>
                <span>Flights</span>{" "}
                <i className="fa-solid fa-chevron-right itemrotate"></i>{" "}
              </Link>
              <ul className="dropdown_menu">
                <li className="dropdown-submenu">
                  <Link to="/search">
                    <i className="fa fa-building"></i> <span>Search</span>{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown_mainmenu">
              <Link className="dropdown_item">
                <i className="fa fa-bar-chart"></i> <span>Hotels</span>{" "}
                <i className="fa-solid fa-chevron-right itemrotate"></i>{" "}
              </Link>

              <ul className="dropdown_menu">
                <li className="dropdown-submenu">
                  <Link to="/hotelsearch">
                      <i className="fa fa-building"></i> <span>Search</span>{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown_mainmenu">
              {" "}
              <Link className="dropdown_item">
                {" "}
                <i className="fa fa-building"></i>
                <span>Booking</span>{" "}
                <i className="fa-solid fa-chevron-right itemrotate"></i>{" "}
              </Link>
              <ul className="dropdown_menu">
                <li className="dropdown-submenu">
                  <Link>
                    <i className="fa fa-duotone fa-plane-departure"></i>{" "}
                    <span>Flight</span>{" "}
                    <i className="fa fa-angle-right right_arrow"></i>{" "}
                  </Link>

                  <ul className="dropdown_menu dash-dropdown-menu">
                    <li className="dropdown-submenu">
                      {" "}
                      <Link to="/booking" className="dropdown_item">
                        
                          {" "}
                          <i className="fa fa-building"></i>{" "}
                          <span>Bookings</span>
                        
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      {" "}
                      <Link to="/ticket" className="dropdown_item">
                        
                          {" "}
                          <i className="fa fa-building"></i>{" "}
                          <span>Tickets</span>
                        
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      {" "}
                      <Link to="/credit" className="dropdown_item">
                          {" "}
                          <i className="fa fa-building"></i>{" "}
                          <span>Credit Note</span>
        
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link>
                    <i className="fa fa-building"></i> <span>Hotel</span>{" "}
                    <i className="fa fa-angle-right right_arrow"></i>{" "}
                  </Link>

                  <ul className="dropdown_menu dash-dropdown-menu">
                    <li className="dropdown-submenu">
                      {" "}
                      <Link to="/hotelbooking" className="dropdown_item">
                        
                          {" "}
                          <i className="fa fa-building"></i>{" "}
                          <span>Hotel Bookings</span>
                        
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      {" "}
                      <Link to="/hotelcredit" className="dropdown_item">
                        
                          {" "}
                          <i className="fa fa-building"></i>{" "}
                          <span>Hotel Credit Note Queue</span>
                      
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link>
                    <i className="fa fa-building"></i> <span>Transfer</span>{" "}
                    <i className="fa fa-angle-right right_arrow"></i>{" "}
                  </Link>

                  <ul className="dropdown_menu dash-dropdown-menu">
                    <li className="dropdown-submenu">
                      {" "}
                      <Link className="dropdown_item">
                        {" "}
                        <i className="fa fa-building"></i>{" "}
                        <span>Transfer Bookings</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown_mainmenu">
              <Link className="dropdown_item">
                <i className="fa fa-bar-chart"></i> <span>Manage Markup</span>{" "}
                <i className="fa-solid fa-chevron-right itemrotate"></i>{" "}
              </Link>

              <ul className="dropdown_menu">
                <li className="dropdown-submenu">
                  <Link to="/flightmarkup">
                  
                      <i className="fa fa-building"></i>{" "}
                      <span>Flight Markup</span>{" "}
                
                  </Link>
                </li>
                <li className="dropdown-submenu">
                  <Link to="/hotelmarkup">
                   
                      <i className="fa fa-building"></i>{" "}
                      <span>Hotel Markup</span>{" "}
                    
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown_mainmenu">
              <Link to="/viewnews" className="dropdown_item">
               
                  <i className="fa fa-bar-chart"></i> <span>View News</span>{" "}
                
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export { Header2 };
