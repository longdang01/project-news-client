import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CategoryService from "../../services/category.service";

const Header = () => {
  const customer = JSON.parse(localStorage.getItem("customer"));
  const token = localStorage.getItem("id_token");
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [searchData, setSearchData] = useState("");

  const logOut = () => {
    localStorage.removeItem("id_token");
    localStorage.removeItem("customer");
    navigate("/login");
  };

  const getCategories = () => {
    CategoryService.search({ searchData: searchData })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategories();
  }, [searchData]);

  //Header sticky
  const handleHeaderSticky = () => {
    var scroll = window.scrollY;
    const headerSticky = document.querySelector(".header-sticky");
    if (scroll < 245) {
      headerSticky.classList.remove("sticky-bar");
    } else {
      headerSticky.classList.add("sticky-bar");
    }

    const scrollPercent =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    document.querySelector(".scroll-progress").style.width =
      scrollPercent + "%";
  };

  const handleOpenSearch = () => {
    document.body.classList.toggle("open-search-form");
    document.getElementById("searchTerm").focus();
    document.getElementById("searchTerm").value = "";
    // document.querySelector(".mega-menu-item").classList.remove("open");
    // document.querySelector("html, body").animate({ scrollTop: 0 }, "slow");
    // document.querySelector(".search-close").addEventListener("click", () => {
    //   document.body.classList.remove("open-search-form");
    // });
  };

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", handleHeaderSticky);
    return () => {
      window.removeEventListener("scroll", handleHeaderSticky);
    };
  });

  return (
    <>
      <header className="main-header header-style-1 font-heading">
        <div className="header-top">
          <div className="container">
            <div className="row pt-20 pb-20">
              <div className="col-md-3 col-xs-6">
                <Link to="/">
                  <img
                    style={{ height: "40px", objectFit: "cover" }}
                    className="logo"
                    src="/template/assets/imgs/theme/logo1.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="col-md-9 col-xs-6 text-right header-top-right ">
                {/* <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span> */}
                <button
                  className="search-icon d-none d-md-inline"
                  onClick={handleOpenSearch}
                >
                  <span className="mr-15 text-muted font-small">
                    <i className="elegant-icon icon_search mr-5"></i>Tìm kiếm
                  </span>
                </button>
                <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span>

                {customer && token ? (
                  <ul className="account__list list-inline nav-topbar d-none d-md-inline">
                    <li className="list-inline-item menu-item-has-children">
                      <a href="#">{customer.customerName}</a>
                      <ul className="sub-menu font-small">
                        <li className="">
                          <a href="#" onClick={logOut}>
                            Đăng xuất
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                ) : (
                  <div>
                    <Link
                      to="/login"
                      className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                    >
                      Đăng Nhập
                    </Link>
                    <Link
                      to="/register"
                      className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                    >
                      Đăng Ký
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="header-sticky">
          <div className="container align-self-center position-relative">
            <div className="mobile_menu d-lg-none d-block"></div>
            <div className="main-nav d-none d-lg-block float-left">
              <nav>
                {/* <!--Desktop menu--> */}
                <ul className="main-menu d-none d-lg-inline font-small">
                  <li className="">
                    <Link to="/">
                      {" "}
                      <i className="elegant-icon icon_house_alt mr-5"></i> Trang
                      chủ
                    </Link>
                  </li>
                  {categories.length > 0 &&
                    categories.map((category, index) => (
                      <li
                        key={index}
                        className={
                          category.subCategories.length > 0
                            ? "menu-item-has-children"
                            : ""
                        }
                      >
                        <NavLink to={"/c/" + category.path}>
                          {" "}
                          {/* <i className="elegant-icon icon_house_alt mr-5"></i>{" "} */}
                          {category.categoryName}
                        </NavLink>
                        {category.subCategories.length > 0 && (
                          <ul className="sub-menu text-muted font-small">
                            {category.subCategories.map(
                              (subCategory, index) => (
                                <li key={index}>
                                  <NavLink
                                    to={
                                      "/s/" +
                                      category.path +
                                      "/" +
                                      subCategory.path
                                    }
                                  >
                                    {subCategory.subCategoryName}
                                  </NavLink>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
                {/* <!--Mobile menu--> */}
                {/* <ul id="mobile-menu" className="d-block d-lg-none text-muted">
                  <li className="menu-item-has-children">
                    <a href="index.html">Home</a>
                    <ul className="sub-menu text-muted font-small">
                      <li>
                        <a href="index.html">Home default</a>
                      </li>
                      <li>
                        <a href="home-2.html">Homepage 2</a>
                      </li>
                      <li>
                        <a href="home-3.html">Homepage 3</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul className="sub-menu font-small">
                      <li>
                        <a href="page-about.html">About</a>
                      </li>
                      <li>
                        <a href="page-contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="page-typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="page-register.html">Register</a>
                      </li>
                      <li>
                        <a href="page-login.html">Login</a>
                      </li>
                      <li>
                        <a href="page-search.html">Search</a>
                      </li>
                      <li>
                        <a href="page-author.html">Author</a>
                      </li>
                      <li>
                        <a href="page-404.html">404 page</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Category</a>
                    <ul className="sub-menu font-small">
                      <li>
                        <a href="category-list.html">List layout</a>
                      </li>
                      <li>
                        <a href="category-grid.html">Grid layout</a>
                      </li>
                      <li>
                        <a href="category-masonry.html">Masonry layout</a>
                      </li>
                      <li>
                        <a href="category-big.html">Big layout</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Single post</a>
                    <ul className="sub-menu font-small">
                      <li>
                        <a href="single.html">Default</a>
                      </li>
                      <li>
                        <a href="single-2.html">Big image</a>
                      </li>
                      <li>
                        <a href="single-3.html">Left image</a>
                      </li>
                      <li>
                        <a href="single-4.html">With sidebar</a>
                      </li>
                    </ul>
                  </li>
                </ul> */}
              </nav>
            </div>
            <div className="float-right header-tools text-muted font-small">
              <ul className="header-social-network d-inline-block list-inline mr-15">
                <li className="list-inline-item">
                  <a
                    className="social-icon fb text-xs-center"
                    target="_blank"
                    href="#"
                  >
                    <i className="elegant-icon social_facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="social-icon tw text-xs-center"
                    target="_blank"
                    href="#"
                  >
                    <i className="elegant-icon social_twitter "></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="social-icon pt text-xs-center"
                    target="_blank"
                    href="#"
                  >
                    <i className="elegant-icon social_pinterest "></i>
                  </a>
                </li>
              </ul>
              {/* <div className="off-canvas-toggle-cover d-inline-block">
                <div
                  className="off-canvas-toggle hidden d-inline-block"
                  id="off-canvas-toggle"
                >
                  <span></span>
                </div>
              </div> */}
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
