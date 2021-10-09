import React from "react";
import { Link } from "react-router-dom";

import BannerCss from "./Banner.module.css";
import "../../Assets/Fonts/Fonts.css";

export const Banner = (props) => {
  const { bannerPage } = props;

  return (
    <React.Fragment>
      <div className={`p-0 ${BannerCss.bannerStyle} ${BannerCss[bannerPage]}`}>
        <div className={`${BannerCss.bannerMask}`}></div>

        <div className={BannerCss.detailsHolder}>
          {/* This P Element Return Bamboo Logo In Responsive Mobile Mode */}
          <p className={BannerCss.logoResp}></p>
          <h2 className={`lale ${BannerCss.title}`}>آکادمی آموزشی بامبو</h2>
          <div className={BannerCss.line}></div>
          <div className={BannerCss.socialMediaHolder}>
            <Link
              className={`${BannerCss.linkStyle} ${BannerCss.youTube}`}
              to="/login/youTube"
            ></Link>
            <Link
              className={`${BannerCss.linkStyle} ${BannerCss.whatsApp}`}
              to="/login/whatsApp"
            ></Link>
            <Link
              className={`${BannerCss.linkStyle} ${BannerCss.telegram}`}
              to="/login/telegram"
            ></Link>
            <Link
              className={`${BannerCss.linkStyle} ${BannerCss.instagram}`}
              to="/login/instagram"
            ></Link>
          </div>
          <Link className={BannerCss.homeButton} to="/"></Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
