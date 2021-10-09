import React, { Component, useState } from "react";
import Button from "../Common/Button/Button";
import { Link } from "react-router-dom";
import { FaArrowCircleUp } from "react-icons/fa";
import ArtcCardCss from "./ArticlesCard.module.css";

const ArticlesCard = ({ version, image, title, iid, category, text }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${ArtcCardCss.cardHolderBase} ${ArtcCardCss[version]}`}>
      <Link to={`/articles/article/${iid}`}>
        <div className={ArtcCardCss.imgHolder} onClick={scrollToTop}>
          <img src={image} alt="عکس مقاله" />

          <div className={ArtcCardCss.imgMask}>
            <Button
              buttonText={"مشاهده"}
              buttonStyle="buttonGrayToWhite"
              buttonPosition="buttonArticles"
            />
          </div>
        </div>
      </Link>
      <div className={ArtcCardCss.detailsHolder}>
        <p>{title.length > 30 ? title.substring(0, 34) + "..." : title}</p>
        <div>
          <span className={`shab ${ArtcCardCss.view}`}>بازدید : 250 نفر</span>
          <span className={`shab ${ArtcCardCss.author}`}>نویسنده : اسدی</span>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
