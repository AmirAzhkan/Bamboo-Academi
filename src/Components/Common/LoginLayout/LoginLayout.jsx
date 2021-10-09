import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Banner from "../../FormsBanner/Banner";

import LoginLayoutCss from "./LoginLayout.module.css";
import "react-toastify/dist/ReactToastify.css";
import "../../../Assets/Fonts/Fonts.css";

export const LoginLayout = (props) => {
  const { loginTitle, children } = props;

  return (
    <div className="container-fluid p-0">
      <ToastContainer bodyClassName={`shab ${LoginLayoutCss.toastStyle}`} />
      <div style={{ direction: "rtl" }}>
        <Banner bannerPage="loginPage" />
        <div className={`p-0  ${LoginLayoutCss.formSection}`}>
          <div className={LoginLayoutCss.formHolder}>
            <div className="m-0">
              <h2 className={`lale p-0 ${LoginLayoutCss.title}`}>
                {loginTitle}
              </h2>
              {/* This Link Element Return Home Button In Responsive Mobile Mode */}
              <Link className={LoginLayoutCss.homeButton} to="/"></Link>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
