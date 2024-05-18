import React from "react";
import { Header2 } from "../../Commen-Component/Header2";
import { Link } from "react-router-dom";


function Ticket() {
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
            <Link className="back_button">
              {" "}
              <i className="fa fa-backward"></i> Back{" "}
            </Link>
          </div>
          <div className="flightbookingdiv">
            <div className="pagination">
              <Link>1 /</Link>
              <Link>2 /</Link>
              <Link>3 /</Link>
              <Link>4 /</Link>
              <Link>5 /</Link>
              <Link>1 /</Link>
              <Link>Next / </Link>
              <Link>Last</Link>
            </div>
            <div className="leftrightpanel">
              <aside className="filterside">
                <div className="filterheading">
                  <div className="left">
                    {" "}
                    <span>
                      {" "}
                      <i className="fa fa-filter filter_headicon"></i> Filter
                      Your Search{" "}
                    </span>{" "}
                  </div>
                  <Link>
                    {" "}
                    <i className="fa fa-undo filter_headicon"></i>{" "}
                  </Link>
                </div>
                <div className="refresh">
                  {" "}
                  <span>
                    {" "}
                    <i className="fa fa-undo filter_headicon"></i> Search By{" "}
                  </span>{" "}
                </div>
                <div className="inputgroup">
                  <label>Airline(s)</label>
                  <input type="text" />
                  <small>Separate with commas</small>
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
                <div className="toggeldiv">
                  <div className="inputgroup">
                    <label>Passenger Mobile No. </label>
                    <input type="text" />
                  </div>
                  <div className="inputgroup">
                    <label>Ticket Number</label>
                    <input type="text" />
                  </div>
                  <div className="inputgroup">
                    <label>Agent Ref.No. (LPO)</label>
                    <input type="text" />
                  </div>
                </div>

                <div className="inputgroup morebtn">
                  <span className="plus"> More Options (+) </span>
                  <span className="minus"> More less (-) </span>
                </div>

                <button className="filterbtn">
                  {" "}
                  <i className="fa fa-filter filter_headicon"></i> Filter
                </button>
              </aside>
              <div className="rigthside">
                <div className="topheading">confirm Tickets</div>
                <div className="rightcard">
                  <ul className="cardlist">
                    <li>
                      <span className="title">
                        PNR: <small>EK-2LS3HJ (Ref: 1175337) </small>{" "}
                      </span>
                    </li>
                    <li>
                      <span className="title">USD 709.23</span>
                      <br />
                      <span className="heading hold">Non-Refundable</span>
                    </li>
                  </ul>
                  <ul className="cardlist">
                    <li>
                      <span className="title">
                        Lead Passenger: <b> SAIFELDIN AHMED </b>{" "}
                      </span>
                      <br />
                      <span className="title">
                        {" "}
                        Travel Date: <small> 02 Oct 22 </small>{" "}
                      </span>
                    </li>
                    <li className="midlist">
                      <div className="heading">DXB - KRT </div>
                      <small>Tickets: </small>
                      <br />
                      <Link>AIFELDIN AHMED</Link>
                    </li>
                    <li>
                      <li>
                        <span className="title">
                          Airline Ref: <small> NGBQP6</small>
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
                      <Link className="cmmonbtns">
                        {" "}
                        <i className="fa fa-plane icon mlr5"></i> fare Rules{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="cmmonbtns">
                        {" "}
                        Request Change
                      </Link>
                    </li>
                    <li>
                      <Link className="cmmonbtns">
                        Open
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="rightcard">
                  <ul className="cardlist">
                    <li>
                      <span className="title">
                        PNR: <small>EK-2LS3HJ (Ref: 1175337) </small>{" "}
                      </span>
                    </li>
                    <li>
                      <span className="title">USD 709.23</span>
                    </li>
                  </ul>
                  <ul className="cardlist">
                    <li>
                      <span className="title">
                        Lead Passenger: <b> SAIFELDIN AHMED </b>{" "}
                      </span>
                      <br />
                      <span className="title">
                        {" "}
                        Travel Date: <small> 02 Oct 22 </small>{" "}
                      </span>
                    </li>
                    <li className="midlist">
                      <div className="heading">DXB - KRT </div>
                      <small>Tickets: </small>
                      <br />
                      <Link>AIFELDIN AHMED</Link>
                    </li>
                    <li>
                      <li>
                        <span className="title">
                          Airline Ref: <small> NGBQP6</small>
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
                      <Link className="cmmonbtns">
                        {" "}
                        <i className="fa fa-plane icon mlr5"></i> fare Rules{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="cmmonbtns">
                        {" "}
                        Request Change
                      </Link>
                    </li>
                    <li>
                      <Link className="cmmonbtns">
                        Open
                      </Link>
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
export { Ticket };