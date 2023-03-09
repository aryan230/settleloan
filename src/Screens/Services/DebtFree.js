import React from "react";
import Header from "../../components/Header";
import Logo from "./../../assets/img/logo/logo-image.png";
function DebtFree() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div>
              <div
                className="breadcrumb__area breadcrumb__plr breadcrumb__space breadcrumb__bg breadcrumb__overlay p-relative fix"
                data-background="assets/img/slider/slider-bg-3.png"
              >
                <div
                  className="breadcrumb__shape-1 d-none d-md-block wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <img src="assets/img/slider/shape-32.png" alt="" />
                </div>
                <div className="breadcrumb__shape-2 d-none d-md-block">
                  <img src="assets/img/slider/shape-33.png" alt="" />
                </div>
                <div className="breadcrumb__shape-3 d-none d-xxl-block">
                  <img src="assets/img/slider/shape-34.png" alt="" />
                </div>
                <div className="breadcrumb__shape-4">
                  <img src="assets/img/slider/shape-35.png" alt="" />
                </div>
                <div className="breadcrumb__shape-5">
                  <img src="assets/img/slider/shape-24.png" alt="" />
                </div>
                <div className="breadcrumb__shape-6">
                  <img src="assets/img/slider/shape-22.png" alt="" />
                </div>
                <div className="breadcrumb__big-text d-none d-lg-block">
                  <h2>Settle Loans</h2>
                </div>
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="breadcrumb__content z-index">
                        <h3
                          className="breadcrumb__title char-anim wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay=".3s"
                        >
                          Debt Free Solution's
                        </h3>
                      </div>
                    </div>
                    <div
                      className="col-xxl-6 col-xl-6 col-lg-6 wow tpfadeRight"
                      data-wow-duration=".9s"
                      data-wow-delay=".9s"
                    >
                      <div className="breadcrumb__main-img text-end">
                        <img
                          src="http://127.0.0.1:5500/assets/img/about/about-5.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details__area service-details__plr mb-30">
                <div className="container-fluid">
                  {/* <div className="row">
                    <div
                      className="col-xl-8 col-lg-7 wow tpfadeLeft"
                      data-wow-duration=".9s"
                      data-wow-delay=".3s"
                    >
                      <div className="service-details__main-img">
                        <img
                          src="http://127.0.0.1:5500/assets/img/service/service-details-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="col-xl-12">
                      <div
                        className="service-details__item pt-40 wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".3s"
                      >
                        <div className="service-details__text">
                          <p>
                            This is one of the solutions Settleloans is
                            providing is to work up a payment plan that will
                            allow you to pay off all of your unsecured debts in
                            a manageable plan. As stated in RBI's working
                            document, this is known as a Debt Management Plan
                            (DMP), which SettleLoan will set up and maintain
                            with all of your creditors. The debts covered by
                            this debt management plan are unsecured debts, or
                            liabilities that are not secured by your assets or
                            properties. Personal loans, credit cards, student
                            loans, and bank overdrafts.
                          </p>
                          <p>
                            In your appointment, SettleLoans will determine the
                            appropriate monthly payment amount, and if you
                            decide to join with us, we'll approach your
                            creditors about accepting manageable payments. In
                            our experience, the majority of creditors tend to
                            agree with these as we explain your financial
                            circumstances to them.
                          </p>
                        </div>
                        <div
                          className="slider-3__content-list wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay="1.1s"
                        >
                          <ul>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                You'll just make monthly payments that you can
                                afford.
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                We'll lower your monthly payments to a
                                manageable amount.
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                You'll only be able to pay off all of your debt
                                with a single, manageable monthly payment.
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                On your behalf, we'll communicate with your
                                lenders
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                We handle dealing with creditors so you won't
                                have to.
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                On your behalf, we respond to every
                                correspondence from your creditors.
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                We can assist you in getting out of debt so you
                                can get your life back on track.
                              </span>
                            </li>
                          </ul>
                        </div>
                        {/* <div class="row">
                          <div
                            class="col-xl-6 wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".7s"
                          >
                            <div class="service-2__item-wrapper">
                              <div class="service-2__item d-flex z-index">
                                <div class="service-2__icon">
                                  <span>
                                    <i class="fal fa-signal-4"></i>
                                  </span>
                                </div>
                                <div class="service-2__content">
                                  <p>
                                    You'll just make monthly payments that you
                                    can afford.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-xl-6 wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".7s"
                          >
                            <div class="service-2__item-wrapper">
                              <div class="service-2__item d-flex z-index">
                                <div class="service-2__icon">
                                  <span>
                                    <i class="fal fa-signal-4"></i>
                                  </span>
                                </div>
                                <div class="service-2__content">
                                  <p>
                                    We'll lower your monthly payments to a
                                    manageable amount.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div className="service-details__text">
                          <p>
                            It can be challenging to know what to do, what
                            options are available, and who to turn to for
                            assistance when you are dealing with debt. The
                            hardest but most crucial step in regaining control
                            over your finances is frequently choosing to get
                            help. A debt management plan can be the best option
                            for you if you are having trouble making your
                            monthly payments on unsecured debts (loans, credit
                            cards, student loans, overdrafts). Consolidating all
                            monthly payments into a single monthly instalment is
                            one of the main advantages of a debt management
                            plan. In some circumstances, it might also be
                            feasible to freeze interest and any other extra
                            charger.
                          </p>
                        </div>
                        {/* <div
                          className="service-details__list wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay=".5s"
                        >
                          <ul>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                You'll just make monthly payments that you can
                                afford.
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                {" "}
                                We'll lower your monthly payments to a
                                manageable amount.
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                {" "}
                                You'll only be able to pay off all of your debt
                                with a single, manageable monthly payment.
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                {" "}
                                On your behalf, we'll communicate with your
                                lenders
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                {" "}
                                We handle dealing with creditors so you won't
                                have to.
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                {" "}
                                On your behalf, we respond to every
                                correspondence from your creditors.
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                {" "}
                                We can assist you in getting out of debt so you
                                can get your life back on track.
                              </span>
                            </li>
                          </ul>
                        </div> */}
                        <div
                          className="service-details__main-img-2 wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay=".7s"
                        >
                          <img
                            src="assets/img/service/service-details-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-xl-3 col-lg-3 wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".3s"
                    >
                      <div className="service-details__section-box">
                        <h4 className="section-title">PARALEGAL</h4>
                      </div>
                    </div>
                    <div
                      className="col-xl-9 col-lg-9 wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".5s"
                    >
                      <div className="service-details__right-text">
                        <p>
                          Creditors begin their recovery process when someone
                          misses an EMI, thus you will go through the following:
                        </p>
                        <div
                          className="slider-3__content-list wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay="1.1s"
                        >
                          <ul>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>Frequent phone calls</span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>
                                Unwanted visits to your home and workplace
                              </span>
                            </li>
                            <li>
                              <i className="fal fa-check-square" />
                              <span>Legal Notices</span>
                            </li>
                          </ul>
                          <p className="pt-20">
                            These actions are within the limits of the RBI
                            guidelines, but based on the experiences of our
                            customers, we have learned that the creditors
                            frequently go beyond the bounds of the law and begin
                            to use tactics like intimidation and harassment.
                          </p>
                          <p className="">
                            You can forward harassing phone calls to our
                            paralegal team, who will take them on your behalf,
                            if you frequently receive them. You can direct
                            creditors who visit your home or place of business
                            to our paralegals and Advocates, who will handle
                            them legally.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-3 wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".3s"
                    >
                      <div className="service-details__section-box">
                        <h4 className="section-title">LEGAL</h4>
                      </div>
                    </div>
                    <div
                      className="col-xl-9 col-lg-9 wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".5s"
                    >
                      <div className="service-details__right-text">
                        <div
                          className="slider-3__content-list wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay="1.1s"
                        >
                          <p className="pt-20">
                            Our team of attorneys can provide legal notices,
                            bank account closures for salaries, ECS halts, bank
                            account liens, arbitration hearing and order
                            preparation, bounced check resolution, and court
                            hearing advice.
                          </p>
                          <p className="">
                            If our debt plan is the best option, our insolvency
                            lawyers (IL) will set up and handle any unsecured
                            debts under it. A comprehensive "financial health
                            audit" of all the unsecured loan accounts is
                            conducted by the IL as part of the debt plan
                            supervision.
                          </p>
                          <p className="">
                            Our IL will consider asking for the wiping off of
                            the interest and charges if it is determined that
                            the creditors have not adhered to the RBI
                            requirements, there has been irresponsible lending,
                            or the interest has not been applied correctly.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <div className="col-xl-12 col-lg-12 mb-30">
                      <div className="it-custom-accordio">
                        <div className="accordion" id="accordionExample">
                          <div
                            className="accordion-items wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".7s"
                          >
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-buttons"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                <span>
                                  <i className="fal fa-check" />
                                </span>
                                Quality of an existing solution
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Business tailored it design help ambitious
                                businesses like yours generate team can help you
                                achieve your business goals. Whether you need to
                                craft an idea for a completely new product or
                                elevate the quality of an existing driving web
                                traffice management &amp; support
                                services.Business tailored it design help
                                ambitious businesses like yours generate team
                                can help you achieve your business goals.
                                Whether you need to craft an idea for a
                                completely new product or elevate the quality of
                                an existing driving web traffice management
                                &amp; support services.
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-items wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".9s"
                          >
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-buttons collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                <span>
                                  <i className="fal fa-check" />
                                </span>
                                Maecenas facilisis erat id odio
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Business tailored it design help ambitious
                                businesses like yours generate team can help you
                                achieve your business goals. Whether you need to
                                craft an idea for a completely new product or
                                elevate the quality of an existing driving web
                                traffice management &amp; support
                                services.Business tailored it design help
                                ambitious businesses like yours generate team
                                can help you achieve your business goals.
                                Whether you need to craft an idea for a
                                completely new product or elevate the quality of
                                an existing driving web traffice management
                                &amp; support services.
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-items wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay="1.1s"
                          >
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-buttons collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <span>
                                  <i className="fal fa-check" />
                                </span>
                                We’ll help you to create a product
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Business tailored it design help ambitious
                                businesses like yours generate team can help you
                                achieve your business goals. Whether you need to
                                craft an idea for a completely new product or
                                elevate the quality of an existing driving web
                                traffice management &amp; support
                                services.Business tailored it design help
                                ambitious businesses like yours generate team
                                can help you achieve your business goals.
                                Whether you need to craft an idea for a
                                completely new product or elevate the quality of
                                an existing driving web traffice management
                                &amp; support services.
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-items wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay="1.3s"
                          >
                            <h2 className="accordion-header" id="headingFour">
                              <button
                                className="accordion-buttons collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                <span>
                                  <i className="fal fa-check" />
                                </span>
                                Business facilisis erat id odio
                              </button>
                            </h2>
                            <div
                              id="collapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Business tailored it design help ambitious
                                businesses like yours generate team can help you
                                achieve your business goals. Whether you need to
                                craft an idea for a completely new product or
                                elevate the quality of an existing driving web
                                traffice management &amp; support
                                services.Business tailored it design help
                                ambitious businesses like yours generate team
                                can help you achieve your business goals.
                                Whether you need to craft an idea for a
                                completely new product or elevate the quality of
                                an existing driving web traffice management
                                &amp; support services.
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-items wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay="1.5s"
                          >
                            <h2 className="accordion-header" id="headingFive">
                              <button
                                className="accordion-buttons collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                              >
                                <span>
                                  <i className="fal fa-check" />
                                </span>
                                We best agency facilisis erat id odio
                              </button>
                            </h2>
                            <div
                              id="collapseFive"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFive"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Business tailored it design help ambitious
                                businesses like yours generate team can help you
                                achieve your business goals. Whether you need to
                                craft an idea for a completely new product or
                                elevate the quality of an existing driving web
                                traffice management &amp; support services.
                                Business tailored it design help ambitious
                                businesses like yours generate team can help you
                                achieve your business goals. Whether you need to
                                craft an idea for a completely new product or
                                elevate the quality of an existing driving web
                                traffice management &amp; support services.
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-items wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay="1.7s"
                          >
                            <h2 className="accordion-header" id="headingSix">
                              <button
                                className="accordion-buttons collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix"
                              >
                                <span>
                                  <i className="fal fa-check" />
                                </span>
                                This busines man facilisis erat id odio
                              </button>
                            </h2>
                            <div
                              id="collapseSix"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingSix"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Business tailored it design help ambitious
                                businesses like yours generate team can help you
                                achieve your business goals. Whether you need to
                                craft an idea for a completely new product or
                                elevate the quality of an existing driving web
                                traffice management &amp; support
                                services.Business tailored it design help
                                ambitious businesses like yours generate team
                                can help you achieve your business goals.
                                Whether you need to craft an idea for a
                                completely new product or elevate the quality of
                                an existing driving web traffice management
                                &amp; support services.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default DebtFree;
