import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
//import { text } from "body-parser";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  handle,
  info,
  type,
  onChange,
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          //checking for validation
          "is-invalid": error,
        })}
        placeholder={placeholder}
        handle={handle} //extra
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handle: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
};
TextFieldGroup.defaultProps = {
  type: "text",
};

export default TextFieldGroup;
