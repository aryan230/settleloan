import React from "react";

function Contact() {
  return (
    <div className="contact__area contact__plr-2 mt-100 mb-100 p-relative fix">
      <div className="contact__shape-1 d-none d-lg-block">
        <img src="assets/img/contact/ct-shape-1.png" alt="" />
      </div>
      <div className="contact__shape-2 d-none d-xxl-block">
        <img src="assets/img/contact/ct-shape-2.png" alt="" />
      </div>
      <div className="contact__shape-3 d-none d-xxl-block">
        <img src="assets/img/contact/ct-shape-3.png" alt="" />
      </div>
      <div className="contact__shape-4 d-none d-lg-block">
        <img src="assets/img/contact/ct-shape-4.png" alt="" />
      </div>
      <div className="contact__border">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-7">
              <div className="contact__section-title pb-10">
                <h4
                  className="section-subtitle char-anim wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  Get In Contact
                </h4>
                <h3
                  className="section-title char-anim wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  Feel free to get in touch <br />
                  Contact with us.
                </h3>
              </div>
              <div
                className="contact__text wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <p className="char-anim-2">
                  Our experienced team is dedicated to providing personalized
                  solutions for your legal needs.
                </p>
              </div>
              <div
                className="contact__form wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <form action="#">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="postbox__contact-input">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="postbox__contact-input">
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="postbox__contact-textarea">
                        <textarea placeholder="Message" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="contact__button wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay="1.1s"
              >
                <button className="main-btn-sm tp-btn-hover alt-color">
                  <span>Send Request</span>
                  <b />
                </button>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="contact__left-side">
                <div
                  className="contact__item d-flex align-items-center wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div className="contact__icon">
                    <span>
                      <a href="#">
                        <i className="fal fa-phone-alt" />
                      </a>
                    </span>
                  </div>
                  <div className="contact__content">
                    <h4 className="contact__title-sm">Call This Now</h4>
                    <span>
                      <a href="tel:+919821219819">
                        +919821219819 <br />
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="contact__item d-flex align-items-center wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <div className="contact__icon">
                    <span>
                      <a href="#">
                        <i className="fal fa-envelope-open-text" />
                      </a>
                    </span>
                  </div>
                  <div className="contact__content">
                    <h4 className="contact__title-sm">Your Message</h4>
                    <span>
                      <a href="/cdn-cgi/l/email-protection#7c1d111d0e3c111d1510521f1311">
                        <span
                          className="__cf_email__"
                          data-cfemail="ea8b878b98aa878b8386c4898587"
                        >
                          info@settleloans.in
                        </span>
                        {/* <br />
                        <span
                          className="__cf_email__"
                          data-cfemail="186a777a715875797174367b7775"
                        >
                          legal@settleloans.in
                        </span> */}
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="contact__item d-flex align-items-center wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".9s"
                >
                  <div className="contact__icon">
                    <span>
                      <a href="#">
                        <i className="fal fa-map-marker-check" />
                      </a>
                    </span>
                  </div>
                  <div className="contact__content">
                    <h4 className="contact__title-sm">Your location</h4>
                    <span>
                      <a href="">PAN India</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
