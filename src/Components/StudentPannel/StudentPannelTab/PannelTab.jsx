import React from "react";
import { Link } from "react-router-dom";

import TabCss from "./PannelTab.module.css";
import "./PannelTab.css";

function PannelTab() {
  return (
    <div className={`${TabCss.tabHolder}`}>
      <Link className={`${TabCss.academi}`} to="/">
        <p className="lale">آکادمی آموزشی بامبو</p>
      </Link>
      <Link className={`${TabCss.academiResp}`} to="/">
        <p className="lale">بامبو</p>
      </Link>
      <h2 className="lale">پنل دانشجو</h2>
      {/* Pannel Tab */}
      <div
        className={`nav flex-column shab ${TabCss.tab}`}
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          className="nav-link dashboard active rounded-0"
          id="v-pills-dashboard-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-dashboard"
          type="button"
          role="tab"
          aria-controls="v-pills-dashboard"
          aria-selected="true"
        >
          <Link to="/studentPannel/studentDashboard" className="tabLinks">
            داشبورد
          </Link>
        </button>
        <button
          className="nav-link editProfile rounded-0"
          id="v-pills-aeditProfile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-editProfile"
          type="button"
          role="tab"
          aria-controls="v-pills-editProfile"
          aria-selected="false"
        >
          <Link to="/studentPannel/studentEditProfile" className="tabLinks">
            ویرایش پروفایل
          </Link>
        </button>
        <button
          className="nav-link myCourses rounded-0"
          id="v-pills-myCourses-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-myCourses"
          type="button"
          role="tab"
          aria-controls="v-pills-myCourses"
          aria-selected="false"
        >
          <Link to="/studentPannel/studentCourses" className="tabLinks">
            دوره های من
          </Link>
        </button>
        <button
          className="nav-link courses rounded-0"
          id="v-pills-courses-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-courses"
          type="button"
          role="tab"
          aria-controls="v-pills-courses"
          aria-selected="false"
        >
          <Link to="/studentPannel/coursesList" className="tabLinks">
            لیست دوره ها
          </Link>
        </button>
        <Link className={TabCss.exitButton} to="/">
          خروج
        </Link>
      </div>
      <div className={TabCss.tabResp}>
        <div
          className="nav shab"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link dashboard active"
            id="v-pills-dashboard-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-dashboard"
            type="button"
            role="tab"
            aria-controls="v-pills-dashboard"
            aria-selected="true"
          >
            <Link
              to="/studentPannel/studentDashboard"
              className="tabLinks"
            ></Link>
          </button>
          <button
            className="nav-link editProfile"
            id="v-pills-editProfile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-editProfile"
            type="button"
            role="tab"
            aria-controls="v-pills-editProfile"
            aria-selected="false"
          >
            <Link
              to="/studentPannel/studentEditProfile"
              className="tabLinks"
            ></Link>
          </button>
          <button
            className="nav-link myCourses"
            id="v-pills-myCourses-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-myCourses"
            type="button"
            role="tab"
            aria-controls="v-pills-myCourses"
            aria-selected="false"
          >
            <Link
              to="/studentPannel/studentCourses"
              className="tabLinks"
            ></Link>
          </button>
          <button
            className="nav-link courses"
            id="v-pills-courses-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-courses"
            type="button"
            role="tab"
            aria-controls="v-pills-courses"
            aria-selected="false"
          >
            <Link to="/studentPannel/coursesList" className="tabLinks"></Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PannelTab;
