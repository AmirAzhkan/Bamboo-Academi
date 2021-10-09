import React from "react";

import InputPannelCss from "./InputPannel.module.css";

function InputPannel(props) {
  const {
    inputLable,
    selfStyle,
    inputPlaceHolder,
    selfHolder,
    children,
    ...rest
  } = props;

  return (
    <div className={`${InputPannelCss.holder} ${InputPannelCss[selfHolder]}`}>
      <p>{inputLable}</p>
      <div
        className={`${InputPannelCss.baseStyle} ${InputPannelCss[selfStyle]}`}
      >
        {children}
        <input
          {...rest}
          required
          className="text-input"
          placeholder={inputPlaceHolder}
        ></input>
        <div className={InputPannelCss.line}></div>
      </div>
    </div>
  );
}

export default InputPannel;
