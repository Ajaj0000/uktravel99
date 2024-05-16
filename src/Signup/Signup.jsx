import React from "react";
import { Header } from "../Commen-Component/Header";
import { Footer } from "../Commen-Component/Footer";

function Signup() {
  return (
    <>
      <Header />
      <div className="signupmain">
        <div className="container">
          <div className="toptext">
            <div className="heading"> Request membership</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, optio ut laudantium aliquid, dicta sequi beatae rerum
              unde excepturi, tempore alias veritatis exercitationem quis
            </p>
          </div>
          <div className="leftHeading"> Agency registration form</div>
          <div className="inputbox">
            <label>
              {" "}
              Company name <span>*</span>
            </label>
            <input
              name="companyname"
              type="text"
              id="txtcompanyname"
              placeholder="Enter Comapany Name Here!"
            />
          </div>
          <div className="inputbox">
            <label>
              {" "}
              Pincode/Zipcode/Postcode <span>*</span>
            </label>
            <input
              name="companyname"
              type="text"
              id="txtcompanyname"
              placeholder="Pincode/Zipcode/Postcode"
            />
          </div>
          <div className="inputbox">
            <label>
              Country <span>*</span>
            </label>
            <select name="" id="">
              <option value="0">--Select Country--</option>
            </select>
          </div>
          <div className="inputbox">
            <label>
              {" "}
              City <span>*</span>
            </label>
            <input
              name="companyname"
              type="text"
              id="txtcompanyname"
              placeholder="Enter City Name"
            />
          </div>
          <div className="inputbox">
            <label>
              {" "}
              Iata Status <span>*</span>
            </label>
            <div className="flexbox">
              <div className="left">
                <input type="radio" id="iata1" />
                <label for="iata1"> Approved</label>
              </div>
              <div className="right">
                <input type="radio" id="iata2" />
                <label for="iata2"> Not Approved</label>
              </div>
            </div>
          </div>
          <div className="inputbox">
            <label>
              {" "}
              Iata Number <span>*</span>
            </label>
            <input
              name="companyname"
              type="text"
              id="txtcompanyname"
              placeholder="Enter Iata Number Here"
            />
          </div>
          <div className="inputbox">
            <label>
              Upload Legal Document (Size:2MB) <span>*</span>
            </label>
            <div className="filebox">
              <p className="uploadfile">
                {" "}
                Upload File
                <input type="file" />{" "}
              </p>
            </div>
          </div>
          <div className="inputbox">
            <label>
              {" "}
              Address <span>*</span>
            </label>
            <input
              name="companyname"
              type="text"
              id="txtcompanyname"
              placeholder="Enter Address Here"
            />
          </div>
          <div className="inputbox">
            <label>
              {" "}
              Username <span>*</span>
            </label>
            <input
              name="companyname"
              type="text"
              id="txtcompanyname"
              placeholder="Enter Username  Here"
            />
          </div>
          <div className="inputbox">
            <label>
              {" "}
              Password <span>*</span>
            </label>
            <input
              name="companyname"
              type="text"
              id="txtcompanyname"
              placeholder="Enter Password Here"
            />
          </div>
          <div className="inputbox">
            <label>
              {" "}
              Currency <span>*</span>
            </label>
            <input
              name="companyname"
              type="text"
              id="txtcompanyname"
              placeholder="Enter Currency Here"
            />
          </div>
          <div className="inputbox">
            <label>
              {" "}
              Mobile Number <span>*</span>
            </label>
            <input
              name="companyname"
              type="text"
              id="txtcompanyname"
              placeholder="Enter Mobile Number Here"
            />
          </div>

          <div className="scrolldiv">
            <span>Please scroll down to read more information</span>
            <div className="title">The online signers Both the Parties:</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              earum natus officiis rerum maiores aspernatur, voluptatibus ad
              harum excepturi odit esse placeat cupiditate perspiciatis amet
              porro, sunt quibusdam nobis officia?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              earum natus officiis rerum maiores aspernatur, voluptatibus ad
              harum excepturi odit esse placeat cupiditate perspiciatis amet
              porro, sunt quibusdam nobis officia?
            </p>
          </div>
          <div className="inputbox trems">
            <input type="checkbox" id="terms" />
            <label for="terms">
              {" "}
              I accept Terms and Conditions <span>*</span>
            </label>
          </div>
          <button className="sbmtbtn">Submit</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export { Signup };
