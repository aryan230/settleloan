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
  const [sideBar, setSidebar] = useState(false);
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
  const changeSideBar = (e) => {
    e.preventDefault();
    if (!sideBar) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  };
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
                        <Link to="/">Service's</Link>
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
                    className="header__get__whatsapp"
                    href="https://wa.me/919821219819?text="
                    target="_blank"
                  >
                    <svg
                      fill="#ffffff"
                      className="mx-2"
                      height="20px"
                      width="20px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 308 308"
                      xmlSpace="preserve"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="XMLID_468_">
                          {" "}
                          <path
                            id="XMLID_469_"
                            d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                          />{" "}
                          <path
                            id="XMLID_470_"
                            d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                          />{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <span>Message Us</span>
                    <b />
                  </a>
                  <div className="header__menu-bar">
                    <button className="it-menu-bar" onClick={changeSideBar}>
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
        <div className={sideBar ? `itoffcanvas opened` : `itoffcanvas`}>
          <div className="it-offcanva-bottom-shape d-none d-xxl-block">
            <img src="assets/img/offcanvas/offcanvas-shape-1.jpg" alt="" />
          </div>
          <div className="itoffcanvas__close-btn">
            <button className="close-btn" onClick={changeSideBar}>
              <i className="fal fa-times" />
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <a href="index.html">
              <img src="https://i.ibb.co/p2pWRRM/logo.png" alt="" />
            </a>
          </div>
          <div className="itoffcanvas__text">
            <p>
              Settle Loans swiftly stops bank harassment and initiates legal
              proceedings within 24 hours.
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
                    info@settleloans.in
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
                <a href="tel:+919821219819">+919821219819</a>
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
                  PAN India
                </a>
              </div>
            </div>
          </div>
          <div className="itoffcanvas__social">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/settleloans/">
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://instagram.com/settleloans?igshid=YmMyMTA2M2Y=">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100089458940627&mibextid=LQQJ4d">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="https://www.youtube.com/@settleloans/">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={sideBar ? `body-overlay apply` : `body-overlay`} />
    </>
  );
}

export default Header;
