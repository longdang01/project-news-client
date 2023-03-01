// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

const Slider = (props) => {
  const { slides } = props;

  return (
    <>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.picture} alt="" />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <div
        style={{
          backgroundImage:
            "url(http://res.cloudinary.com/dgdhbwcga/image/upload/v1677123447/zeus/zdrtjwrec7ysmiasjncc.jpg)",
        }}
      ></div>
      <div className="container pt-30">
        <div className="featured-slider-3 position-relative">
          <div className="slider-3-arrow-cover"></div>
          <div className="featured-slider-3-items">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              loop="true"
              // navigation
              pagination={{ clickable: true }}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="slider-single overflow-hidden border-radius-10">
                    <div className="post-thumb position-relative">
                      <div
                        className="thumb-overlay position-relative"
                        style={{
                          backgroundImage: "url(" + slide.picture + ")",
                        }}
                      >
                        <div className="post-content-overlay">
                          <div className="container">
                            <div className="entry-meta meta-0 font-small mb-20">
                              {/* <a href="category.html">
                                <span className="post-cat text-info text-uppercase">
                                  Fragile News
                                </span>
                              </a> */}
                              {/* <a href="category.html">
                                  <span className="post-cat text-warning text-uppercase">
                                    Destinations
                                  </span>
                                </a> */}
                            </div>
                            <h1 className="post-title mb-20 font-weight-900 text-white">
                              {/* {slide.slideName} */}
                              {/* <a className="text-white" href="single.html">
                                  Abstract Australia from Above
                                </a> */}
                            </h1>
                            <div
                              className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5"
                              dangerouslySetInnerHTML={{
                                __html: slide.description,
                              }}
                            >
                              {/* <p>{slide.description}</p> */}
                              {/* <span className="post-on">
                                  15 September 2020
                                </span>
                                <span className="hit-count has-dot">
                                  23k Views
                                </span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* <SwiperSlide>
                  <div className="slider-single overflow-hidden border-radius-10">
                    <div className="post-thumb position-relative">
                      <div
                        className="thumb-overlay position-relative"
                        style={{
                          backgroundImage:
                            "url(template/assets/imgs/news/news-18.jpg)",
                        }}
                      >
                        <div className="post-content-overlay">
                          <div className="container">
                            <div className="entry-meta meta-0 font-small mb-20">
                              <a href="category.html">
                                <span className="post-cat text-warning text-uppercase">
                                  Travel Tips
                                </span>
                              </a>
                            </div>
                            <h1 className="post-title mb-20 font-weight-900 text-white">
                              <a className="text-white" href="single.html">
                                Tips for Scuba Diving the Great Barrier Reef
                              </a>
                            </h1>
                            <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                              <span className="post-on">15 September 2020</span>
                              <span className="hit-count has-dot">
                                17k Views
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-single overflow-hidden border-radius-10">
                    <div className="post-thumb position-relative">
                      <div
                        className="thumb-overlay position-relative"
                        style={{
                          backgroundImage:
                            "url(template/assets/imgs/news/news-19.jpg)",
                        }}
                      >
                        <div className="post-content-overlay">
                          <div className="container">
                            <div className="entry-meta meta-0 font-small mb-20">
                              <a href="category.html">
                                <span className="post-cat text-info text-uppercase">
                                  Hotel
                                </span>
                              </a>
                              <a href="category.html">
                                <span className="post-cat text-warning text-uppercase">
                                  Healthy
                                </span>
                              </a>
                            </div>
                            <h1 className="post-title mb-20 font-weight-900 text-white">
                              <a className="text-white" href="single.html">
                                Staying at the Hilton Seychelles Northolme
                                Resort & Spa
                              </a>
                            </h1>
                            <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                              <span className="post-on">22 September 2020</span>
                              <span className="hit-count has-dot">
                                16k Views
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
