import React, { Component } from "react";

import ButtonCss from "../Button/Button.module.css";

import "../../../Assets/Fonts/Fonts.css";

class Button extends Component {
  render() {
    const {
      buttonText,
      buttonStyle,
      buttonPosition,
      buttonType,
      onClick,
    } = this.props;

    return (
      <button
        className={`shab ${ButtonCss[buttonStyle]}
                         ${ButtonCss[buttonPosition]} 
                         ${ButtonCss.buttonBaseStyle}`}
        type={buttonType}
        onClick={onClick}
      >
        {buttonText}
      </button>
    );
  }
}

export default Button;
