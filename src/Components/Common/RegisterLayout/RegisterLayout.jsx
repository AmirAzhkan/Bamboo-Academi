import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Banner from "../../FormsBanner/Banner";

import RegLayoutCss from "./RegisterLayout.module.css";
import "react-toastify/dist/ReactToastify.css";
import "../../../Assets/Fonts/Fonts.css";

export const RegisterLayout = (props) => {
  const { registerTitle, children } = props;

  return (
    <div className="container-fluid p-0">
      <ToastContainer bodyClassName={`shab ${RegLayoutCss.toastStyle}`} />
      <div style={{ direction: "ltr", position: "relative" }}>
        <Banner bannerPage="registerPage" />
        <div className={`${RegLayoutCss.formSection}`}>
          <div className={RegLayoutCss.formHolder}>
            <div className="m-0 mb-3">
              <h2 className={`lale p-0 ${RegLayoutCss.title}`}>
                {registerTitle}
              </h2>
              {/* This Link Element Return Home Button In Responsive Mobile Mode */}
              <Link className={RegLayoutCss.homeButton} to="/"></Link>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
