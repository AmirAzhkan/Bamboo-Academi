import React, { Component } from "react";
import ContextCss from "./Context.module.css";

import "../../../Assets/Fonts/Fonts.css";

class Context extends Component {
  render() {
    const {
      contextHolder,
      textHolder,
      contextTitle,
      contextDetails,
      contextTitleCss,
      contextDetailsCss,
      titleSelfStyle 
    } = this.props;

    return (
      <React.Fragment>
        <div className={contextHolder} style={{ direction: "rtl" }}>
          <h2 className={`lale ${ContextCss[contextTitleCss]} ${ContextCss[titleSelfStyle]}`}>{contextTitle}</h2>
          <div className={textHolder}>
            <p className={`shab mt-3 ${ContextCss.text} ${ContextCss[contextDetailsCss]}`}>
              {contextDetails}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Context;
