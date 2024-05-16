import React from "react";
import { Header2 } from "../../Commen-Component/Header2";

function Credit() {
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
                      <i className="fa fa-filter filter_headicon"></i> Filter
                      Your Search{" "}
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
                <div className="rightcard">
                  <ul className="cardlist">
                    <li>
                      <span className="heading orange">
                        {" "}
                        UK Travel &Tourism Agency{" "}
                      </span>
                    </li>
                    <li>
                      <span className="title">Credit Note No. : FC2366</span>
                    </li>
                  </ul>
                  <ul className="cardlist">
                    <li>
                      <span className="title">
                        {" "}
                        Lead Guest:{" "}
                        <small>Ms SAMAH ABDELBASIT ELHASSAN - ADT</small>{" "}
                      </span>
                      <br />
                      <span className="title">
                        {" "}
                        Ticket No: <small> 3255880333667 </small>{" "}
                      </span>
                    </li>
                    <li className="midlist">
                      <div className="heading">Flight Details:</div>
                      <span>NP | 192 | SAW-CAI-SAW | B</span>
                    </li>
                    <li>
                      <li>
                        <span className="title">
                          PNR: <small> 1ZT9YR </small>
                        </span>
                        <br />
                        <span className="title">
                          {" "}
                          Airline Ref: <small> FN-VN9TKM</small>{" "}
                        </span>
                      </li>
                    </li>
                  </ul>
                  <table>
                    <thead>
                      <tr>
                        <th>Fare</th>
                        <th>Taxs</th>
                        <th>Cancellation Charge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>USD 239.76</td>
                        <td>USD 239.76</td>
                        <td>USD 10</td>
                      </tr>
                    </tbody>
                  </table>
                  <ul className="cardlist">
                    <li>
                      <a className="cmmonbtns">
                        View Credit Note
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="rightcard">
                  <ul className="cardlist">
                    <li>
                      <span className="heading orange">
                        {" "}
                        UK Travel &Tourism Agency{" "}
                      </span>
                    </li>
                    <li>
                      <span className="title">Credit Note No. : FC2366</span>
                    </li>
                  </ul>
                  <ul className="cardlist">
                    <li>
                      <span className="title">
                        {" "}
                        Lead Guest:{" "}
                        <small>Ms SAMAH ABDELBASIT ELHASSAN - ADT</small>{" "}
                      </span>
                      <br />
                      <span className="title">
                        {" "}
                        Ticket No: <small> 3255880333667 </small>{" "}
                      </span>
                    </li>
                    <li className="midlist">
                      <div className="heading">Flight Details:</div>
                      <span>NP | 192 | SAW-CAI-SAW | B</span>
                    </li>
                    <li>
                      <li>
                        <span className="title">
                          PNR: <small> 1ZT9YR </small>
                        </span>
                        <br />
                        <span className="title">
                          {" "}
                          Airline Ref: <small> FN-VN9TKM</small>{" "}
                        </span>
                      </li>
                    </li>
                  </ul>
                  <table>
                    <thead>
                      <tr>
                        <th>Fare</th>
                        <th>Taxs</th>
                        <th>Cancellation Charge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>USD 239.76</td>
                        <td>USD 239.76</td>
                        <td>USD 10</td>
                      </tr>
                    </tbody>
                  </table>
                  <ul className="cardlist">
                    <li>
                      <a className="cmmonbtns">
                        View Credit Note
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
export { Credit };
