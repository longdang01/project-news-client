const Footer = () => {
  return (
    <>
      <footer className="pt-50 pb-20 bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="sidebar-widget wow fadeInUp animated mb-30 text-left">
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Về chúng tôi</h5>
                </div>
                <div className="textwidget leading-8">
                  <p>
                    Fragile News luôn cập nhật các tin tức, xu hướng thời trang,
                    localbrand Việt Nam
                  </p>
                  <p>
                    <strong className="color-black">Địa chỉ</strong>
                    <br />
                    Kim Giang
                    <br />
                    Đại Kim, Hoàng Mai, Hà Nội
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div
                className="sidebar-widget widget_categories wow fadeInUp animated mb text-left"
                data-wow-delay="0.1s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Liên kết</h5>
                </div>
                <ul className="font-small">
                  <li className="cat-item cat-item-2">
                    <a href="#">Về chúng tôi</a>
                  </li>
                  <li className="cat-item cat-item-4">
                    <a href="#">Giúp đỡ & Hỗ trợ</a>
                  </li>
                  {/* <li className="cat-item cat-item-5">
                    <a href="#">​​Licensing Policy</a>
                  </li>
                  <li className="cat-item cat-item-6">
                    <a href="#">Refund Policy</a>
                  </li> */}
                  {/* <li className="cat-item cat-item-7">
                    <a href="#">Hire me</a>
                  </li>
                  <li className="cat-item cat-item-7">
                    <a href="#">Contact</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="sidebar-widget widget_categories wow fadeInUp animated mb text-left"
                data-wow-delay="0.1s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Websites</h5>
                </div>
                <ul className="font-small">
                  <li className="cat-item cat-item-2">
                    <a href="#">Fragile Shop</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <div
                className="sidebar-widget widget_tagcloud wow fadeInUp animated mb text-left"
                data-wow-delay="0.2s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Websites</h5>
                </div>
                <div className="tagcloud mt-50">
                  <a className="tag-cloud-link" href="category.html">
                    Fragile Shop
                  </a>
                  <a className="tag-cloud-link" href="category.html">
                    New York
                  </a>
                  <a className="tag-cloud-link" href="category.html">
                    droll
                  </a>
                  <a className="tag-cloud-link" href="category.html">
                    intimate
                  </a>
                  <a className="tag-cloud-link" href="category.html">
                    loving
                  </a>
                  <a className="tag-cloud-link" href="category.html">
                    travel
                  </a>
                  <a className="tag-cloud-link" href="category.html">
                    fighting{" "}
                  </a>
                </div>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6">
              <div
                className="sidebar-widget widget_newsletter wow fadeInUp animated mb text-left"
                data-wow-delay="0.3s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Socials</h5>
                </div>
                <div className="newsletter">
                  <p className="font-medium">
                    {/* Follow to our and get our newest updates */}
                    Follow chúng tôi để cập nhật tin tức, xu hướng thời trang
                    mới nhất
                  </p>
                  <div>
                    {/* <strong className="color-black">Follow me</strong> */}
                    <br />
                    <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                      <li className="list-inline-item">
                        <a
                          className="fb"
                          href="#"
                          target="_blank"
                          title="Facebook"
                        >
                          <i className="elegant-icon social_facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="tw"
                          href="#"
                          target="_blank"
                          title="Tweet now"
                        >
                          <i className="elegant-icon social_twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        >
                          <i className="elegant-icon social_pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <form className="input-group form-subcriber mt-30 d-flex">
                    <input
                      type="email"
                      className="form-control bg-white font-small"
                      placeholder="Enter your email"
                    />
                    <button className="btn bg-primary text-white" type="submit">
                      Subscribe
                    </button>
                    <label className="mt-20">
                      {" "}
                      <input
                        className="mr-5"
                        name="name"
                        type="checkbox"
                        value="1"
                        required=""
                      />{" "}
                      I agree to the{" "}
                      <a href="#" target="_blank">
                        terms &amp; conditions
                      </a>{" "}
                    </label>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
            <p className="float-md-left font-small text-muted">
              © 2020, Stories - Personal Blog HTML Template{" "}
            </p>
            <p className="float-md-right font-small text-muted">
              Design by{" "}
              <a href="https://alithemes.com" target="_blank">
                AliThemes
              </a>{" "}
              | All rights reserved
            </p>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
