import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Menu from "../../Components/Common/Menu/Menu";
import Button from "../../Components/Common/Button/Button";
import Search from "../../Components/Common/Search/Search";
import Input from "../../Components/Common/Input/Input";
import Footer from "../../Components/Common/Footer/Footer";
import CoursesCards from "../../Components/CoursesCards/CoursesCards";
import Slider from "../../Components/Slider/Slider";

import LandingCss from "./Landing.module.css";
import "../../Assets/Fonts/Fonts.css";

const Landing = () => {
  const [logoShow, setlogoShow] = useState(true);
  useEffect(async () => {
    setTimeout(() => {
      setlogoShow(false);
    }, 4700);
  }, []);
  return (
    <React.Fragment>
      <div className="container-fluid">
        {/* row 1 */}
        <div className="row">
          <div className={`col-md-12 p-0  ${LandingCss.landingFirstDiv}`}>
            <div className={`col-md-11 p-0 ${LandingCss.firstHolder}`}>
              <Menu version="landingMenu" />

              <h2 className={`lale ${LandingCss.landingFirstH2}`}>
                باید راه بهتری برای آموزش ساخته میشد ، پس ما ساختیمش ...
              </h2>
              <p className={`shab ${LandingCss.landingFirstP}`}>
                سایت بامبو با هدف تولید و انتشار محتوای با کیفیت آموزشی و هم
                چنین آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و
                امید داریم بتوانیم با راهکار های نوین ، فرصتی برای افراد خواهان
                پیشرفت فراهم کنیم.
              </p>
              <Link to="/courses">
                <Button
                  buttonText={"مشاهده دوره ها"}
                  buttonStyle="buttonWhiteToBlue"
                  buttonPosition="buttonFirst"
                />
              </Link>
            </div>
            <div className="col-md-12 p-0">
              <Search version="searchLanding" />
            </div>
          </div>
          <div className={`p-0 ${LandingCss.landingFirstMask}`}></div>
          <div className={logoShow ? LandingCss.logoShow : LandingCss.logoHide}>
            <div className={LandingCss.logoHolder}>
              <img
                src={
                  require("../../Assets/Images/LandingFirst/BambooGreen.png")
                    .default
                }
                alt="notfound"
              />
              <p>بامبو</p>
            </div>
          </div>
        </div>
        {/* row 2 */}
        <div className="row">
          <div className={`col-md-12 ${LandingCss.landingNumbersDiv}`}>
            <div className="row">
              <div className={`${LandingCss.landingNumbersItemsHolder}`}>
                <div className={LandingCss.numbersContentBox}>
                  <img
                    src={
                      require("../../Assets/Images/LandingNumbers/online.png")
                        .default
                    }
                    alt="not found"
                  />
                  <div className={LandingCss.numberIncreaseBox}>
                    <div className={LandingCss.numberIncrease}>243</div>
                    <h5>دوره</h5>
                  </div>
                  <p>
                    تا کنون بیش از 200 دوره ، از دسته بندی های متفاوت در سایت
                    ثبت شده و قابل دسترسی است .
                  </p>
                </div>
                <div className={LandingCss.numbersContentBox}>
                  <img
                    src={
                      require("../../Assets/Images/LandingNumbers/teacher.png")
                        .default
                    }
                    alt="not found"
                  />
                  <div className={LandingCss.numberIncreaseBox}>
                    <div className={LandingCss.numberIncrease}>41</div>
                    <h5>استاد</h5>
                  </div>
                  <p>
                    بیش از 30 استاد ، از برترین اساتید ایران همراه ما هستند و
                    دوره های خودشونو ثبت کرده اند .
                  </p>
                </div>
                <div className={LandingCss.numbersContentBox}>
                  <img
                    src={
                      require("../../Assets/Images/LandingNumbers/hat.png")
                        .default
                    }
                    alt="not found"
                  />
                  <div className={LandingCss.numberIncreaseBox}>
                    <div className={LandingCss.numberIncrease}>589</div>
                    <h5>دانشجو</h5>
                  </div>
                  <p>
                    تا کنون بیش از 500 نفر از آموزش های بامبو استفاده کرده اند و
                    نظرات خودشونو ثبت کرده اند .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row 3 */}
        <div className="row">
          <div className={`col-md-12 p-0 ${LandingCss.landingCoursesDiv}`}>
            <div className={LandingCss.landingCoursesLeftBox}>
              <h2 className={`lale ${LandingCss.landingCoursesH2}`}>
                دوره های آموزشی
              </h2>
              <p
                className={`shab ${LandingCss.landingCoursesP}  ${LandingCss.landingCoursesP1}`}
              >
                دسترسی به با کیفیت ترین دوره های آموزشی آنلاین با تدریس برترین
                اساتید ایران در دسته بندی های گوناگونی همچون طراحی ، برنامه
                نویسی ، اقتصاد ، فلسفه ، فیزیک ، شیمی ، ریاضی و ...
              </p>
              <p
                className={`shab ${LandingCss.landingCoursesP}  ${LandingCss.landingCoursesP2} `}
              >
                دسترسی به با کیفیت ترین دوره های آموزشی آنلاین با تدریس برترین
                اساتید ایران .
              </p>
              <Link to="/courses">
                <Button
                  buttonText={"مشاهده دوره ها"}
                  buttonStyle="buttonDarkBlueToGreen"
                  buttonPosition="buttonCourses"
                />
              </Link>
            </div>
            <CoursesCards />
          </div>
        </div>
        {/* row 4 */}
        <div className="row">
          <div className={`col-md-12 p-0 ${LandingCss.landingServicesDiv}`}>
            <div
              className={`${LandingCss.landingServicesCol} ${LandingCss.lsc1}`}
            >
              <Button
                buttonText={"مشاوره"}
                buttonStyle="buttonGrayToWhite"
                buttonPosition="buttonServices1"
              />
              <div className={`${LandingCss.servicesZoz} ${LandingCss.sz1}`}>
                <h3 className="lale">مشاوره آنلاین</h3>
                <p className="shab">
                  مشاوران ما برای حل مشکلات شما آماده اند ...
                </p>
              </div>
            </div>
            <div
              className={`${LandingCss.landingServicesCol} ${LandingCss.lsc2}`}
            >
              <Button
                buttonText={"جزئیات"}
                buttonStyle="buttonGrayToWhite"
                buttonPosition="buttonServices2"
              />
              <div className={`${LandingCss.servicesZoz} ${LandingCss.sz2}`}>
                <h3 className="lale">ارائه مدرک معتبر</h3>
                <p className="shab">
                  بهترین راه برای ساختن رزومه ای حرفه ای ...
                </p>
              </div>
            </div>
            <div
              className={`${LandingCss.landingServicesCol} ${LandingCss.lsc3}`}
            >
              <Button
                buttonText={"همکاری"}
                buttonStyle="buttonGrayToWhite"
                buttonPosition="buttonServices1"
              />
              <div className={`${LandingCss.servicesZoz} ${LandingCss.sz3}`}>
                <h3 className="lale">همکاری در آموزش</h3>
                <p className="shab">
                  به اساتید آموزشی ما در بامبو بپیوندید ...
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* row 5 */}
        <div className="row">
          <div className={`col-md-12 p-0 ${LandingCss.landingArticlesDiv}`}>
            <div className={LandingCss.landingArticlesRightBox}>
              <h2 className={`lale ${LandingCss.landingArticlesH2}`}>
                اخبار و مقالات
              </h2>
              <p
                className={`shab ${LandingCss.landingArticlesP} ${LandingCss.landingArticlesP1}`}
              >
                دسترسی به جدیدترین و مفیدترین مقالات تالیف شده توسط معتبرترین
                روزنامه ها و رسانه ها در دسته بندی های گوناگونی همچون طراحی ،
                هنر ، برنامه نویسی ، اقتصاد ، فلسفه ، فیزیک ، شیمی و ...
              </p>
              <p
                className={`shab ${LandingCss.landingArticlesP} ${LandingCss.landingArticlesP2}`}
              >
                دسترسی به جدیدترین و مفیدترین مقالات تالیف شده توسط معتبرترین
                روزنامه ها و رسانه ها .
              </p>
              <Link to="/articles">
                <Button
                  buttonText={"مشاهده مقالات"}
                  buttonStyle="buttonDarkBlueToGreen"
                  buttonPosition="LandingButtonArticlesPosition"
                />
              </Link>
            </div>
            <Slider />
          </div>
        </div>
        {/* row 6 Offer */}
        <div className="row">
          <div className={`col-md-12 p-0 ${LandingCss.landingOfferDiv}`}>
            <div className={`${LandingCss.offerZoz}`}>
              <div className={LandingCss.offerContentsHolder}>
                <h4 className="lale">پیشنهاد و انتقاد</h4>
                <div className={LandingCss.offerInputHolder}>
                  <Input
                    selfPosition="offerPosition1"
                    selfStyle="inputOffer"
                    inputPlaceHolder="ایمیل خود را وارد کنید ..."
                  />
                </div>
                <div className={LandingCss.offerInputHolder}>
                  <Input
                    selfPosition="offerPosition2"
                    selfStyle="inputOffer"
                    inputPlaceHolder="متن خود را وارد کنید ..."
                  />
                </div>
                <Button
                  buttonText={"ارسال"}
                  buttonStyle="buttonBlueToWhite"
                  buttonPosition="buttonOffer"
                />
              </div>
            </div>
          </div>
        </div>
        {/* row 7 Footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Landing;
