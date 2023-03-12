import { RichText } from "@graphcms/rich-text-react-renderer";
import { gql, GraphQLClient } from "graphql-request";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import PELoader from "../Utils/PELoader";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clf3jxqh547va01t7126u21j0/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      coverPhoto {
        id
        url
      }
      content {
        raw
      }
    }
  }
`;

function BlogSlug() {
  const { slug } = useParams();
  const [postData, setPostData] = useState();
  const variables = {
    slug: slug,
  };
  useEffect(() => {
    const getService = async () => {
      const data = await graphcms.request(QUERY, variables);
      setPostData(data);
    };
    getService();
  }, [slug]);

  useEffect(() => {
    console.log(postData);
  }, [postData, slug]);
  return (
    <>
      <Header />
      {postData ? (
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <div className="postbox__area pt-200 pb-100">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <div className="postbox__details-wrapper pr-20">
                        <article>
                          <div
                            className="postbox__thumb w-img wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".3s"
                          >
                            <a href="blog-details.html">
                              <img
                                src={
                                  postData.post.coverPhoto
                                    ? postData.post.coverPhoto.url
                                    : "something"
                                }
                                alt=""
                              />
                            </a>
                          </div>
                          <div
                            className="postbox__details-title-box pb-30 wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".5s"
                          >
                            <h4 className="postbox__details-title">
                              {postData.post.title}
                            </h4>
                            <p>
                              While you want your sales team to be spending most
                              of their time prospecting and selling, making sure
                              they have the time and space to keep the CRM up to
                              date is critical. Remember to factor in time for
                              these tasks when setting goals and benchmarks for
                              them. Provide sales support where you can to
                              ensure your sales team is spending.
                            </p>
                          </div>
                          {postData.post.content && (
                            <RichText
                              content={postData.post.content.raw.children}
                              renderers={{
                                h1: ({ children }) => (
                                  <h1 className="text-stone-700">{children}</h1>
                                ),
                                bold: ({ children }) => (
                                  <strong>{children}</strong>
                                ),
                              }}
                            />
                          )}
                          <div
                            className="postbox__details-img-box d-flex wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".7s"
                          >
                            <span className="text-center img-mr">
                              <img
                                src="assets/img/blog/blog-details-2.jpg"
                                alt=""
                              />
                            </span>
                            <span className="text-center">
                              <img
                                src="assets/img/blog/blog-details-3.jpg"
                                alt=""
                              />
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <>
          <PELoader />
        </>
      )}
    </>
  );
}

export default BlogSlug;
