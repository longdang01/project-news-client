import { Link, NavLink, useLocation } from "react-router-dom";
import * as moment from "moment";
import { PAGE_SIZE } from "../../../common/Variable";
import Pagination from "../../../utils/pagination/Pagination";
import { useEffect, useMemo, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FacebookShareButton, FacebookIcon } from "react-share";

const PostList = (props) => {
  const { posts, searchData, category, subCategory } = props;
  const location = useLocation();
  const PageSize = PAGE_SIZE;
  const [currentPage, setCurrentPage] = useState(1);

  const data = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return posts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, posts]);

  return (
    <>
      {}
      <HelmetProvider>
        <Helmet>
          <meta charset="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <title>Fragile - Blog, News and Magazine</title>
        </Helmet>
      </HelmetProvider>
      {
        data.length > 0 && (
          <div>
            <div className="archive-header pt-50 text-center">
              <div className="container text-left">
                {!searchData ? (
                  <>
                    <h3 className="font-weight-900 mb-[30px]">
                      {subCategory._id
                        ? subCategory.subCategoryName
                        : category.categoryName}
                    </h3>
                    <div className="breadcrumb">
                      <Link to="/">Trang chủ</Link>
                      <span></span>

                      {subCategory.category ? (
                        <NavLink to={"/c/" + subCategory.category.path}>
                          {subCategory.category.categoryName}
                        </NavLink>
                      ) : (
                        <a>{category.categoryName}</a>
                      )}

                      {subCategory && (
                        <>
                          <span></span>
                          <a>{subCategory.subCategoryName}</a>
                        </>
                      )}
                    </div>
                    <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                  </>
                ) : (
                  <h3 className="font-weight-900 mb-[60px]">
                    Tìm kiếm: {searchData}
                  </h3>
                )}
              </div>
            </div>
            <div className="container">
              <div className="loop-list loop-list-style-1">
                <div className="row">
                  {data.length > 0 &&
                    data.map((post, index) => (
                      <article
                        key={index}
                        className="col-md-3 mb-40 wow fadeInUp   animated"
                        style={{
                          visibility: " visible",
                          Animation: "fadeInUp",
                        }}
                      >
                        <div className="post-card-1 border-radius-10 hover-up">
                          <div
                            className="post-thumb thumb-overlay img-hover-slide position-relative"
                            style={{
                              backgroundImage: "url(" + post.thumbnail + ")",
                            }}
                          >
                            <Link
                              className="img-link"
                              to={"/" + post.path}
                            ></Link>
                            <ul className="social-share">
                              {/* <li>
                                <a href="#">
                                  <i className="elegant-icon social_share"></i>
                                </a>
                              </li>
                              <FacebookShareButton
                                url={
                                  "https://www.npmjs.com/package/react-share"
                                } //eg. https://www.example.com
                                // quotes={quotes} //"Your Quotes"
                                // hashtag={hashtag} // #hashTag
                              >
                                <FacebookIcon />
                              </FacebookShareButton> */}
                              {/* <li>
                                <a
                                  className="fb"
                                  href="#"
                                  title="Share on Facebook"
                                  target="_blank"
                                >
                                  <i className="elegant-icon social_facebook"></i>
                                </a>
                              </li> */}
                              {/* <li>
                                <a
                                  className="tw"
                                  href="#"
                                  target="_blank"
                                  title="Tweet now"
                                >
                                  <i className="elegant-icon social_twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="pt"
                                  href="#"
                                  target="_blank"
                                  title="Pin it"
                                >
                                  <i className="elegant-icon social_pinterest"></i>
                                </a>
                              </li> */}
                            </ul>
                          </div>
                          <div className="post-content p-30">
                            <div className="entry-meta meta-0 font-small mb-10">
                              <a href={undefined}>
                                <span className="post-cat">
                                  {post.subCategory.category &&
                                    post.subCategory.category.categoryName}
                                </span>
                              </a>
                              <a href={undefined}>
                                <span className="post-cat">
                                  {post.subCategory.subCategoryName}
                                </span>
                              </a>
                            </div>
                            <div className="d-flex post-card-content">
                              <h5 className="post-title mb-20 font-weight-900">
                                <Link to={"/" + post.path}>{post.title}</Link>
                              </h5>
                              <div className="post-excerpt mb-25 font-small text-muted">
                                <p
                                  className="cut-text"
                                  dangerouslySetInnerHTML={{
                                    __html: post.content,
                                  }}
                                >
                                  {/* {post.content} */}
                                  {/* Graduating from a top accelerator or incubator can
                              be as career-defining for a&nbsp;startup
                              founder&nbsp;as an elite university diploma. The
                              intensive programmes, which… */}
                                </p>
                              </div>
                              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                <span className="post-on">
                                  {moment(post.published).format("DD/MM/YYYY")}
                                </span>
                                {/* <span className="time-reading has-dot">
                                12 mins read
                              </span>
                              <span className="post-by has-dot">23k views</span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            </div>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={props.posts.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        )
        //  : (
        //   <div className="p-8">Không có bài viết</div>
        // )
      }
    </>
  );
};

export default PostList;
