import React from "react";

function Stats() {
  return (
    <div className="counter__area counter__mlr mb-70 z-index">
      {/* <div className="counter__shape-1">
        <img src="assets/img/counter/counter-shape-1.png" alt="" />
      </div> */}
      {/* <div className="counter__shape-2">
        <img src="assets/img/counter/counter-shape-2.png" alt="" />
      </div> */}
      <div className="counter__black-bg">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="counter__item counter__color-1 text-center">
                <div className="counter__text">
                  <h4 className="counter__title">Experience </h4>
                </div>
                <div className="counter__icon">
                  <span>
                    <i className="fal fa-rocket-launch" />
                  </span>
                </div>
                <div className="counter__text">
                  <span>
                    <i className="counter">10</i>Y+
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="counter__item counter__color-2 text-center">
                <div className="counter__text">
                  <h4 className="counter__title">Client conversation</h4>
                </div>
                <div className="counter__icon">
                  <span>
                    <i className="fal fa-comments-alt" />
                  </span>
                </div>
                <div className="counter__text">
                  <span>
                    <i className="counter">30000</i>+
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="counter__item counter__color-3 text-center">
                <div className="counter__text">
                  <h4 className="counter__title">People we helped</h4>
                </div>
                <div className="counter__icon">
                  <span>
                    <i className="far fa-hands-helping" />
                  </span>
                </div>
                <div className="counter__text">
                  <span>
                    <i className="counter">5000</i>+
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay="1.1s"
            >
              <div className="counter__item counter__color-4 text-center">
                <div className="counter__text">
                  <h4 className="counter__title">Debt Handled</h4>
                </div>
                <div className="counter__icon">
                  <span>
                    <i className="fal fa-money-check-edit-alt" />
                  </span>
                </div>
                <div className="counter__text">
                  <span>
                    <i className="counter">100</i>Cr+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
