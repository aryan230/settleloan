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

function ServicesGraph() {
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
      {/* <div className="service__shape-1">
        <img src="assets/img/service/sv-shape-1.png" alt="" />
      </div>
      <div className="service__shape-2">
        <img src="assets/img/service/sv-shape-2.png" alt="" />
      </div> */}
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
          {posts &&
            posts.map((post) => (
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
                          <i className={`fal ${post.icon}`} />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="service__content">
                    <h4 className="service__title title-color-1">
                      <Link to="/debt-free-solutions">{post.title}</Link>
                    </h4>
                    <p>{post.des}</p>
                  </div>
                  <div className="service__link service__link-color-1">
                    <Link to={`/service/${post.slug}`}>
                      Read More
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>{" "}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesGraph;
