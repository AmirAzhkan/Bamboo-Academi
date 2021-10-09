import React from "react";
import { useField } from "formik";
import InputPannel from "../InputPannel/InputPannel";

import PannelTextInputesCss from "./PannelTextInputes.module.css";

export const PannelTextInputes = ({
  inputLable,
  inputPlaceHolder,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <InputPannel
      inputLable={inputLable}
      inputPlaceHolder={inputPlaceHolder}
      {...field}
      {...props}
    >
      {meta.touched && meta.error ? (
        <div className={`shab ${PannelTextInputesCss.error}`}>{meta.error}</div>
      ) : null}
    </InputPannel>
  );
};

export default PannelTextInputes;
