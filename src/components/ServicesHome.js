import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clf3jxqh547va01t7126u21j0/master"
);

const QUERY = gql`
  {
    services {
      title
      icon
      slug
      content {
        html
      }
    }
  }
`;

function ServicesHome() {
  const [posts, setPosts] = useState();
  const getPosts = async () => {
    const { services } = await graphcms.request(QUERY);
    console.log(services);
    setPosts(services);
  };
  useEffect(() => {
    if (!posts) {
      getPosts();
    }
  }, [posts]);
  return (
    <div className="service__area service__space service__mlr grey-bg pt-195 pb-70 p-relative">
      {posts &&
        posts.map((post) => {
          console.log(post);
        })}
      <div className="service__shape-1">
        <img src="assets/img/service/sv-shape-1.png" alt="" />
      </div>
      <div className="service__shape-2">
        <img src="assets/img/service/sv-shape-2.png" alt="" />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-xl-6 col-lg-6 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="service__section-box text-center pb-35">
              <h4 className="section-subtitle title-anim">Our Best Service</h4>
              <h3 className="section-title title-anim">
                We are trusted by more than 5000 clients.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="service__item service__border-1 p-relative fix">
              <div className="service__shape">
                <img
                  src="https://ordainit.com/Sorex/sorex/assets/img/service/sv-item-shape-1.png"
                  alt=""
                />
              </div>
              <div className="service__icon-wrapper pb-25 p-relative">
                <div className="service__icon-bg">
                  <img
                    src="https://ordainit.com/Sorex/sorex/assets/img/service/sv-icon-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="service__inner-icon">
                  <span>
                    <a href="#">
                      <i className="fal fa-smile-plus" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="service__content">
                <h4 className="service__title title-color-1">
                  <Link to="/debt-free-solutions">Debt Free Solutions </Link>
                </h4>
                <p>
                  Being debt free to start with means having minimal to no bad
                  debts and average good debts. Being debt free doesn't mean you
                  have no mortgage, bills, or car payment. It means you carry a
                  manageable amount of debt, and are cognizant of your borrowing
                  and DTI.
                </p>
              </div>
              <div className="service__link service__link-color-1">
                <Link to="/debt-free-solutions">
                  Read More
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="service__item service__border-2 p-relative fix">
              <div className="service__shape">
                <img
                  src="https://ordainit.com/Sorex/sorex/assets/img/service/sv-item-shape-2.png"
                  alt=""
                />
              </div>
              <div className="service__icon-wrapper pb-25 p-relative">
                <div className="service__icon-bg">
                  <img
                    src="https://ordainit.com/Sorex/sorex/assets/img/service/sv-icon-shape-2.png"
                    alt=""
                  />
                </div>
                <div className="service__inner-icon">
                  <span>
                    <a href="#">
                      <i className="fal fa-pray " />
                    </a>
                  </span>
                </div>
              </div>
              <div className="service__content">
                <h4 className="service__title title-color-2">
                  <a href="service-details.html">Stop Creditor Harassment </a>
                </h4>
                <p>
                  These actions are within the parameters of the RBI guidelines,
                  but based on the experiences of our customers, we have learned
                  that the creditors frequently go beyond the bounds of the law
                  and begin to use tactics like intimidation and harassment.
                </p>
              </div>
              <div className="service__link service__link-color-2">
                <a href="service-details.html">
                  Read More
                  <i className="fal fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".9s"
          >
            <div className="service__item service__border-3 p-relative fix">
              <div className="service__shape">
                <img
                  src="https://ordainit.com/Sorex/sorex/assets/img/service/sv-item-shape-3.png"
                  alt=""
                />
              </div>
              <div className="service__icon-wrapper pb-25 p-relative">
                <div className="service__icon-bg">
                  <img
                    src="https://ordainit.com/Sorex/sorex/assets/img/service/sv-icon-shape-3.png"
                    alt=""
                  />
                </div>
                <div className="service__inner-icon">
                  <span>
                    <a href="#">
                      <i className="fal fa-handshake" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="service__content">
                <h4 className="service__title title-color-3">
                  <a href="service-details.html">Settlements & Foreclosure </a>
                </h4>
                <p>
                  We can provide solutions if you are thinking about a
                  settlement because no two settlements are the same.
                  Settlements that best suit your situation can be negotiated by
                  us.
                </p>
              </div>
              <div className="service__link service__link-color-3">
                <a href="service-details.html">
                  Read More
                  <i className="fal fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay="1s"
          >
            <div className="service__item service__border-4 p-relative fix">
              <div className="service__shape">
                <img
                  src="https://ordainit.com/Sorex/sorex/assets/img/service/sv-item-shape-4.png"
                  alt=""
                />
              </div>
              <div className="service__icon-wrapper pb-25 p-relative">
                <div className="service__icon-bg">
                  <img
                    src="https://ordainit.com/Sorex/sorex/assets/img/service/sv-icon-shape-4.png"
                    alt=""
                  />
                </div>
                <div className="service__inner-icon">
                  <span>
                    <a href="#">
                      <i className="fal fa-lightbulb-on" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="service__content">
                <h4 className="service__title title-color-4">
                  <a href="service-details.html">Business Debt Solutions</a>
                </h4>
                <p>
                  Covid's effects and the shutdown have forced several firms to
                  deal with serious difficulties. Businesses that are operating
                  in survival mode, dealing with disruptions in cash flow, and
                  going bankrupt have increased significantly.
                </p>
              </div>
              <div className="service__link service__link-color-4">
                <a href="service-details.html">
                  Read More
                  <i className="fal fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay="1.2s"
          >
            <div className="service__item service__border-5 p-relative fix">
              <div className="service__shape">
                <img
                  src="https://ordainit.com/Sorex/sorex/assets/img/service/sv-item-shape-5.png"
                  alt=""
                />
              </div>
              <div className="service__icon-wrapper pb-25 p-relative">
                <div className="service__icon-bg">
                  <img
                    src="https://ordainit.com/Sorex/sorex/assets/img/service/sv-icon-shape-5.png"
                    alt=""
                  />
                </div>
                <div className="service__inner-icon">
                  <span>
                    <a href="#">
                      <i className="fal fa-balance-scale" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="service__content">
                <h4 className="service__title title-color-5">
                  <a href="service-details.html">Legal / Financial Advisory </a>
                </h4>
                <p>
                  Our attorneys and CIBIL lawyers can provide legal notices,
                  bank account closures for salaries, ECS halts, bank account
                  liens, arbitration hearing and order requests, returned
                  checks, and court appearances
                </p>
              </div>
              <div className="service__link service__link-color-5">
                <a href="service-details.html">
                  Read More
                  <i className="fal fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay="1.3s"
          >
            <div className="service__item service__border-6 p-relative fix">
              <div className="service__shape">
                <img
                  src="https://ordainit.com/Sorex/sorex/assets/img/service/sv-item-shape-6.png"
                  alt=""
                />
              </div>
              <div className="service__icon-wrapper pb-25 p-relative">
                <div className="service__icon-bg">
                  <img
                    src="https://ordainit.com/Sorex/sorex/assets/img/service/sv-icon-shape-6.png"
                    alt=""
                  />
                </div>
                <div className="service__inner-icon">
                  <span>
                    <a href="#">
                      <i className="fal fa-landmark" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="service__content">
                <h4 className="service__title title-color-6">
                  <a href="service-details.html">CIBIL Building Programme</a>
                </h4>
                <p>
                  CIBIL score or credit score is an important factor in your
                  life therefore we help you to rebuild your cibil with time so
                  that in future you dont face any problems
                </p>
              </div>
              <div className="service__link service__link-color-6">
                <Link to="service-details.html">
                  Read More
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesHome;
