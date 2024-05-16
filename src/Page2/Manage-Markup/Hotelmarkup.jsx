import React from "react";
import { Header2 } from "../../Commen-Component/Header2";

function Hotelmarkup (){

    return(
        <>
        <Header2/>
         <section className="mainSection">
    <div className="container">
      <div className="markupdiv">

        <div className="topheading">Manage Hotel Markup</div>

        <div className="inputbox">
          <input type="checkbox" id="fixed"/>
          <label for="fixed">fixed</label>

          <div className="divflex">
            <label>Hotel Markup (Fixed) </label>
            <input type="text" value="0"/>
          </div>

        </div>
        <div className="inputbox">
          <input type="checkbox" id="Percentage "/>
          <label for="Percentage ">Percentage </label>
          <div className="divflex">
            <label> Hotel Markup (Percentage) </label>
            <input type="text" value="5"/>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}
export {Hotelmarkup}