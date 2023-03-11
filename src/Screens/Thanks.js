import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

function Thanks() {
  const { formId } = useParams();
  const [name, setName] = useState();
  useEffect(() => {
    setName(localStorage.getItem("formName"));
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />{" "}
      <div className="slider-2__area grey-bg slider-2__space slider-2__plr p-relative z-index fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="slider-2__wrapper z-index">
                <div className="slider-2__section-box">
                  <h4 className="section-subtitle char-anim">
                    Ref ID: {formId}
                  </h4>
                  <h3 className="hero-title char-anim">Hey, {name}</h3>
                </div>
                <div className="slider-2__content">
                  <h4 className="slider-2__title-sm char-anim">
                    We have received your Response.
                  </h4>
                  <p className="char-anim-2">
                    Thank you for filling out the form. Our team will review
                    your submission and get back to you shortly regarding your
                    case. We understand the urgency of your situation and will
                    do everything we can to stop the harassment and pursue legal
                    action on your behalf as quickly as possible.
                  </p>
                </div>
                <div
                  className="slider-2__btn wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.5s"
                >
                  <Link to="/" className="main-btn tp-btn-hover alt-color">
                    <span>Continue</span>
                    <b />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="slider-2__thumb text-center">
                <img
                  src="https://i.ibb.co/1Qm2G11/Celebrate-Law-Day-Pster.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thanks;
