import React, { useEffect } from "react";
import Button from "../Common/Button/Button";

import Aos from "aos";
import "aos/dist/aos.css";
import CardsCss from "./CoursesCards.module.css";
import "./CardsAnimation.css";

export const Card = (props) => {
  useEffect(() => {
    Aos.init({
      disable: function () {
        var maxWidth = 900;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

  const { cardStyle, buttonText } = props;

  return (
    <div
      className={`${CardsCss.cardFlex} ${cardStyle}`}
      data-aos="landingCoursesCardAnim"
      data-aos-offset="200"
      data-aos-easing="linear"
      data-aos-duration="700"
    >
      <Button
        buttonText={buttonText}
        buttonStyle="buttonWhiteToBlue"
        buttonPosition="buttonCoursesCards"
      />
    </div>
  );
};

export default Card;
