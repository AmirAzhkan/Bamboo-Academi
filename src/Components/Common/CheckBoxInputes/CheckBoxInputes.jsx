import React from "react";
import { useField } from "formik";

import CheckBoxCss from "./CheckBoxInputes.module.css";
import "./CheckBoxInputes.css";

export const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <React.Fragment>
      <label
        className={`shab ${CheckBoxCss.rememberLable}`}
        htmlFor="flexCheckDefault"
      >
        {children}
      </label>
      <input
        className={`rememberCheckBox form-check-input rounded-0 `}
        style={{ border: "2px solid #004458" }}
        type="checkbox"
        id="flexCheckDefault"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </React.Fragment>
  );
};

export default Checkbox;
