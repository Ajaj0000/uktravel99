import React from "react";
import { Header } from "../Commen-Component/Header";
import { Footer } from "../Commen-Component/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <section class="banner">
        <div class="swiper bannerSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <figure>
                <img src="assets/images/home/banner.jpg" alt="" />
              </figure>
            </div>
            <div class="swiper-slide">
              <figure>
                <img src="assets/images/home/banner.jpg" alt="" />
              </figure>
            </div>
            <div class="swiper-slide">
              <figure>
                <img src="assets/images/home/banner.jpg" alt="" />
              </figure>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <div class="bannerloginbox">
          <div class="headeing">Time for an adventure in UK</div>
          <span class="title">every time you come back..</span>

          <div class="agentbox">
            <div class="inputbox">
              <small>Agent</small>
              <input type="text" placeholder="User Name.." />
            </div>
            <div class="inputbox pswrd">
              <small>Password</small>
              <input type="password" placeholder="********" />
            </div>
            <button class="loginbtn">Login</button>
          </div>
        </div>
      </section>
      <section class="featurecard">
        <ul class="container">
          <li>
            <img src="assets/images/common/card.png" alt="" />
            <div class="text">
              <div class="heading">Time</div>
              <span class="title">Converter</span>
            </div>
          </li>
          <li class="active">
            <img src="assets/images/common/card1.png" alt="" />
            <div class="text">
              <div class="heading">World</div>
              <span class="title">Atlas</span>
            </div>
          </li>
          <li>
            <img src="assets/images/common/card2.png" alt="" />
            <div class="text">
              <div class="heading">Weather</div>
              <span class="title">Forecast</span>
            </div>
          </li>
          <li>
            <img src="assets/images/common/card3.png" alt="" />
            <div class="text">
              <div class="heading">Currency</div>
              <span class="title">Converter</span>
            </div>
          </li>
        </ul>
      </section>
      <section class="aboutsection">
        <div class="container">
          <article class="commontext leftsection">
            <span>About Company</span>
            <div class="heading">UK Travel & Tourism</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              rutrum velit at ornare malesuada. Etiam bibendum diam id dolor , a
              finibus ex pulvinar. Curabitur velit dui, sagittis vitae dolor ut,
              congueporttitor tellus. Pellentesque ut urna vehicula, rutrum
              tortor non, aliquam eros.
            </p>
            <p>
              Mauris a mi lectus. Mauris at neque mauris. Cras tristique
              molestie mauris, quis sollicitudin lorem efficitur vel. Integer
              consectetur nunc tellus, et tristique enim dapibus commodo.
            </p>
            <p>
              Duis finibus feugiat dolor, et convallis libero commodo a. Orci
              varius natoque penatibus et magnis disparturient..
            </p>
            <Link>Read more</Link>
          </article>
          <div class="rightsection">
            <article class="commontext">
              <span>Why</span>
              <div class="heading">Choose Us</div>
            </article>
            <div class="cardbox">
              <div class="leftbox">
                <div class="cards">
                  <img src="assets/images/common/choosecard.png" alt="" />
                  <div class="cardheading">
                    best <br />
                    price
                  </div>
                </div>
                <div class="cards card1">
                  <img src="assets/images/common/choosecard1.png" alt="" />
                  <div class="cardheading">
                    100% <br />
                    Reliability
                  </div>
                </div>
              </div>
              <div class="rightbox">
                <div class="cards card1">
                  <img src="assets/images/common/choosecard2.png" alt="" />
                  <div class="cardheading">
                    Quick <br />
                    Response
                  </div>
                </div>
                <div class="cards">
                  <img src="assets/images/common/choosecard3.png" alt="" />
                  <div class="cardheading">
                    Friendly <br />
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contactsection">
        <div class="container">
          <div class="left">
            <div class="title">Feel free to contact us</div>
            <Link>
              <img src="assets/images/common/email.png" alt="" />
              <p>
                <span>info@uktraveltourism.com </span>
                <span>support@uktraveltourism.com</span>
              </p>
            </Link>
            <Link>
              <img src="assets/images/common/call.png" alt="" />
              <span>+01 2345 6789</span>
            </Link>
          </div>
          <div class="right">
            <article class="commontext">
              <span>UK Travel & Tourism</span>
              <div class="heading">Connect To Us</div>
            </article>
            <div class="inputbox">
              <input type="text" placeholder="Name.." />
              <input type="text" placeholder="Subject.." />
              <input type="text" class="fullwidth" placeholder="Email ID.." />
              <div class="flexdiv">
                <textarea placeholder="Message.."></textarea>
                <button class="sbmtbtn">
                  <img src="assets/images/common/mouse.png" alt="" /> <br />
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export { Home };
