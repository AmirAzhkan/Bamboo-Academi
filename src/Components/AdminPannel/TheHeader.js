import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../Core/Services/AuthServices/AuthServices";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
} from "@coreui/react";

// routes config
import routes from "../../routes";

import "./TheHeader.css";
import "../../Assets/Fonts/Fonts.css";

const TheHeader = ({ employeeInfo }) => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const handleLogOut = () => {
    logOut();
    window.location = "/";
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />

      <CHeaderNav className="mr-auto">
        <div className="shab dropdown">
          <button
            className="studentName"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {employeeInfo.fullName}
          </button>
          <ul
            className={`dropdown-menu rounded-0 stuNameDropDown`}
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <p className="dropdown-item" onClick={handleLogOut}>
                خروج از حساب کاربری
              </p>
            </li>
          </ul>
        </div>
      </CHeaderNav>
      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="shab border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        <div className="shab c-subheader-nav">
          <CHeaderNavItem>
            <CHeaderNavLink to="/">صفحه اصلی</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem>
            <CHeaderNavLink to="/courses">دوره ها</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem>
            <CHeaderNavLink to="/articles">مقالات</CHeaderNavLink>
          </CHeaderNavItem>
        </div>
      </CSubheader>
    </CHeader>
  );
};

export default TheHeader;
