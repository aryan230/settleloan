import React from "react";

function Testimonials() {
  return (
    <div className="testimonial__area testimonial__plr black-bg p-relative">
      <div className="testimonial__shape-1">
        <img src="assets/img/testimonial/testi-shape-2.png" alt="" />
      </div>
      <div className="testimonial__shape-2">
        <img src="assets/img/testimonial/testi-shape-3.png" alt="" />
      </div>
      <div className="testimonial__shape-3">
        <img src="assets/img/testimonial/testi-shape-4.png" alt="" />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-xl-7 col-xxl-9 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="testimonial__section-box text-center z-index pb-40">
              <h4 className="section-subtitle section-white-bg">
                Client Testimonial
              </h4>
              <h3 className="section-title text-white">
                Perfect Contact This Softwer <br />
                Company Manage.
              </h3>
            </div>
          </div>
        </div>
        <div
          className="testimonial__slider-wrapper z-index wow tpfadeUp"
          data-wow-duration=".9s"
          data-wow-delay=".5s"
        >
          <div className="swiper-container testimonial__active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial__item d-flex justify-content-betweena align-items-center p-relative">
                  <div className="testimonial__item-shape">
                    <img
                      src="assets/img/testimonial/testi-item-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__content">
                    <div className="testimonial__author-info">
                      <h5 className="testimonial__author-name">Karon Rubel</h5>
                      <span>Founder</span>
                    </div>
                    <div className="testimonial__content-text">
                      <p>
                        We are privileged to work with hundreds future
                        businesses, including many of the world’s software, and
                        brands.
                      </p>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star star-color" />
                    </div>
                  </div>
                  <div className="testimonial__main-img">
                    <img src="assets/img/testimonial/testi-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial__item d-flex justify-content-betweena align-items-center p-relative">
                  <div className="testimonial__item-shape">
                    <img
                      src="assets/img/testimonial/testi-item-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__content">
                    <div className="testimonial__author-info">
                      <h5 className="testimonial__author-name">Karim Rubel</h5>
                      <span>Founder</span>
                    </div>
                    <div className="testimonial__content-text">
                      <p>
                        We are privileged to work with hundreds future
                        businesses, including many of the world’s software, and
                        brands.
                      </p>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star star-color" />
                    </div>
                  </div>
                  <div className="testimonial__main-img">
                    <img src="assets/img/testimonial/testi-2.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial__item d-flex justify-content-betweena align-items-center p-relative">
                  <div className="testimonial__item-shape">
                    <img
                      src="assets/img/testimonial/testi-item-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__content">
                    <div className="testimonial__author-info">
                      <h5 className="testimonial__author-name">Jemil Boul</h5>
                      <span>Founder</span>
                    </div>
                    <div className="testimonial__content-text">
                      <p>
                        We are privileged to work with hundreds future
                        businesses, including many of the world’s software, and
                        brands.
                      </p>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star star-color" />
                    </div>
                  </div>
                  <div className="testimonial__main-img">
                    <img src="assets/img/testimonial/testi-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="testimonial-slider-dots wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
