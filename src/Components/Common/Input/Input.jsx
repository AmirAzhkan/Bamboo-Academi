import React, { Component } from "react";
import InputCss from "../Input/Input.module.css";

class Input extends Component {
  render() {
    const { selfStyle, inputPlaceHolder, selfPosition, ...rest } = this.props;

    return (
      <div
        className={`${InputCss.baseStyle} ${InputCss[selfPosition]} ${InputCss[selfStyle]}`}
      >
        <input
          {...rest}
          required
          className="text-input"
          placeholder={inputPlaceHolder}
        ></input>
        <div className={InputCss.line}></div>
      </div>
    );
  }
}

export default Input;
