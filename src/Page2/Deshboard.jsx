import React from "react";
import { Header2 } from "../Commen-Component/Header2";

function Deshbord() {
  return (
    <>
      <Header2 />
      <section className="mainSection">
        <div className="container">
          <div className="topsearch">
            <div className="search_in">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Name/PNR/Ticket no/Booking Ref" />
            </div>
            <a className="back_button">
              {" "}
              <i className="fa fa-backward"></i> Back{" "}
            </a>
          </div>
          <ul className="credit-limit">
            <li>
              <figure>
                <img src="dashboard-assets/images/common/credit-1.svg" alt="" />
              </figure>
              <div className="inner-text">
                <span> Total Credit Limit</span>
                <label>USD 5000.00</label>
              </div>
            </li>
            <li>
              <figure>
                <img src="dashboard-assets/images/common/credit-1.svg" alt="" />
              </figure>
              <div className="inner-text">
                <span> Total Credit Limit</span>
                <label>USD 5000.00</label>
              </div>
            </li>
            <li>
              <figure>
                <img src="dashboard-assets/images/common/credit-1.svg" alt="" />
              </figure>
              <div className="inner-text">
                <span> Total Credit Limit</span>
                <label>USD 5000.00</label>
              </div>
            </li>
            <li>
              <figure>
                <img src="dashboard-assets/images/common/credit-1.svg" alt="" />
              </figure>
              <div className="inner-text">
                <span> Total Credit Limit</span>
                <label>USD 5000.00</label>
              </div>
            </li>
          </ul>
          <ul className="booking-listing">
            <li className="booking_info">
              <span>
                <i className="fa fa-bar-chart"></i>
              </span>
              <div className="right">
                <p>
                  <i className="fa fa-arrow-up"></i> Last Month Bookings
                </p>
                <a>10</a>
              </div>
            </li>
            <li className="booking_info">
              <span className="color1">
                <i className="fa fa-bar-chart"></i>
              </span>
              <div className="right">
                <p>
                  <i className="fa fa-arrow-up"></i> Today Bookings
                </p>
                <a>0</a>
              </div>
            </li>
            <li className="booking_info ">
              <span className="color2">
                <i className="fa fa-ticket"></i>
              </span>
              <div className="right">
                <p>
                  <i className="fa fa-arrow-up"></i> Ticketed Bookings
                </p>
                <a>4</a>
              </div>
            </li>
            <li className="booking_info">
              <span>
                <i className="fa fa-ticket ro"></i>
              </span>
              <div className="right">
                <p>
                  <i className="fa fa-arrow-up"></i> Queue Bookings
                </p>
                <a>28</a>
              </div>
            </li>
            <li className="booking_info ">
              <span className="color3">
                <i className="fa fa-bar-chart"></i>
              </span>
              <div className="right">
                <p>
                  <i className="fa fa-arrow-up"></i> Cancelled Bookings
                </p>
                <a>2</a>
              </div>
            </li>
            <li className="booking_info ">
              <span className="color2">
                <i className="fa fa-bar-chart"></i>
              </span>
              <div className="right">
                <p>
                  <i className="fa fa-arrow-up"></i> Total Paid Bookings
                </p>
                <a>3</a>
              </div>
            </li>
            <li className="booking_info ">
              <span className="color3">
                <i className="fa fa-bar-chart"></i>
              </span>
              <div className="right">
                <p>
                  <i className="fa fa-arrow-up"></i> Total Unpaid Bookings{" "}
                </p>
                <a>31</a>
              </div>
            </li>
            <li className="booking_info ">
              <span className="color3">
                <i className="fa fa-ticket ro"></i>
              </span>
              <div className="right">
                <p>
                  <i className="fa fa-arrow-up"></i> Failed Bookings
                </p>
              </div>
            </li>
            <li className="booking_info ">
              <span className="color1">
                <i className="fa fa-bar-chart"></i>
              </span>
              <div className="right">
                <p>
                  <i className="fa fa-arrow-up"></i>Offline Bookings
                </p>
                <a>7</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export { Deshbord };