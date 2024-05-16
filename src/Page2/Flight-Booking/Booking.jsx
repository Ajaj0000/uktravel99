import React from "react";
import { Header2 } from "../../Commen-Component/Header2";


function Booking() {
  return (
    <>
    <Header2/>
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
          
          <div className="flightbookingdiv">
            <div className="pagination">
              <a>1 /</a>
              <a>2 /</a>
              <a>3 /</a>
              <a>4 /</a>
              <a>5 /</a>
              <a>1 /</a>
              <a>Next / </a>
              <a>Last</a>
            </div>
            <div className="leftrightpanel">
              <aside className="filterside">
                <div className="filterheading">
                  <div className="left">
                    {" "}
                    <span>
                      {" "}
                      <i className="fa fa-filter filter_headicon"></i> Filter Your
                      Search{" "}
                    </span>{" "}
                  </div>
                  <a>
                    {" "}
                    <i className="fa fa-undo filter_headicon"></i>{" "}
                  </a>
                </div>
                <div className="refresh">
                  {" "}
                  <span>
                    {" "}
                    <i className="fa fa-undo filter_headicon"></i> Search By{" "}
                  </span>{" "}
                </div>
                <div className="inputgroup">
                  <label>PNR</label>
                  <input type="text" />
                </div>
                <div className="inputgroup">
                  <label>File No.</label>
                  <input type="text" />
                </div>
                <div className="inputgroup">
                  <label>Passenger Name </label>
                  <input type="text" />
                </div>
                <div className="inputgroup">
                  <label>Passenger Mobile No. </label>
                  <input type="text" />
                  <small>Separate with commas</small>
                </div>
                <div className="refresh">
                  {" "}
                  <span>
                    {" "}
                    <i className="fa fa-undo filter_headicon"></i> Booking Status{" "}
                  </span>{" "}
                </div>
                <div className="inputgroup">
                  <input type="checkbox" id="hold" />
                  <label for="hold">On Hold</label>
                </div>
                <button className="filterbtn">
                  {" "}
                  <i className="fa fa-filter filter_headicon"></i> Filter
                </button>
              </aside>
              <div className="rigthside">
                <div className="rightcard">
                  <ul className="cardlist">
                    <li>
                      <span className="title">Online Booking </span>
                    </li>
                    <li className="midlist">
                      <div className="heading green">Released </div>
                      <small>Last Ticketing Date: 04 Nov 22 (02:00)</small>
                      <br />
                      <a>Please Refer SSR</a>
                    </li>
                    <li>
                      <span className="title">USD 709.23</span>
                    </li>
                  </ul>
                  <ul className="cardlist">
                    <li>
                      <span className="title">
                        Lead Passenger: <b> Mr MOHAMED ALHAGJ </b>{" "}
                      </span>
                      <br />
                      <span className="title">
                        {" "}
                        Booked On: <small> Sat 29 Oct 22 8:13 PM </small>{" "}
                      </span>
                      <br />
                      <span className="title">
                        {" "}
                        Flight Date: <small> Fri 04 Nov 22 </small>{" "}
                      </span>
                    </li>
                    <li className="midlist">
                      <div className="heading">TK | 681 </div>
                      <div className="heading">KRT-IST-ECN-IST-KRT</div>
                    </li>
                    <li>
                      <li>
                        <span className="title">
                          PNR: <small>TK-QSLLOI (Ref: 1189474 )</small>
                        </span>
                        <br />
                        <span className="title">
                          {" "}
                          File No: <small> FN-1062168</small>{" "}
                        </span>
                      </li>
                    </li>
                  </ul>
                  <ul className="cardlist">
                    <li>
                      <a href="./bookingdetail.html" className="cmmonbtns">
                        Open
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="rightcard">
                  <ul className="cardlist">
                    <li>
                      <span className="title">Online Booking </span>
                    </li>
                    <li className="midlist">
                      <div className="heading hold">Hold </div>
                      <small>Last Ticketing Date: 04 Nov 22 (02:00)</small>
                      <br />
                      <a>Please Refer SSR</a>
                    </li>
                    <li>
                      <span className="title">USD 709.23</span>
                    </li>
                  </ul>
                  <ul className="cardlist">
                    <li>
                      <span className="title">
                        Lead Passenger: <b> Mr MOHAMED ALHAGJ </b>{" "}
                      </span>
                      <br />
                      <span className="title">
                        {" "}
                        Booked On: <small> Sat 29 Oct 22 8:13 PM </small>{" "}
                      </span>
                      <br />
                      <span className="title">
                        {" "}
                        Flight Date: <small> Fri 04 Nov 22 </small>{" "}
                      </span>
                    </li>
                    <li className="midlist">
                      <div className="heading">TK | 681 </div>
                      <div className="heading">KRT-IST-ECN-IST-KRT</div>
                    </li>
                    <li>
                      <li>
                        <span className="title">
                          PNR: <small>TK-QSLLOI (Ref: 1189474 )</small>
                        </span>
                        <br />
                        <span className="title">
                          {" "}
                          File No: <small> FN-1062168</small>{" "}
                        </span>
                      </li>
                    </li>
                  </ul>
                  <ul className="cardlist">
                    <li>
                      <a className="cmmonbtns">
                        Release Seats
                      </a>
                    </li>
                    <li>
                      <a href="./bookingdetail.html" className="cmmonbtns">
                        Open
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { Booking };