import React from "react";
import { Header2 } from "../../Commen-Component/Header2";

function Flightmarkup() {
  return (
    <>
      <Header2 />
      <section className="mainSection">
        <div className="container">
          <div className="markupdiv">
            <div className="topheading">Manage Flight Markup </div>

            <div className="inputbox">
              <input type="checkbox" id="fixed" />
              <label for="fixed">fixed</label>

              <div className="divflex">
                <label>Flight Markup (Fixed Per Pax)</label>
                <input type="text" value="0" />
              </div>
            </div>
            <div className="inputbox">
              <input type="checkbox" id="Percentage " />
              <label for="Percentage ">Percentage </label>
              <div className="divflex">
                <label>Flight Markup (Flight Markup )</label>
                <input type="text" value="5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { Flightmarkup };
