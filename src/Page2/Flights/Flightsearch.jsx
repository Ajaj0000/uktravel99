import React from "react";
import { Header2 } from "../../Commen-Component/Header2";
import { Link } from "react-router-dom";

function Flightsearch() {
  return (
    <>
    <Header2/>
      <section className="mainSection">
        <div className="topsearch container">
          <div className="search_in">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Name/PNR/Ticket no/Booking Ref" />
          </div>
          <Link className="back_button">
            {" "}
            <i className="fa fa-backward"></i> Back{" "}
          </Link>
        </div>
        <div className="swiper flightSwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="dashboard-assets/images/dashboard/banner.jpg" alt="" />
            </div>
            <div className="swiper-slide">
              <img
                src="dashboard-assets/images/dashboard/B2C_footerHotel51.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <div className="container srchpositiondiv ">
          <div className="searchmian">
            <ul className="searchtabs">
              <li className="">
                {" "}
                <Link className="" data-tabs="Flight">
                  {" "}
                  <i className="fa fa-duotone fa-plane-departure"></i> FLIGHT
                  SEARCH{" "}
                </Link>{" "}
              </li>
            </ul>
            <div className="radio-button">
              <p>
                <input
                  checked="checked"
                  id="txtoneway"
                  name="triptype"
                  type="radio"
                  value="0"
                />
                <label for="txtoneway">One Way</label>
              </p>
              <p>
                <input
                  id="txtroundway"
                  name="triptype"
                  type="radio"
                  value="1"
                />
                <label for="txtroundway">Round</label>
              </p>
              <p>
                <input
                  id="txtmultitrip"
                  name="triptype"
                  type="radio"
                  value="2"
                />
                <label for="txtmultitrip">Multi Trip</label>
              </p>
            </div>

            <div className="searchbox">
              <div className="checkindiv">
                <label> Departure From </label>
                <input
                  id="txtdepartureairport"
                  type="text"
                  autocomplete="off"
                  placeholder="Enter Departure Name"
                />
              </div>

              <div className="checkindiv">
                <Link className="changeairport">
                  <i className="fa-solid fa-right-left"></i>
                </Link>

                <label>Arrvial To</label>
                <input
                  id="txtdepartureairport"
                  type="text"
                  autocomplete="off"
                  placeholder="Enter Departure Name"
                />
              </div>

              <div className="checkindiv date">
                <label>Depart</label>
                <input
                  id="txtdepartureairport"
                  type="text"
                  placeholder="14/11/2022"
                />
              </div>

              <div className="checkindiv date">
                <label>Return</label>
                <input
                  id="txtdepartureairport"
                  type="text"
                  placeholder="14/11/2022"
                />
              </div>

              <div className="checkindiv select">
                <label>Travelers &amp; className</label>
                <div className="roomdiv" id="totalflighttravelers">
                  <strong className="travel-economy">1 Traveler, 5</strong>
                  <div className="popuppaxdetails" style={{display:"none"}}>
                    <div className="mainpopupselectroom">
                      <div>
                        <div className="maindivroomsingle">
                          <h4 className="roomnotext">
                            <span>Travelers &amp; className</span>
                            <span className="closeroom"></span>
                          </h4>
                          <div className="roomdata">
                            <div
                              className="flexdiv  adulttotal"
                              data-min="1"
                              data-max="6"
                            >
                              <label>Adult (12+)</label>
                              <div className="counter">
                                <div className="minussign">-</div>
                                <label>1</label>
                                <div className="plussign">+</div>
                              </div>
                            </div>

                            <div
                              className="flexdiv  childrentotal"
                              data-min="0"
                              data-max="3"
                            >
                              <label>Children (2-11)</label>
                              <div className="counter">
                                <div className="minussign">-</div>
                                <label>0</label>
                                <div className="plussign">+</div>
                              </div>
                            </div>

                            <div className="childagesdiv_list">
                              <div
                                className="childage"
                                id="childagediv1"
                                style={{display:"none"}}
                              >
                                <label>Child 1 Age</label>
                                <div className="counter">
                                  <select id="childage1">
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                  </select>
                                </div>
                              </div>

                              <div
                                className="childage"
                                id="childagediv2"
                                style={{display:"none"}}
                              >
                                <label>Child 2 Age</label>
                                <div className="counter">
                                  <select id="childage2">
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                  </select>
                                </div>
                              </div>
                              <div
                                className="childage"
                                id="childagediv3"
                                style={{display:"none"}}
                              >
                                <label>Child 3 Age</label>
                                <div className="counter">
                                  <select id="childage3">
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div
                              className="flexdiv infanttotal"
                              data-min="0"
                              data-max="3"
                            >
                              <label>Infant (0-1)</label>
                              <div className="counter">
                                <div className="minussign">-</div>
                                <label>0</label>
                                <div className="plussign">+</div>
                              </div>
                            </div>

                            <div className="flexdiv">
                              <label>className</label>
                              <div className="counter">
                                <select
                                  id="drpflightclassName"
                                  className="flightclassName"
                                  name="cabin"
                                >
                                  <option value="1">First className</option>
                                  <option value="2">Business className</option>
                                  <option value="5" selected="selected">
                                    Economy
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="flexdiv">
                              <div className="counter" style={{width:'100%'}}>
                                <button type="button" className="btnok">
                                  Ok
                                </button>
                              </div>1
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="searchbtnbox">
              <div className="inputgroup">
                <input type="checkbox" id="html" />
                <label for="html">Direct Flight</label>
              </div>
              <button className="btnbtn">search</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { Flightsearch };