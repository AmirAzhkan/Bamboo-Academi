import React from "react";

import OploadFileInputCss from "./OploadFileInput.module.css";

const OploadFileInput = ({
  required = true,
  setFieldValue,
  oploadFileInputLable,
  oploadFileInputSelfHolder,
}) => {
  return (
    <div
      className={`shab ${OploadFileInputCss.oploadFileHolder} ${OploadFileInputCss[oploadFileInputSelfHolder]} `}
    >
      <label for="file">{oploadFileInputLable}</label>
      <input
        required={required}
        id="file"
        name="file"
        type="file"
        onChange={(event) => {
          try {
            setFieldValue("file", event.currentTarget.files[0]);
          } catch (error) {
            console.log(error);
          }
        }}
        className="form-control"
      />
    </div>
  );
};

export default OploadFileInput;
