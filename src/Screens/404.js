import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function NotFound() {
  return (
    <>
      <Header />
      <div className="error__area pt-200 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="error__item text-center">
                <div
                  className="error__main-img pb-10 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <img
                    src="https://ordainit.com/Sorex/sorex/assets/img/error/error.jpg"
                    alt=""
                  />
                </div>
                <div
                  className="error__text wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <h4>Page not found</h4>
                  <span>
                    Sorry This Page Not found take a look at our most popular
                  </span>
                </div>
                <div
                  className="error__button wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <Link
                    className="yellow-btn tp-btn-hover alt-color-black"
                    to="/"
                  >
                    <span>GO TO HOME</span>
                    <b />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
