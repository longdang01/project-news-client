import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/user.service";
import { getErrors, showError, catchErrors } from "../../common/Error";
import { registerModalValidator } from "../../common/Validation";
import { toast } from "react-toastify";
import { configToast } from "../../config/ConfigUI";

const Register = () => {
  const navigate = useNavigate();
  const initData = {
    username: "",
    password: "",
    password_confirmation: "",
    email: "",
    customerName: "",
    phone: "",
    role: 2,
  };

  const [user, setUser] = useState(initData);
  const [isLoading, setIsLoading] = useState(false);
  // validate
  let [errors, setErrors] = useState([]);
  const [labelInputs, setLabelInputs] = useState([]);

  const handleInput = (e, label) => {
    const { name, value } = e.target;

    const state = { [name]: value };

    setLabelInputs([name]);
    setUser({ ...user, ...state });
  };

  const register = () => {
    const validate = registerModalValidator(user);

    if (validate.error) {
      const errors = getErrors(validate);
      setErrors(errors);
      setIsLoading(false);
    }

    if (!validate.error) {
      setIsLoading(true);
      UserService.register(user)
        .then((res) => {
          setIsLoading(false);
          toast.success("Đăng ký tải khoản thành công!", configToast);
          navigate("/login");
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error("Đăng ký tải khoản thất bại!", configToast);
        });
    }
  };

  // catch error when change input
  useEffect(() => {
    const validate = registerModalValidator(user);
    setErrors(catchErrors(labelInputs, validate, errors));
  }, [user]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-md-10">
            <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
              <div className="padding_eight_all bg-white">
                <div className="heading_s1 text-center">
                  <h3 className="mb-30 font-weight-900 text-[1.75rem]">
                    Tạo tài khoản
                  </h3>
                </div>
                <div>
                  <div className="form-group text-left">
                    <input
                      type="text"
                      required=""
                      // className="form-control"
                      className={
                        "form-control shadow-lg " +
                        (showError(errors, "customerName")
                          ? "border-[#FF0000] focusError"
                          : "border-[#cccccc]")
                      }
                      name="customerName"
                      placeholder="Họ và tên"
                      value={user.customerName}
                      onChange={handleInput}
                    />
                    <small className="text-red-600">
                      {showError(errors, "customerName") &&
                        showError(errors, "customerName").messages.map(
                          (message, index) => (
                            <div key={index}>&bull; {message}</div>
                          )
                        )}
                    </small>
                  </div>
                  <div className="form-group text-left">
                    <input
                      type="text"
                      required=""
                      // className="form-control"
                      className={
                        "form-control shadow-lg " +
                        (showError(errors, "phone")
                          ? "border-[#FF0000] focusError"
                          : "border-[#cccccc]")
                      }
                      name="phone"
                      placeholder="Số điện thoại"
                      value={user.phone}
                      onChange={handleInput}
                    />
                    <small className="text-red-600">
                      {showError(errors, "phone") &&
                        showError(errors, "phone").messages.map(
                          (message, index) => (
                            <div key={index}>&bull; {message}</div>
                          )
                        )}
                    </small>
                  </div>
                  <div className="form-group text-left">
                    <input
                      type="text"
                      required=""
                      // className="form-control"
                      className={
                        "form-control shadow-lg " +
                        (showError(errors, "username")
                          ? "border-[#FF0000] focusError"
                          : "border-[#cccccc]")
                      }
                      name="username"
                      placeholder="Username"
                      value={user.username}
                      onChange={handleInput}
                    />
                    <small className="text-red-600">
                      {showError(errors, "username") &&
                        showError(errors, "username").messages.map(
                          (message, index) => (
                            <div key={index}>&bull; {message}</div>
                          )
                        )}
                    </small>
                  </div>
                  <div className="form-group text-left">
                    <input
                      type="email"
                      required=""
                      // className="form-control"
                      className={
                        "form-control shadow-lg " +
                        (showError(errors, "email")
                          ? "border-[#FF0000] focusError"
                          : "border-[#cccccc]")
                      }
                      name="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={handleInput}
                    />
                    <small className="text-red-600">
                      {showError(errors, "email") &&
                        showError(errors, "email").messages.map(
                          (message, index) => (
                            <div key={index}>&bull; {message}</div>
                          )
                        )}
                    </small>
                  </div>
                  <div className="form-group text-left">
                    <input
                      type="password"
                      required=""
                      // className="form-control"
                      className={
                        "form-control shadow-lg " +
                        (showError(errors, "password")
                          ? "border-[#FF0000] focusError"
                          : "border-[#cccccc]")
                      }
                      name="password"
                      placeholder="Mật khẩu"
                      value={user.password}
                      onChange={handleInput}
                    />
                    <small className="text-red-600">
                      {showError(errors, "password") &&
                        showError(errors, "password").messages.map(
                          (message, index) => (
                            <div key={index}>&bull; {message}</div>
                          )
                        )}
                    </small>
                  </div>
                  <div className="form-group text-left">
                    <input
                      type="password"
                      required=""
                      // className="form-control"
                      className={
                        "form-control shadow-lg " +
                        (showError(errors, "password_confirmation")
                          ? "border-[#FF0000] focusError"
                          : "border-[#cccccc]")
                      }
                      name="password_confirmation"
                      placeholder="Nhập lại mật khẩu"
                      value={user.password_confirmation}
                      onChange={handleInput}
                    />
                    <small className="text-red-600">
                      {showError(errors, "password_confirmation") &&
                        showError(errors, "password_confirmation").messages.map(
                          (message, index) => (
                            <div key={index}>&bull; {message}</div>
                          )
                        )}
                    </small>
                  </div>
                  {/* <div className="login_footer form-group">
                    <div className="chek-form">
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox1"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox1"
                        >
                          <span>I agree to terms &amp; Policy.</span>
                        </label>
                      </div>
                    </div>
                    <a className="text-muted" href="#">
                      Lean more
                    </a>
                  </div> */}
                  <div className="form-group">
                    {/* <button
                      type="submit"
                      className="button button-contactForm btn-block bg-[#5869da]"
                    >
                      Đăng ký
                    </button> */}
                    <button
                      onClick={register}
                      // className="button btn btn-primary ml-3"
                      className={
                        isLoading
                          ? "button button-contactForm btn-block bg-[#5869da] button__loading loading capitalize"
                          : "button button-contactForm btn-block bg-[#5869da] button__loading capitalize"
                      }
                      disabled={isLoading}
                    >
                      Đăng ký
                    </button>
                  </div>
                </div>
                {/* <div className="divider-text-center mt-15 mb-15">
                  <span> or</span>
                </div>
                <ul className="btn-login list_none text-center mb-15">
                  <li>
                    <a href="#" className="btn btn-facebook">
                      <i className="elegant-icon social_facebook  mr-5"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-google">
                      <i className="elegant-icon social_googleplus mr-5"></i>
                      Google
                    </a>
                  </li>
                </ul> */}
                <div className="text-muted text-center">
                  Bạn đã có tài khoản? <Link to="/login">Đăng Nhập</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
