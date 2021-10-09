import React from "react";
import { Link } from "react-router-dom";

import CouCardCss from "./CoursesCard.module.css";
import "../../../Assets/Fonts/Fonts.css";

const CoursesCard = (props) => {
  const {
    cardHolderSize,
    termId,
    imageSrc,
    title,
    teacher,
    capacity,
    price,
    onClick,
  } = props;
  return (
    <React.Fragment>
      <div
        className={`shab ${CouCardCss.cardHolder} ${CouCardCss[cardHolderSize]}`}
      >
        <div className={CouCardCss.imageHolder}>
          <img src={imageSrc} alt="عکس دوره" />
          <div className={CouCardCss.imageMask}>
            <button
              onClick={onClick}
              // type="button"
              // className="btn rounded-0"
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal"
            >
              جزئیات
            </button>
            <Link
              className={CouCardCss.respLink}
              to={`/courses/course/${termId}`}
            >
              مشاهده دوره
            </Link>
          </div>
        </div>
        <div className={CouCardCss.detailsHolder}>
          <h4 className="shabbold">دوره : {title}</h4>
          <span>مدرس : {teacher}</span>
          <span>ظرفیت : {capacity} نفر</span>
          <div className={CouCardCss.line}></div>
          <span className={CouCardCss.price}>{price} تومان</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoursesCard;
