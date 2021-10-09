import React, { useEffect } from "react";
import Card from "./Card";
import Button from "../Common/Button/Button";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import CardsCss from "./CoursesCards.module.css";
import "./CardsAnimation.css";

export const CoursesCards = () => {
  useEffect(() => {
    Aos.init({
      disable: function () {
        var maxWidth = 900;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

  return (
    // Reminde That :: If You Want To Set Some Animations For SVG Tags Based On AOS Library
    // You Should To Set The Attributes Of AOS In Div Is A Parrent Of SVG Tag ...
    <div
      className={CardsCss.holder}
      data-aos="fade"
      data-aos-offset="150"
      data-aos-easing="linear"
      data-aos-duration="700"
    >
      <svg
        className={CardsCss.greenBoxStyle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 383 383"
      >
        <rect
          id="Rectangle_51"
          data-name="Rectangle 51"
          width="380"
          height="380"
          transform="translate(1.5 1.5)"
          fill="none"
          stroke="#09b28b"
          stroke-width="2"
        />
      </svg>

      <div className={CardsCss.leftCardHolder}>
        <Link to="courses/course/6118c9012fdc4200220d69ed" target="_blank">
          <Card
            cardStyle={`${CardsCss.cardsSameStyle} ${CardsCss.leftTopCard}`}
            buttonText={"دوره جاوا اسکریپت"}
          />
        </Link>
        <Link to="courses/course/612214d11585d20023ff9e5f" target="_blank">
          <Card
            cardStyle={`${CardsCss.leftBottomCard} ${CardsCss.cardsSameStyle}`}
            buttonText={"دوره بوت استرپ"}
          />
        </Link>
      </div>
      <div className={CardsCss.rightCardHolder}>
        <Link to="courses/course/612214ab1585d20023ff9e5d" target="_blank">
          <Card
            cardStyle={`${CardsCss.cardsSameStyle} ${CardsCss.rightTopCard}`}
            buttonText={"دوره سی شارپ"}
          />
        </Link>
        <Link to="courses/course/612214c11585d20023ff9e5e" target="_blank">
          <Card
            cardStyle={`${CardsCss.cardsSameStyle} ${CardsCss.rightBottomCard}`}
            buttonText={"دوره جاوا پیشرفته"}
          />
        </Link>
      </div>

      <ul className={CardsCss.miniCards}>
        <li className={CardsCss.miniCard1}>
          <Button
            buttonText="جاوا اسکریپت"
            buttonStyle="buttonWhiteToBlue"
            buttonPosition="miniCoursesCards"
          />
        </li>
        <li className={CardsCss.miniCard2}>
          <Button
            buttonText="بوت استرپ"
            buttonStyle="buttonWhiteToBlue"
            buttonPosition="miniCoursesCards"
          />
        </li>
        <li className={CardsCss.miniCard3}>
          <Button
            buttonText="جاوا"
            buttonStyle="buttonWhiteToBlue"
            buttonPosition="miniCoursesCards"
          />
        </li>

        <li className={CardsCss.miniCard4}>
          <Button
            buttonText="سی شارپ"
            buttonStyle="buttonWhiteToBlue"
            buttonPosition="miniCoursesCards"
          />
        </li>
      </ul>
    </div>
  );
};

export default CoursesCards;
