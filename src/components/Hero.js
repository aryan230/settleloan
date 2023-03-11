import React, { useState } from "react";
import shape1 from "./../assets/img/slider/m1.png";
import shape2 from "./../assets/img/slider/m2.png";
import shape3 from "./../assets/img/slider/m3.png";
import Logo from "./../assets/img/logo/logo-image.png";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import PELoader from "../Screens/Utils/PELoader";
function Hero() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [debtAmount, setDebtAmount] = useState();
  const [areYouFacing, setAreYouFacing] = useState("option-1");
  const [loader, setLoader] = useState(false);
  const collRef = collection(db, "home-form");
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);

    const docRef = await addDoc(collRef, {
      name,
      number,
      email,
      debtAmount,
      areYouFacing,
    });
    window.setTimeout(() => {
      setLoader(false);
      localStorage.setItem("formName", name);
      navigate(`/thanks/${docRef.id}`);
      console.log("Document written with ID: ", docRef.id);
    }, 3000);
  };
  return (
    <div className="slider__area grey-bg slider__space slider__plr p-relative z-index fix">
      {loader && <PELoader />}
      <div
        className="slider__shape-top-1 d-none d-xl-block wow tpfadeLeft"
        data-wow-duration=".9s"
        data-wow-delay=".7s"
      >
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-1.png"
          alt=""
        />
      </div>
      <div
        className="slider__shape-top-2 d-none d-xl-block wow tpfadeLeft"
        data-wow-duration=".9s"
        data-wow-delay="1.2s"
      >
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-2.png"
          alt=""
        />
      </div>
      <div
        className="slider__shape-top-3 d-none d-xl-block wow tpfadeRight"
        data-wow-duration=".9s"
        data-wow-delay=".7s"
      >
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-3.png"
          alt=""
        />
      </div>
      <div
        class="slider__shape-top-4 d-none d-xl-block wow tpfadeRight"
        data-wow-duration=".9s"
        data-wow-delay="1s"
      >
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-4.png"
          alt=""
        />
      </div>
      <div class="slider__shape-top-5 d-none d-xxl-block">
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-5.png"
          alt=""
        />
      </div>
      <div class="slider__shape-top-6 d-none d-lg-block">
        <img src="https://i.ibb.co/3F74B4c/6844401.png" alt="" />
      </div>
      <div class="slider__shape-top-7 d-none d-sm-block">
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-7.png"
          alt=""
        />
      </div>
      <div class="slider__shape-top-8">
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-8.png"
          alt=""
        />
      </div>
      <div class="slider__shape-top-9 d-none d-xl-block">
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-9.png"
          alt=""
        />
      </div>
      <div class="slider__shape-top-10">
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-10.png"
          alt=""
        />
      </div>
      <div class="slider__shape-top-11">
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-11.png"
          alt=""
        />
      </div>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="slider__section-box">
              <h4 className="section-subtitle char-anim">
                Settle Loan's, Settle Life!
              </h4>
              {/* <h4 class="section-subtitle char-anim">
                Stop recovery calls in 24 hours.
              </h4> */}
              <h3 className="hero-title">
                Stop your Bank harassment and start your Legal proceeding in 24
                hours.
              </h3>
            </div>
            <div
              className="slider__content wow"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <p className="char-anim-2">
                Settle Loans swiftly stops bank harassment and initiates legal
                proceedings within 24 hours.
                {/* Settle Loans provides fast and effective legal solutions for
                consumers who are experiencing harassment from banks, taking
                action within 24 hours to stop the harassment and pursue legal
                proceedings. */}
              </p>
            </div>
            <div
              className="slider__btn wow  mt-30"
              data-wow-duration=".9s"
              data-wow-delay="1.1s"
            >
              <a
                className="main-btn tp-btn-hover alt-color"
                href="about-us.html"
              >
                <span>Stop Your Harrasment Now</span>
                <b />
              </a>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 wow somevalue glass-form-effect-2"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <h3>Get Consultation</h3>
            <div className="contact__section-title pb-10">
              <div className="form-div-hero">
                <form onSubmit={formSubmitHandler} className="glass_form">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="postbox__contact-input">
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="postbox__contact-input">
                        <input
                          type="text"
                          placeholder="Your Number"
                          required
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="postbox__contact-input">
                        <input
                          type="text"
                          placeholder="Your email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="postbox__contact-input">
                        <input
                          type="number"
                          placeholder="Total Debt Amount"
                          required
                          onChange={(e) => setDebtAmount(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="" className="are-you-facing">
                        Are you facing harassment by recovery agent / banks ?
                      </label>
                      <div className="wrapper">
                        <input
                          type="radio"
                          name="select"
                          id="option-1"
                          value="yes"
                          onChange={(e) => {
                            setAreYouFacing(e.target.id);
                          }}
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="select"
                          value="no"
                          id="option-2"
                          onChange={(e) => {
                            setAreYouFacing(e.target.id);
                          }}
                        />
                        <label htmlFor="option-1" className="option option-1">
                          <div className="dot" />
                          <span>Yes</span>
                        </label>
                        <label htmlFor="option-2" className="option option-2">
                          <div className="dot" />
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                    <div
                      className="contact__button wow pt-20"
                      data-wow-duration=".9s"
                      data-wow-delay="1.1s"
                    >
                      <button
                        className="main-btn-sm tp-btn-hover alt-color"
                        type="submit"
                      >
                        <span>Send Request</span>
                        <b />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div
              className="contact__button wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay="1.1s"
            >
              {/* <button className="main-btn-sm tp-btn-hover alt-color">
                <span>Send Request</span>
                <b />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
