import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />{" "}
      <div className="about-5__area about-5__plr ">
        <div className="container-fluid pt-24">
          <div className="about-5__border">
            <div className="row align-items-center">
              <div
                className="col-xl-5 col-lg-5 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="about-5__main-img text-center text-lg-start">
                  <a href="about-us.html">
                    <img
                      src="https://cdn.discordapp.com/attachments/993544507285061673/1084739123824312431/Social_Media_Profile_Picture_500_500_px_485_487_px.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="about-5__content-box">
                  <h4
                    className="about-5__content-title wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    About Us:
                  </h4>
                  <div className="about-5__content">
                    <div
                      className="about-5__text wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".7s"
                    >
                      <p>
                        There is no hiding how stressful it is to be in debt.
                        You might put on a brave face for your loved ones, but
                        in reality, you can't stop stressing about where you
                        will get the funds to pay your debts and keep the lights
                        on in your house. You don't need to live that lifestyle.
                        Because our Advocates will pursue legal action to stop
                        the creditor's harassment, you can live a life
                        comfortable in the assurance that your debts are now
                        being managed and without worrying about creditors
                        calling you or approaching your friends and family
                        nonstop. We have served thousands of Indians just like
                        you over the years. Experience tells us that many people
                        find it hard to find the time.
                      </p>
                    </div>
                    <div
                      className="about-5__content-list wow tpfadeUp w-full"
                      data-wow-duration=".9s"
                      data-wow-delay=".9s"
                    >
                      <ul className="w-full">
                        <li className="w-full">
                          <i className="fal fa-check-circle" />
                          <span className="w-full">
                            We are trusted by more than 5000 clients
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="about-5__button wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay="1.1s"
                    >
                      <Link
                        className="main-btn tp-btn-hover alt-color"
                        to="/contact"
                      >
                        <span>Connect with Us</span>
                        <b />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
