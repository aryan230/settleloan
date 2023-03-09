import React from "react";

function SocialFeed() {
  return (
    <div class="social__area social__mlr pb-70 pt-20">
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 d-xl-none d-xxl-block wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div class="social__item social__border-color-1 d-flex justify-content-between align-items-center">
              <div class="social__content-box d-flex align-items-center">
                <div class="social__icon">
                  <img src="assets/img/social/social-1.png" alt="" />
                </div>
                <div class="social__text">
                  <h4 class="social__title">
                    <a href="#">Slack Best</a>
                  </h4>
                  <span>MESSAGING</span>
                </div>
              </div>
              <div class="social__link contact__color-1">
                <a href="#">
                  <span>
                    <i class="fal fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div class="social__item social__border-color-2 d-flex align-items-center justify-content-between">
              <div class="social__content-box d-flex align-items-center">
                <div class="social__icon">
                  <img
                    src="https://ordainit.com/Sorex/sorex/assets/img/social/social-2.png"
                    alt=""
                  />
                </div>
                <div class="social__text">
                  <h4 class="social__title">
                    <a href="#">Instagram</a>
                  </h4>
                  <span>MESSAGING</span>
                </div>
              </div>
              <div class="social__link social__color-2">
                <a href="#">
                  <span>
                    <i class="fal fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".9s"
          >
            <div class="social__item social__border-color-3 d-flex align-items-center justify-content-between">
              <div class="social__content-box d-flex align-items-center">
                <div class="social__icon">
                  <img src="assets/img/social/social-3.png" alt="" />
                </div>
                <div class="social__text">
                  <h4 class="social__title">
                    <a href="#">Twitter</a>
                  </h4>
                  <span>MESSAGING</span>
                </div>
              </div>
              <div class="social__link social__color-3">
                <a href="#">
                  <span>
                    <i class="fal fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay="1.1s"
          >
            <div class="social__item social__border-color-4 d-flex align-items-center justify-content-between">
              <div class="social__content-box d-flex align-items-center">
                <div class="social__icon">
                  <img src="assets/img/social/social-4.png" alt="" />
                </div>
                <div class="social__text">
                  <h4 class="social__title">
                    <a href="#">Pinterest</a>
                  </h4>
                  <span>MESSAGING</span>
                </div>
              </div>
              <div class="social__link social__color-4">
                <a href="#">
                  <span>
                    <i class="fal fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialFeed;
