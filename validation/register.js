const Validator = require("validator");
const isEmpty = require("./is_Empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //Order should be mantained, required should be in the last so that check later

  if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = "name must be between 2 to 40";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email feild is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be atleast 6 characters";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password must match";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password feild is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password feild is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
