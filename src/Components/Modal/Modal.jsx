import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProgressBar from "../Common/ProgressBar/ProgressBar";

import ModalCss from "./Modal.module.css";

const Modal = ({ term }) => {
  const {
    course,
    title,
    teacher,
    capacity,
    startDate,
    endDate,
    cost,
    students,
  } = term;

  // const progressBar =
  //   term && term !== undefined
  //     ? ((students && students.length) / capacity) * 100
  //     : 20;

  const ConvertDateHandler = (date) => {
    const dateObj = new Date(date);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    let newdate = year + "/" + month + "/" + day;
    return newdate;
  };

  return (
    <React.Fragment>
      {term && term !== undefined ? (
        <div
          className={`modal fade  ${ModalCss.modalMask}`}
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"

          // data-bs-backdrop="false"
        >
          <div
            className={`modal-dialog modal-dialog-centered ${ModalCss.modalHolder}`}
          >
            <div className="modal-content p-4 rounded-0 border-0">
              <button
                type="button"
                className={`btn-close ${ModalCss.closeModal}`}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-body p-0 shab">
                <div className="row m-0">
                  <div className={`col-md-6 p-0 ${ModalCss.modDetailsHolder}`}>
                    <h5 className="modal-title shabbold" id="exampleModalLabel">
                      دوره : {title}
                    </h5>
                    <span>مدرس : {teacher && teacher.fullName}</span>
                    <span>ظرفیت : {capacity} نفر</span>
                    <span>
                      تاریخ شروع : {ConvertDateHandler(term.startDate)}
                    </span>
                    <span>
                      تاریخ پایان : {ConvertDateHandler(term.endDate)}
                    </span>
                    <span className={`${ModalCss.modalPrice}`}>
                      <span>قیمت : </span>
                      {cost} تومان
                    </span>
                  </div>
                  <div className={`col-md-6 p-0 ${ModalCss.modImgHolder}`}>
                    <div className={ModalCss.imageBox}>
                      <img src={course && course.image} alt="عکس دوره" />
                    </div>
                  </div>
                </div>
                <div className={`row m-0 ${ModalCss.progressHolder}`}>
                  <span className="p-0">وضعیت :</span>
                  <ProgressBar
                    progress="50%"
                    progressCss="coursesProgress"
                    progressBarCss="coursesProgressBar"
                  />
                </div>
              </div>
              <div className="modal-footer p-0">
                <Link to={`/courses/course/${term._id}`}>
                  <button
                    type="button"
                    className={`btn shab rounded-0 ${ModalCss.courseButton}`}
                  >
                    مشاهده کامل
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>not find</div>
      )}
    </React.Fragment>
  );
};

export default Modal;
