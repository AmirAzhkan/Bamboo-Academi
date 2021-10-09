import React, { Component } from "react";
import FooterCss from "../Footer/Footer.module.css";

import Input from "../../../Components/Common/Input/Input";
import Button from "../../../Components/Common/Button/Button";

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <div className={`col-md-12 ${FooterCss.landingFooterDiv}`}>
          <div className={`col-md-11 p-0 ${FooterCss.FooterDivHolder}`}>
            <h4 className={`lale ${FooterCss.aboutBamboo}`}>درباره بامبو</h4>
            <p className={` shab ${FooterCss.aboutBambooText}`}>
              بامبو یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
              است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
              دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد .
            </p>
            <h4 className={`lale ${FooterCss.khabarName}`}>خبرنامه</h4>
            <Input
              selfPosition="FooterPosition"
              selfStyle="inputFooter"
              inputPlaceHolder="ایمیل خود را وارد کنید ..."
            />
            <Button
              buttonText={"عضویت"}
              buttonStyle="buttonDarkBlueToWhite"
              buttonPosition="buttonFooter"
            />
            <div className={` ${FooterCss.footerLine}`}></div>
            <h4 className={`lale ${FooterCss.contactUs}`}>ارتباط با ما</h4>
            <div className={`shab ${FooterCss.contactUsPHolder}`}>
              <p>iwillbemyvision@gmail.com</p>
              <p>amir.azhkan@yahoo.com</p>
              <ul>
                <li>
                  <img
                    alt="not found"
                    src={
                      require("../../../Assets/Images/LandingLast/instagram copy.png")
                        .default
                    }
                  />
                </li>
                <li>
                  <img
                    alt="not found"
                    src={
                      require("../../../Assets/Images/LandingLast/telegram copy.png")
                        .default
                    }
                  />
                </li>
                <li>
                  <img
                    alt="not found"
                    src={
                      require("../../../Assets/Images/LandingLast/whatsapp copy.png")
                        .default
                    }
                  />
                </li>
                <li>
                  <img
                    alt="not found"
                    src={
                      require("../../../Assets/Images/LandingLast/youtube3.png")
                        .default
                    }
                  />
                </li>
              </ul>
            </div>
            <h4 className={`lale ${FooterCss.beWithUs}`}>همراه ما باشید</h4>
            <div className={`shab ${FooterCss.beWithUsPHolder}`}>
              <p>سوالات رایج</p>
              <p>قوانین</p>
              <p>خدمات</p>
            </div>
            <ul className={FooterCss.footerItHolder}>
              <li>
                <img
                  alt="not found"
                  src={
                    require("../../../Assets/Images/LandingLast/b1.png").default
                  }
                />
              </li>
              <li>
                <img
                  alt="not found"
                  src={
                    require("../../../Assets/Images/LandingLast/b2.png").default
                  }
                />
              </li>
              <li>
                <img
                  alt="not found"
                  src={
                    require("../../../Assets/Images/LandingLast/b3.png").default
                  }
                />
              </li>
            </ul>
          </div>
          <div className="row">
            <div className={FooterCss.footerInfo}>
              کليه حقوق محصولات و محتوای اين سایت متعلق به بامبو می باشد و هر
              گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
