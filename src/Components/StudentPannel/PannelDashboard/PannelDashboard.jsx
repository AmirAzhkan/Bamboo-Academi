import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../../Core/Services/AuthServices/AuthServices";
import { GetTerm } from "../../../Core/Services/Api/GetTerm.api";

import CoursesCard from "../../Common/CoursesCard/CoursesCard";
import Loading from "../../Common/Loading/Loading";

import DashboardCss from "./PannelDashboard.module.css";

function Dashboard() {
  const studentInfo = getCurrentUser();
  const [LastCourse, setLastCourse] = useState();
  const [SegestedCourse, setSegestedCourse] = useState();
  const [LoadingState, setLoadingState] = useState(true);

  useEffect(async () => {
    const data = await GetTerm();

    //Filtering Terms List Base On User Id :: Return List Of Terms That User Get It & Set It Table
    const filteredData = data.result.filter((row) => {
      const isInTerm = row.students.some(
        (student) => student._id === studentInfo._id
      );
      if (isInTerm) return row;
    });

    //Get The Index Of The Last Course That User Get It & Set In LastCourse State To Display It
    const lastCourseIndex = filteredData.length - 1;
    setLastCourse(filteredData[lastCourseIndex]);

    //Get The Index Of The Last Course In Term List To Display It As Segested Course
    const segestedIndex = data.result.length - 1;
    setSegestedCourse(data.result[segestedIndex]);
    setLoadingState(false);
  }, []);

  return (
    <div
      className={`show active ${DashboardCss.dashboardHolder}`}
      id="v-pills-dashboard"
      role="tabpanel"
      aria-labelledby="v-pills-dashboard-tab"
    >
      {LoadingState ? (
        <Loading />
      ) : (
        <>
          <div className={DashboardCss.rightSide}>
            <h4 className={DashboardCss.contentTitle}>اطلاعات ثبت شده شما :</h4>
            <div className={`col-md-12 ${DashboardCss.stuInfoHolder}`}>
              <p>
                <span>نام کاربری : </span>
                {studentInfo.fullName}
              </p>
              <p>
                <span>ایمیل :</span> {studentInfo.email}
              </p>
              <p>
                <span>شماره موبایل :</span> {studentInfo.phoneNumber}
              </p>
              <p>
                <span>شماره ملی :</span> {studentInfo.nationalId}
              </p>
              <p>
                <span>تاریخ تولد :</span> {studentInfo.birthDate}
              </p>
            </div>
          </div>
          <div className={DashboardCss.leftSide}>
            <h4 className={DashboardCss.contentTitle}>آخرین دوره ثبت شده :</h4>
            {LastCourse ? (
              <Link to={`/courses/course/${LastCourse._id}`}>
                <CoursesCard
                  cardHolderSize="pannelPage"
                  imageSrc={LastCourse.course.image}
                  title={LastCourse.title}
                  teacher={LastCourse.teacher.fullName}
                  price={LastCourse.cost}
                />
              </Link>
            ) : (
              <p className={DashboardCss.courseInfo}>
                دوره ای در حال حاضر برای شما ثبت نشده است
              </p>
            )}

            <h4
              className={`${DashboardCss.contentTitle} ${DashboardCss.suggest}`}
            >
              جدیدترین دوره پیشنهادی :
            </h4>
            {SegestedCourse ? (
              <Link to={`/courses/course/${SegestedCourse._id}`}>
                <CoursesCard
                  cardHolderSize="pannelPage"
                  imageSrc={SegestedCourse.course.image}
                  title={SegestedCourse.title}
                  teacher={SegestedCourse.teacher.fullName}
                  price={SegestedCourse.cost}
                />
              </Link>
            ) : (
              <p className={DashboardCss.courseInfo}>
                دوره ای برای نمایش وجود ندارد
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
