import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/img/logo/logo.png";
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
      des
      coverPhoto {
        url
      }
      content {
        html
      }
    }
  }
`;

function Header() {
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
    <>
      <header>
        <div
          id="header-sticky"
          className="header__area header__transparent header__space header__plr"
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-7 col-md-6">
                <div className="header__logo">
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
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
                        <Link to="/about">About</Link>
                      </li>
                      <li className="has-dropdown">
                        <a href="service-details.html">Service's</a>
                        <ul className="submenu">
                          {posts &&
                            posts.map((s) => (
                              <li>
                                <Link to={`/service/${s.slug}`}>{s.title}</Link>
                              </li>
                            ))}
                          {/* <li>
                            <a href="service-1.html">Service 01</a>
                          </li>
                          <li>
                            <a href="service-2.html">Service 02</a>
                          </li>
                          <li>
                            <a href="service-3.html">Service 03</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li> */}
                        </ul>
                      </li>
                      <li>
                        <Link to="/blogs">Blog's</Link>
                      </li>

                      <li>
                        <Link to="/contact">Contact</Link>
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
                  <div className="header__menu-bar">
                    <button className="it-menu-bar">
                      <i className="far fa-bars" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="it-offcanvas-area">
        <div className="itoffcanvas">
          <div className="it-offcanva-bottom-shape d-none d-xxl-block">
            <img src="assets/img/offcanvas/offcanvas-shape-1.jpg" alt="" />
          </div>
          <div className="itoffcanvas__close-btn">
            <button className="close-btn">
              <i className="fal fa-times" />
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <a href="index.html">
              <img src="https://www.settleloans.in/images/logo.png" alt="" />
            </a>
          </div>
          <div className="itoffcanvas__text">
            <p>
              Suspendisse interdum consectetur libero id. Fermentum leo vel orci
              porta non. Euismod viverra nibh cras pulvinar suspen.
            </p>
          </div>
          <div className="mobile-menu mean-container" />
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-envelope" />
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="maito:hello@yourmail.com">
                  <span
                    className="__cf_email__"
                    data-cfemail="a9c1ccc5c5c6e9d0c6dcdbc4c8c0c587cac6c4"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt" />
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:(00)45611227890">(00) 456 1122 7890</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fas fa-map-marker-alt" />
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location</span>
                <a
                  href="htits://www.google.com/maps/@37.4801311,22.8928877,3z"
                  target="_blank"
                >
                  Riverside 255, San Francisco, USA
                </a>
              </div>
            </div>
          </div>
          <div className="itoffcanvas__social">
            <div className="social-icon">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fab fa-dribbble" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay" />
    </>
  );
}

export default Header;
