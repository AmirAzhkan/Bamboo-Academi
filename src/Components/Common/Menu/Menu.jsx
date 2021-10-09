import React from "react";
import { Link } from "react-router-dom";
import * as AuthServices from "../../../Core/Services/AuthServices/AuthServices";

import MenuCss from "./Menu.module.css";
import "../../../Assets/Fonts/Fonts.css";

const Menu = (props) => {
  const { selectMenuTab, version } = props;
  const loggedIn = AuthServices.getToken();
  const userInfo = AuthServices.getCurrentUser();

  const handleLogOut = () => {
    AuthServices.logOut();
    window.location = "/";
  };

  const handlePannelLink = () => {
    if (userInfo.role === "student") {
      return (
        <Link className="dropdown-item" to="/studentPannel">
          ورود به پنل کاربری
        </Link>
      );
    } else if (userInfo.role === "admin") {
      return (
        <Link className="dropdown-item" to="/adminPannel">
          ورود به پنل ادمین
        </Link>
      );
    }
  };
  return (
    <React.Fragment>
      <div
        className={`${MenuCss.baseStyle} ${MenuCss[version]} ${MenuCss[selectMenuTab]}`}
      >
        <div className={`${MenuCss.holderParts} ${MenuCss.holderPart1}`}>
          <div
            className={`shab dropdown ${MenuCss.menuItems} ${MenuCss.menuDropDown}`}
          >
            <a
              className={`${MenuCss.aTagdrop}`}
              href="#"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></a>

            <ul
              className="dropdown-menu mx-1 rounded-0"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <Link className="dropdown-item" to="/courses">
                  دوره ها
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/articles">
                  مقالات
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  خدمات
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  درباره ما
                </Link>
              </li>
              <li class="dropdown-divider"></li>
              {/* Condition For Displaying DropDown Menu Items Base On User Is Login Or Not 
                ( Responsive Mode ) : */}
              {loggedIn ? (
                // If User Is LoggedIn Display This : User Information
                <React.Fragment>
                  <li className={MenuCss.userInfoResp}>{userInfo.fullName}</li>
                  <li>{handlePannelLink()}</li>
                  <li>
                    <p className="dropdown-item mb-0" onClick={handleLogOut}>
                      خروج از حساب کاربری
                    </p>
                  </li>
                </React.Fragment>
              ) : (
                // If User Is Not Logged In Display This : Register & Login Button
                <React.Fragment>
                  <li>
                    <Link className="dropdown-item" to="/studentLogin">
                      ورود
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/studentRegister">
                      ثبت نام
                    </Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
          {/* Condition For Displaying Menu Items Base On User Is Login Or Not : */}
          {loggedIn ? (
            // If User Is LoggedIn Display This : User Information
            <div className={`shab dropdown ${MenuCss.userInfoDropDown}`}>
              <button
                className="btn dropdown-toggle p-0"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userInfo.fullName}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>{handlePannelLink()}</li>
                <li>
                  <p className="dropdown-item" onClick={handleLogOut}>
                    خروج از حساب کاربری
                  </p>
                </li>
              </ul>
            </div>
          ) : (
            // If User Is Not Logged In Display This : Register & Login Button
            <React.Fragment>
              <Link
                className={`shab ${MenuCss.menuItems} ${MenuCss.menuItem1}`}
                to="/studentRegister"
              >
                <p>ثبت نام</p>
              </Link>
              <Link
                className={`shab ${MenuCss.menuItems} ${MenuCss.menuItem2}`}
                to="/studentLogin"
              >
                <p>ورود</p>
              </Link>
            </React.Fragment>
          )}
        </div>
        <div className={`${MenuCss.holderParts} ${MenuCss.holderPart2}`}>
          <Link
            className={`shab ${MenuCss.menuItems} ${MenuCss.menuItem3}`}
            to="/"
          >
            <p>درباره ما</p>
          </Link>
          <Link
            className={`shab ${MenuCss.menuItems} ${MenuCss.menuItem4}`}
            to="/"
          >
            <p>خدمات</p>
          </Link>
          <Link
            className={`shab ${MenuCss.menuItems} ${MenuCss.menuItem5}`}
            to="/articles"
          >
            <p>مقالات</p>
          </Link>
          <Link
            className={`shab ${MenuCss.menuItems} ${MenuCss.menuItem6}`}
            to="/courses"
          >
            <p>دوره ها</p>
          </Link>
        </div>
        <div className={`${MenuCss.holderParts} ${MenuCss.holderPart3}`}>
          <Link
            className={`shab ${MenuCss.menuItems} ${MenuCss.menuItem7}`}
            to="/"
          >
            <img
              className={MenuCss.iconBambooWhite}
              src={
                require("../../../Assets/Images/LandingFirst/BambooWhite.png")
                  .default
              }
              alt="not found"
            />
            <img
              className={MenuCss.iconBambooBlue}
              src={
                require("../../../Assets/Images/LandingFirst/BambooBlue.png")
                  .default
              }
              alt="not found"
            />

            <p className="shabbold">بامبو</p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
