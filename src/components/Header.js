import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/img/logo/logo.png";
function Header() {
  return (
    <header>
      <div
        id="header-sticky"
        className="header__area header__transparent header__space header__plr"
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-7 col-md-6">
              <div className="header__logo">
                <a href="index.html">
                  <img
                    src="https://www.settleloans.in/images/logo.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 d-none d-lg-block">
              <div className="header__main-menu text-xxl-end text-center">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <a href="contact.html">About</a>
                    </li>
                    <li className="has-dropdown">
                      <a href="service-details.html">Service's</a>
                      <ul className="submenu">
                        <li>
                          <Link to="/debt-free-solutions">Service 01</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="has-dropdown">
                      <a href="blog-details.html">Blog's</a>
                      <ul className="submenu">
                        <li>
                          <a href="blog.html">Blog Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-5 col-md-6">
              <div className="header__action d-flex justify-content-end">
                <a
                  className="main-btn-sm d-none d-xl-block tp-btn-hover alt-color"
                  href="contact.html"
                >
                  <span>Get A Quote</span>
                  <b />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
