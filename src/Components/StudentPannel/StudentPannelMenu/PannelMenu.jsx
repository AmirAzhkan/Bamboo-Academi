import React from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../../Core/Services/AuthServices/AuthServices";

import PannelMenuCss from "./PannelMenu.module.css";
import "./PannelMenu.css";

function PannelMenu({ studentInfo }) {
  const handleLogOut = () => {
    logOut();
    window.location = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container-fluid shab p-0">
        <div className={`navbar-nav ${PannelMenuCss.menu}`}>
          <Link className="nav-link" aria-current="page" to="/">
            صفحه اصلی
          </Link>
          <Link className="nav-link" to="/courses">
            دوره ها
          </Link>
          <Link className="nav-link" to="/articles">
            مقالات
          </Link>
          <Link className="nav-link" to="/">
            خدمات
          </Link>
        </div>
        {/* Student Name Display Here :
        We Have A Dropdown That User Can LogOut With It  */}
        <div className="dropdown">
          <button
            className={`${PannelMenuCss.studentName}`}
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {studentInfo.fullName}
          </button>
          <ul
            className={`dropdown-menu rounded-0 ${PannelMenuCss.stuNameDropDown}`}
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <p className="dropdown-item" onClick={handleLogOut}>
                خروج از حساب کاربری
              </p>
            </li>
          </ul>
        </div>
        {/* Dropdown Menu In Responsive Mode */}
        <div className={`${PannelMenuCss.menuResp}`}>
          <button
            type="button"
            className="btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/courses">
                دوره ها
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="articles">
                مقالات
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                خدمات
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                خروج
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default PannelMenu;
