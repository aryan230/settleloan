import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { GraphQLClient, gql } from "graphql-request";
import { Link } from "react-router-dom";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clf3jxqh547va01t7126u21j0/master"
);

const QUERY = gql`
  {
    posts {
      title
      slug
      date
      coverPhoto {
        url
      }
      content {
        html
      }
    }
  }
`;
function Blogs() {
  const [posts, setPosts] = useState();
  const getPosts = async () => {
    const { posts } = await graphcms.request(QUERY);
    console.log(posts);
    setPosts(posts);
  };
  useEffect(() => {
    if (!posts) {
      getPosts();
    }
  }, [posts]);
  return (
    <>
      <Header />
      <div className="postbox__area pb-100 pt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div id="blog" className="postbox__wrapper pr-20">
                {posts &&
                  posts.map((p) => (
                    <article className="postbox__item format-image mb-50 transition-3">
                      <div
                        className="postbox__thumb w-img wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".3s"
                      >
                        <Link to={`/blog/${p.slug}`}>
                          <img
                            src={p.coverPhoto ? p.coverPhoto.url : "something"}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div
                        className="postbox__content wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".5s"
                      >
                        <div className="postbox__meta">
                          <span>
                            <a href="#">{p.date}</a>
                          </span>
                        </div>
                        <h3 className="postbox__title">
                          <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                        </h3>
                        <div className="postbox__text">
                          <p>
                            There are many variations of passages agency we have
                            covered many special events such as fireworks,
                            fairs, parades, races, walks, a Lorem Ipsum Fasts
                            injecte.
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <div
                  className="sidebar__widget mb-40 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Search</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                      <form action="#">
                        <div className="sidebar__search-input-2">
                          <input
                            type="text"
                            placeholder="Search your keyword..."
                          />
                          <button type="submit">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.01371 15.2219C11.9525 15.2219 15.1456 12.0382 15.1456 8.11096C15.1456 4.18368 11.9525 1 8.01371 1C4.07488 1 0.881836 4.18368 0.881836 8.11096C0.881836 12.0382 4.07488 15.2219 8.01371 15.2219Z"
                                stroke="#5F6168"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.9287 16.9996L13.0508 13.1331"
                                stroke="#5F6168"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="sidebar__widget mb-40 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Recent Post</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post rc__post">
                      {posts &&
                        posts.map((p) => (
                          <div className="rc__post mb-20 d-flex">
                            <div className="rc__post-thumb mr-20">
                              <Link to={`/blog/${p.slug}`}>
                                <img
                                  src={
                                    p.coverPhoto ? p.coverPhoto.url : "no Image"
                                  }
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="rc__post-content">
                              <h3 className="rc__post-title">
                                <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                              </h3>
                              <div className="rc__meta">
                                <span>{p.date}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
