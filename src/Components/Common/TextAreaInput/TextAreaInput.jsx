import React from "react";
import { useField } from "formik";

import TextAreaInputCss from "./TextAreaInput.module.css";
import "../../../Assets/Fonts/Fonts.css";

const TextAreaInput = ({ label, selfStyle, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={`shab ${TextAreaInputCss.textAreaHolder} `}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className={`text-area ${TextAreaInputCss[selfStyle]}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={`error ${TextAreaInputCss.errorStyle}`}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default TextAreaInput;
