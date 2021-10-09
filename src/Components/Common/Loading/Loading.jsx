import React from "react";

import LoadingCss from "./Loading.module.css";
import "../../../Assets/Fonts/Fonts.css";

const Loading = () => {
  return (
    <div className={LoadingCss.holder}>
      <p className={LoadingCss.logo}></p>
      <p className={LoadingCss.text}>در حال بارگذاری اطلاعات ...</p>
    </div>
  );
};

export default Loading;
