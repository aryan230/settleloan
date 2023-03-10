import React from "react";

function Manager() {
  return (
    <div class="feature__area feature__mlr pt-30 pb-70">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div
            class="col-xl-6 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div class="feature__section-box text-center pb-40">
              <h4 class="section-subtitle title-anim">
                You stay in control, we do the work for you.
              </h4>
              <h3 class="section-title title-anim pt-20 pb-20">
                How Does Our 3-Step Program Work?
              </h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div class="feature__item feature__color-1 text-center">
              <div class="feature__icon z-index">
                <span className="feature_icon_span_number">1</span>
              </div>
              <div class="feature__content">
                <h4 class="feature__title">
                  Free, No Obligation Debt Consultation
                </h4>
                <p>
                  Talk to our Certified Debt Specialist to assess your financial
                  situation and see your best possible alternative to legally
                  settle your loans with the help of our legal and financial
                  experts.
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div class="feature__item feature__color-2 text-center">
              <div class="feature__icon z-index">
                <span>
                  <span className="feature_icon_span_number">2</span>
                </span>
              </div>
              <div class="feature__content">
                <h4 class="feature__title">We Negotiate Your Debt Down</h4>
                <p>
                  Once enrolled, we create an affordable, personalised plan for
                  you to become debt free. Our negotiators work with your
                  creditors directly to reduce your debt balance quickly. This
                  saves you time and lets you focus on stabilising your
                  finances.
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".9s"
          >
            <div class="feature__item feature__color-3 text-center">
              <div class="feature__icon z-index">
                <span>
                  <span className="feature_icon_span_number">3</span>
                </span>
              </div>
              <div class="feature__content">
                <h4 class="feature__title">Your Debt Balance Decreases</h4>
                <p>
                  We repeat this process for each creditor until all your
                  accounts are settled for a reduced amount. You'll be debt-free
                  much faster than you ever thought possible with no harassment
                  and easy process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manager;
