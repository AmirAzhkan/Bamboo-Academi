import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import rmc from "./ReactModal.module.css";
// rmc : react modal css
import { ConvertDateHandler } from "../../Core/Utils/DateFormater";
import "./ReactModal.css";

Modal.setAppElement("#root");

const ReactModal = ({ term, show, setShow }) => {
  const {
    _id,
    course,
    title,
    teacher,
    capacity,
    startDate,
    endDate,
    cost,
    students,
  } = term;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        className={rmc.reactModal}
      >
        <div onClick={() => setShow(false)} className={rmc.closeModal}></div>
        <div className={rmc.detailsHolder}>
          <div className={rmc.imageSection}>
            <div>
              <img src={course && course.image} alt="not-found" />
            </div>
            <Link to={`/courses/course/${_id}`}>
              <button onClick={scrollToTop}>مشاهده دوره</button>
            </Link>
          </div>
          <div className={rmc.detailsSection}>
            <h2>دوره : {title}</h2>
            <h4>استاد : {teacher && teacher.fullName}</h4>
            <h6>ظرفیت : {capacity} نفر</h6>
            <h6>تاریخ شروع : {ConvertDateHandler(startDate)}</h6>
            <h6>تاریخ پایان : {ConvertDateHandler(endDate)}</h6>
            <h6>قیمت : {cost} تومان</h6>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReactModal;
