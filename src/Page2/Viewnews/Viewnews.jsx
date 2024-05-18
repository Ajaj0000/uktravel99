import React from "react";
import { Header2 } from "../../Commen-Component/Header2";
import { Link } from "react-router-dom";

function Viewnews() {
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

          <div className="newsbox">
            <div className="heading">View News</div>
            <div className="innerbox">
              <div className="title">
                {" "}
                <span>News Title</span> <span>22/04/2022</span>{" "}
              </div>
              <article>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita animi voluptas sapiente voluptatibus fugit quos ipsum
                sequi vitae iusto? Doloribus fugiat earum alias sunt sequi
                asperiores dolorum debitis labore! Itaque? Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Expedita animi voluptas
                sapiente voluptatibus fugit quos ipsum sequi vitae iusto?
                Doloribus fugiat earum alias sunt sequi asperiores dolorum
                debitis labore! Itaque?
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { Viewnews };
