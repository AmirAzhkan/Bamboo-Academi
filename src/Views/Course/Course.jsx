import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../Core/Services/AuthServices/AuthServices";
import { AddStudentToTerm } from "../../Core/Services/Api/AddStudentToTerm.api";
import { ToastContainer } from "react-toastify";

import Button from "../../Components/Common/Button/Button";
import Menu from "../../Components/Common/Menu/Menu";
import Comment from "../../Components/Comment/Comment";
import AdminComment from "../../Components/AdminComment/AdminComment";
import Footer from "../../Components/Common/Footer/Footer";
import ProgressBar from "../../Components/Common/ProgressBar/ProgressBar";
import Loading from "../../Components/Common/Loading/Loading";

import { GetTermById } from "../../Core/Services/Api/GetTermById.api";
import { ConvertDateHandler } from "../../Core/Utils/DateFormater";

import CourseCss from "./Course.module.css";
import "../../Assets/Fonts/Fonts.css";

const Course = (props) => {
  let [textHour, setTextHour] = useState(0);
  let [textMinute, setTextMinute] = useState(0);
  let [textSecond, setTextSecond] = useState(0);
  const [term, setTerm] = useState({});
  const [LoadingState, setLoadingState] = useState(true);
  const [IsStudentInTerm, setIsStudentInTerm] = useState(false);
  const termId = props.match.params.iid;

  const userInfo = getCurrentUser();

  useEffect(async () => {
    try {
      const Terms = await GetTermById(termId);
      setTerm(Terms.result);
      setLoadingState(false);

      //Check The Student Have The Current Term Or Not ::
      const isInTerm = Terms.result.students.some(
        (student) => student._id === userInfo._id
      );
      setIsStudentInTerm(isInTerm);
    } catch (error) {}
  }, [IsStudentInTerm]);

  const countDown = () => {
    const countDate = new Date("may 13, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let textHour = Math.floor((gap % day) / hour);
    setTextHour(textHour);

    let textMinute = Math.floor((gap % hour) / minute);
    setTextMinute(textMinute);

    let textSecond = Math.floor((gap % minute) / second);
    setTextSecond(textSecond);
  };

  setInterval(countDown, 1000);

  //Handling The Add Course Button Based On User Role & User Is Logged In Or Not  ::
  const handleManageCourseButton = (userInfo) => {
    if (userInfo && userInfo.role === "student") {
      return (
        <Button
          buttonText={"?????? ?????? ???? ????????"}
          buttonStyle="buttonGreenToBlue"
          buttonPosition="buttonCourse"
          onClick={() => handleAddStudentToTerm(term._id, term.title)}
        />
      );
    } else if (userInfo && userInfo.role === "admin") {
      return (
        <Link
          className={CourseCss.adminCourseManage}
          to="/adminPannel/TermsManagement/TermsList"
        >
          <Button
            buttonText={"???????????? ???????? ????"}
            buttonStyle="buttonGreenToBlue"
            buttonPosition="buttonCourse"
          />
        </Link>
      );
    } else {
      return (
        <Link className={CourseCss.addToTermLink} to={`/course/${term._id}`}>
          ?????? ?????? ???? ????????
        </Link>
      );
    }
  };

  //Add The Current Student To Current Term ::
  const handleAddStudentToTerm = async (termId, termTitle) => {
    const result = await AddStudentToTerm(termId, termTitle);
    if (result.data.success === true) {
      setIsStudentInTerm((old) => !old);
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        {LoadingState ? (
          <Loading />
        ) : (
          <>
            <ToastContainer bodyClassName={`shab ${CourseCss.toastStyle}`} />
            {/*                                                      row 1 */}
            <div className="row">
              <div className={`col-md-12 ${CourseCss.courseDiv}`}>
                <>
                  <div className={CourseCss.courseHolder}>
                    <Menu version="whiteMenu" />
                    <div className={CourseCss.courseBaner}>
                      <div className={CourseCss.imageHolder}>
                        <img
                          src={term.course && term.course.image}
                          alt="not found"
                        />
                      </div>
                      <h2>{term.title}</h2>
                      <div className={CourseCss.courseCapa}>
                        <p className="shabbold">?????????? : </p>
                        <p className="shab">{term.capacity}</p>
                        <p className="shab">??????</p>
                      </div>
                      <div className={CourseCss.courseStu}>
                        <p className="shabbold">???????????? : </p>
                        <p className="shab">{term.students.length}</p>
                        <p className="shab">??????</p>
                      </div>
                      <ProgressBar
                        progress={`${Math.ceil(
                          (term.students.length /
                            (term.capacity + term.students.length)) *
                            100
                        )}%`}
                        progressCss="courseProgress"
                        progressBarCss="courseProgressBar"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${CourseCss.courseDetailsHolder}`}>
                      <div className={CourseCss.courseContentBox}>
                        <img
                          src={
                            require("../../Assets/Images/Course/like.png")
                              .default
                          }
                          alt="not found"
                        />
                        <p className={CourseCss.pTitr}>???????? : </p>
                        <ul className={CourseCss.courseRateHolder}>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                      <div className={CourseCss.courseContentBox}>
                        <img
                          src={
                            require("../../Assets/Images/Course/calendar.png")
                              .default
                          }
                          alt="not found"
                        />
                        <div className={CourseCss.pHolder}>
                          <p className={CourseCss.pChild}>
                            {ConvertDateHandler(term.startDate)}
                          </p>
                          <p className={CourseCss.pTitr}>?????????? ???????? :</p>
                        </div>
                        <div className={CourseCss.pHolder}>
                          <p className={CourseCss.pChild}>
                            {ConvertDateHandler(term.endDate)}
                          </p>
                          <p className={CourseCss.pTitr}>?????????? ?????????? :</p>
                        </div>
                      </div>
                      <div className={CourseCss.courseContentBox}>
                        <img
                          src={
                            require("../../Assets/Images/Course/teacher.png")
                              .default
                          }
                          alt="not found"
                        />
                        <p className={CourseCss.pTitr}>???????? : </p>
                        <p className={CourseCss.pChild}>
                          {term.teacher && term.teacher.fullName}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              </div>
              <div className={`${CourseCss.courseMask}`}></div>
            </div>
            {/*                                                      row 2 */}
            <div className="row">
              <div className={`col-12 p-0 ${CourseCss.courseContent}`}>
                <div className={CourseCss.leftBox}>
                  <div className={CourseCss.card}>
                    <div className={CourseCss.cardCol}>
                      <p className={CourseCss.pTitr}>{term.title}</p>
                      <div className={CourseCss.imageHolder}>
                        <img
                          src={term.course && term.course.image}
                          alt="not found"
                        />
                      </div>
                    </div>
                    {IsStudentInTerm ? (
                      <>
                        <p className={CourseCss.isStudentInTerm}>
                          ?????????????? ???????? ?????? ?? <span>{userInfo.fullName}</span>{" "}
                          ?????? ???????? ?? <span>{term.title}</span> ???? ?????? ???????? ??????
                        </p>
                        <Link
                          className={CourseCss.courseManage}
                          to="/studentPannel/studentCourses"
                        >
                          <Button
                            buttonText={"???????????? ???????? ?????? ??????"}
                            buttonStyle="buttonGreenToBlue"
                            buttonPosition="buttonCourse"
                          />
                        </Link>
                      </>
                    ) : (
                      <>
                        <div className={CourseCss.cardCol}>
                          <p className={CourseCss.pVal}>{term.cost} ??????????</p>
                          <p className={CourseCss.pTitr}>???????? ???????? :</p>
                        </div>
                        <div className={CourseCss.cardCol}>
                          <p className={CourseCss.pVal}>% 10</p>
                          <p className={CourseCss.pTitr}>???????? ?????????? :</p>
                        </div>
                        <div className={CourseCss.cardCol}>
                          <p className={CourseCss.pVal}>
                            {term.cost * 0.9} ??????????
                          </p>
                          <p className={CourseCss.pTitr}>???????? ???????? ???????????? :</p>
                        </div>
                        <div className={CourseCss.cardCol}>
                          <div className={CourseCss.countDown}>
                            <p className="timerH">{textHour}</p>
                            <span>:</span>
                            <p className="timerM">{textMinute}</p>
                            <span>:</span>
                            <p className="timerS">{textSecond}</p>
                          </div>
                          <p className={CourseCss.pTitr}>???????? ?????????? :</p>
                        </div>
                        <div className={CourseCss.cardCol}>
                          {handleManageCourseButton(userInfo)}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className={CourseCss.text}>
                  <h6 className="lale">??????????????</h6>
                  <p className="shab">
                    {term.course && term.course.description}
                  </p>
                </div>
              </div>
            </div>
            {/*                                                      row 3 */}
            <div className="row">
              <div className={`col-12 p-0 ${CourseCss.courseContent2}`}>
                <div className={CourseCss.courseZoz}></div>
                <div className={CourseCss.zozContext}>
                  <div className={CourseCss.contextCol}>???????????? ?????? ????????</div>
                  <div className={CourseCss.contextCol}>
                    <div className={CourseCss.icon}></div>
                    <div className={CourseCss.texts}>
                      <p className={CourseCss.header}>
                        ?????? ?????? ???? ???? ?????????????? ????????????
                      </p>
                      <p className={CourseCss.para}>
                        ?????? ???????????? ???? ?????? ??????????????????? ???? ???????? ???????????? ?????????? ?????? ????
                        ?????? ???????????? ?? ?????????? ???? ???????????? ???? ???? ?????????????? ???????? ???? ??????
                        ???? ?????????? ?????????? ???????????? ?????? ?? ???????????? ???????????? ???????? ??????????????
                        ???????????? ???????? .
                      </p>
                    </div>
                  </div>
                  <div className={CourseCss.contextCol}>
                    <div className={CourseCss.icon}></div>
                    <div className={CourseCss.texts}>
                      <p className={CourseCss.header}>
                        ???? ?????????? ???????????? ???? ?????????? ?????????????? ????????
                      </p>
                      <p className={CourseCss.para}>
                        ???? ?????????? ?????? ?????????????? ?? ???????? ???? ???????? ?????????????? ?????? ??????????????
                        ????????. ?????????????????? ?????????? ???????????? ???????? ?????????????? ???? ??????????????
                        ?????????? ?????? .
                      </p>
                    </div>
                  </div>
                  <div className={CourseCss.contextCol}>
                    <div className={CourseCss.icon}></div>
                    <div className={CourseCss.texts}>
                      <p className={CourseCss.header}>???????????? ?? ??????????</p>
                      <p className={CourseCss.para}>
                        ???????????? ?????????? ?????????? ?????????? ?????? ???? ???? ???????? ???? ?????????? ???????? ????
                        ?????????? ???? ????????. ?????????? ?????? ?????? ????????????????? ?????????? ?? ?????? ??????
                        ???????? ?????? ???? ?????????? ???????? ???????????? ???????????? ?????????? ???????? ????????. ????
                        ?????? ?????? ???? ???????????? ????????????????? ?????????????? ???????????? ???? ?????? ???????? ??
                        ???????? ???? ???????????? ???????? .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*                                                      row 4 */}
            {userInfo && userInfo.role === "admin" ? (
              <AdminComment postId={term._id} />
            ) : (
              <Comment redirectLink={`/course/${term._id}`} postId={term._id} />
            )}

            {/*                                                      footer */}
            <Footer />
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Course;
