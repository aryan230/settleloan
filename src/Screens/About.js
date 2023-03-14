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
                        Dealing with debt can have a significant impact on your
                        mental and emotional well-being. It can lead to feelings
                        of hopelessness, anxiety, and depression, making it
                        difficult to concentrate on other important aspects of
                        your life, such as work or relationships. Moreover, the
                        constant pressure of being in debt can strain your
                        personal relationships, leading to further stress and
                        isolation.
                      </p>
                      <p>
                        However, seeking help from Settleloans can provide you
                        with much-needed relief. We understand the challenges of
                        being in debt and the impact it can have on your life.
                        Our team is dedicated to providing you with
                        comprehensive debt management solutions tailored to your
                        unique needs, so you can regain control of your finances
                        and your life.
                      </p>
                      <p>
                        With our support, you can develop a plan to pay off your
                        debts gradually while still maintaining your basic
                        needs. Settleloans will also work with your creditors to
                        negotiate lower interest rates and more favorable
                        repayment terms, ensuring that you can manage your debts
                        without incurring additional financial burden.
                      </p>
                      <p>
                        At the same time, our team will handle all
                        communications with your creditors, ensuring that you no
                        longer have to endure constant calls and visits from
                        debt collectors. This can provide you with a sense of
                        peace and security, allowing you to focus on rebuilding
                        your life without the added stress of dealing with
                        creditors.
                      </p>
                      <p>
                        So, if you're struggling with debt, don't suffer in
                        silence. Contact Settleloans today to learn more about
                        how we can help you regain control of your finances and
                        your life.
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
