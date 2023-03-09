import React from "react";
import shape1 from "./../assets/img/slider/m1.png";
import shape2 from "./../assets/img/slider/m2.png";
import shape3 from "./../assets/img/slider/m3.png";
import Logo from "./../assets/img/logo/logo-image.png";
function Hero() {
  return (
    <div className="slider__area grey-bg slider__space slider__plr p-relative z-index fix">
      {/* <div
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
      </div> */}
      {/* <div class="slider__shape-top-5 d-none d-xxl-block">
        <img src="assets/img/slider/shape-5.png" alt="" />
      </div> */}
      {/* <div class="slider__shape-top-6 d-none d-lg-block">
        <img src="assets/img/slider/shape-6.png" alt="" />
      </div> */}
      {/* <div class="slider__shape-top-7 d-none d-sm-block">
        <img src="assets/img/slider/shape-7.png" alt="" />
      </div> */}
      {/* <div class="slider__shape-top-8">
        <img src="assets/img/slider/shape-8.png" alt="" />
      </div> */}
      {/* <div class="slider__shape-top-9 d-none d-xl-block">
        <img src="assets/img/slider/shape-9.png" alt="" />
      </div> */}
      {/* <div class="slider__shape-top-10">
        <img src="assets/img/slider/shape-10.png" alt="" />
      </div> */}
      {/* <div class="slider__shape-top-11">
        <img src="assets/img/slider/shape-11.png" alt="" />
      </div> */}
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="slider__section-box">
              {/* <h4 class="section-subtitle char-anim">
                Stop recovery calls in 24 hours.
              </h4> */}
              <h3 className="hero-title">
                Stop your Bank harassment and start your{" "}
                <span className="something_title_span">Legal</span> proceeding
                in 24 hours.
              </h3>
            </div>
            <div
              className="slider__btn wow tpfadeUp mt-30"
              data-wow-duration=".9s"
              data-wow-delay="1.1s"
            >
              <a
                className="main-btn tp-btn-hover alt-color"
                href="about-us.html"
              >
                <span>Get Your Process Started Now</span>
                <b />
              </a>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 wow tpfadeRight somevalue glass-form-effect-2"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="contact__section-title pb-10">
              <h3
                className="section-title char-anim wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                Get Consultation
              </h3>
            </div>
            <div
              className="wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <form action="#" className="">
                <div className="row">
                  {/* <div className="col-sm-6">
                    <div className="postbox__contact-input">
                      <input type="text" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="postbox__contact-input">
                      <input type="email" placeholder="Your Mobile" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="postbox__contact-input">
                      <input type="text" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="postbox__contact-input">
                      <input type="text" placeholder="City" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="postbox__contact-input">
                      <input type="text" placeholder="Zip Code" />
                    </div>
                  </div> */}
                </div>
              </form>
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
