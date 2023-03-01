import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import SearchForm from "../shared/SearchForm";
import Footer from "../shared/Footer";
import SideBottom from "../shared/SideBottom";
import SideBar from "../shared/SideBar";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  return (
    <>
      <div className="scroll-progress primary-bg"></div>
      {/* Preloader */}

      {/* Sidebar */}
      {/* <SideBar /> */}
      {/* <!-- Start Header --> */}
      <Header />
      {/* <!--Start search form--> */}
      <SearchForm />

      {/* <!-- Start Main content --> */}
      <main className="bg-grey pb-30">
        <Outlet />
      </main>
      {/* <!-- End Main content --> */}

      {/* <!--site-bottom--> */}
      {/* <SideBottom /> */}

      {/* <!--end site-bottom--> */}
      {/* <!-- Footer Start--> */}
      <Footer />

      {/* <!-- End Footer --> */}
      <div className="dark-mark"></div>
      <ScrollToTop smooth className="scrollUp" color="white" width="15" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Layout;
