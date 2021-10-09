import React, { useState, useEffect } from "react";
import { GetAllStudents } from "../../../Core/Services/Api/GetAllStudents.api";
import { GetAllTeachers } from "../../../Core/Services/Api/GetAllTeachers.api";
import { GetTerm } from "../../../Core/Services/Api/GetTerm.api";
import { GetCourses } from "../../../Core/Services/Api/GetCourses.api";
import { GetAllNews_Articles } from "../../../Core/Services/Api/GetAllNews-Articles.api";
import Loading from "../../Common/Loading/Loading";

import PannelDashboardCss from "./Dashboard.module.css";
import "../../../Assets/Fonts/Fonts.css";

const Dashboard = ({ employeeInfo }) => {
  const [AllStudentsList, setAllStudentsList] = useState([]);
  const [AllTeachersList, setAllTeachersList] = useState([]);
  const [AllTermsList, setAllTermsList] = useState([]);
  const [AllCoursesList, setAllCoursesList] = useState([]);
  const [AllNews_Articles, setAllNews_Articles] = useState([]);
  const [LoadingState, setLoadingState] = useState(true);

  useEffect(async () => {
    const studentsData = await GetAllStudents();
    setAllStudentsList(studentsData.result);

    const teachersData = await GetAllTeachers();
    setAllTeachersList(teachersData.result);

    const termsData = await GetTerm();
    setAllTermsList(termsData.result);

    const coursesData = await GetCourses();
    setAllCoursesList(coursesData.result);

    const news_articlesData = await GetAllNews_Articles();
    setAllNews_Articles(news_articlesData.result);

    setLoadingState(false);
  }, []);

  return (
    <>
      {LoadingState ? (
        <Loading />
      ) : (
        <React.Fragment>
          <div className={PannelDashboardCss.rightSide}>
            <h4 className={PannelDashboardCss.titles}>اطلاعات ثبت شده شما :</h4>
            <div className={PannelDashboardCss.adminInfoHolder}>
              <p>
                <span>نام کاربری :</span> {employeeInfo.fullName}
              </p>
              <p>
                <span>ایمیل :</span> {employeeInfo.email}
              </p>
              <p>
                <span>آدرس :</span> {employeeInfo.address}
              </p>
              <p>
                <span>شماره موبایل :</span> {employeeInfo.phoneNumber}
              </p>
              <p>
                <span>شماره ملی :</span> {employeeInfo.nationalId}
              </p>
              <p>
                <span>تاریخ تولد :</span> {employeeInfo.birthDate}
              </p>
            </div>
          </div>
          <div className={PannelDashboardCss.leftSide}>
            <div className={PannelDashboardCss.leftSideTop}>
              <h4 className={PannelDashboardCss.titles}>آمار اعضای سایت :</h4>
              <div className={PannelDashboardCss.studentsCount}>
                <p className={`mb-3 ${PannelDashboardCss.countTitle}`}>
                  تعداد کل دانشجویان :
                </p>
                <p>{AllStudentsList.length} نفر</p>
              </div>
              <div className={PannelDashboardCss.teachersCount}>
                <p className={`mb-3 ${PannelDashboardCss.countTitle}`}>
                  تعداد کل اساتید :
                </p>
                <p>{AllTeachersList.length} نفر</p>
              </div>
            </div>

            <div className={PannelDashboardCss.leftSideBottom}>
              <h4 className={PannelDashboardCss.titles}>
                آمار محتواهای سایت :
              </h4>
              <div className={PannelDashboardCss.countHolder}>
                <div className={PannelDashboardCss.termsCount}>
                  <p className={`mb-3 ${PannelDashboardCss.countTitle}`}>
                    تعداد ترم ها:
                  </p>
                  <p>{AllTermsList.length} عدد</p>
                </div>
                <div className={PannelDashboardCss.coursesCount}>
                  <p className={`mb-3 ${PannelDashboardCss.countTitle}`}>
                    تعداد دوره ها:
                  </p>
                  <p>{AllCoursesList.length} عدد</p>
                </div>
                <div className={PannelDashboardCss.articlesCount}>
                  <p className={`mb-3 ${PannelDashboardCss.countTitle}`}>
                    تعداد مقالات:
                  </p>
                  <p>{AllNews_Articles.length} عدد</p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </>
  );
};

export default Dashboard;
