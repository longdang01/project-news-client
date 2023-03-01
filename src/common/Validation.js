import Joi from "joi";

const registerModalValidator = (data) => {
  const schema = Joi.object().keys({
    customerName: Joi.string().required(),
    phone: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
      .messages({
        "string.pattern.base": "Số điện thoại là các ký tự số",
        "string.length": "Số điện thoại có 10 ký tự",
      }),
    username: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .messages({
        "string.email": "Email không hợp lệ",
      }),
    password: Joi.string().min(3).max(15).required().messages({
      "string.min": "Mật khẩu ít nhất 3 ký tự",
      "string.max": "Mật khẩu nhiều nhất 15 ký tự",
    }),
    password_confirmation: Joi.string()
      .equal(Joi.ref("password")) // not empty because this line
      .label("password_confirmation")
      .messages({ "any.only": "Nhập lại mật khẩu chưa chính xác" })
      .required(),
  });

  return schema
    .messages({
      //   "string.base": `"a" should be a type of 'text'`,
      //   "string.min": `"a" should have a minimum length of {#limit}`,
      "string.empty": `Không được để trống`,
      "any.required": `Bắt buộc phải nhập`,
    })
    .validate(data, { abortEarly: false, allowUnknown: true });
};

const loginModalValidator = (data) => {
  const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().min(3).max(15).required().messages({
      "string.min": "Mật khẩu ít nhất 3 ký tự",
      "string.max": "Mật khẩu nhiều nhất 15 ký tự",
    }),
  });

  return schema
    .messages({
      //   "string.base": `"a" should be a type of 'text'`,
      //   "string.min": `"a" should have a minimum length of {#limit}`,
      "string.empty": `Không được để trống`,
      "any.required": `Bắt buộc phải nhập`,
    })
    .validate(data, { abortEarly: false, allowUnknown: true });
};

export { registerModalValidator, loginModalValidator };
