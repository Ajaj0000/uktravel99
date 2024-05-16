import React from "react";
import { Header } from "../Commen-Component/Header";
import { Footer } from "../Commen-Component/Footer";

function About() {
  return (
    <>
      <Header />
      <div class="pagesbanner">
        <figure>
          <img src="assets/images/home/banner.jpg" alt="" />
        </figure>
        <div class="container">
          <div class="pagesHeading"> About Us</div>
          <ul class="breadcrumbs">
            <li>
              <a href="/home/index">Home</a>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      <div class="container aboutus_content">
        <article>
          <div class="heading">About Us</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            eligendi labore sed temporibus inventore aliquam possimus, saepe
            quibusdam dignissimos aspernatur eveniet error quas laboriosam
            distinctio quos fugiat iure, sapiente ducimus.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eius eligendi labore sed
            temporibus inventore aliquam possimus, saepe quibusdam dignissimos
            aspernatur eveniet error quas laboriosam distinctio quos fugiat
            iure, sapiente ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            eligendi labore sed temporibus inventore aliquam possimus, saepe
            quibusdam dignissimos aspernatur eveniet error quas laboriosam
            distinctio quos fugiat iure, sapiente ducimus.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eius eligendi labore sed
            temporibus inventore aliquam possimus, saepe quibusdam dignissimos
            aspernatur eveniet error quas laboriosam distinctio quos fugiat
            iure, sapiente ducimus.
          </p>
        </article>

        <article>
          <div class="heading">Living It Up In The Lap Of Luxury</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            eligendi labore sed temporibus inventore aliquam possimus, saepe
            quibusdam dignissimos aspernatur eveniet error quas laboriosam
            distinctio quos fugiat iure, sapiente ducimus.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eius eligendi labore sed
            temporibus inventore aliquam possimus, saepe quibusdam dignissimos
            aspernatur eveniet error quas laboriosam distinctio quos fugiat
            iure, sapiente ducimus.
          </p>
          <span>Who are we ?</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            minima sunt veniam magni vel, dolorum fuga consectetur dolore
            soluta. Ipsum numquam consequuntur, quibusdam nulla modi quo
            pariatur ducimus quod illum?
          </p>
          <span> Our vision:</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            minima sunt veniam magni vel, dolorum fuga consectetur dolore
            soluta. Ipsum numquam consequuntur, quibusdam nulla modi quo
            pariatur ducimus quod illum?
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}
export { About };
