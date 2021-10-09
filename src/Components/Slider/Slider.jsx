import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import { GetNews } from "../../Core/Services/Api/GetNews.api";
import Slide from "./Slide";
import Aos from "aos";
import "aos/dist/aos.css";
import SliderCss from "./Slider.module.css";

const Slider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    try {
      const termz = await GetNews();
      setArticles(termz.result);
    } catch (error) {}
  }, []);

  const counts = articles.filter((article) => article._id != articles[0]._id);

  return (
    <React.Fragment>
      <div
        id="carouselExampleCaptions"
        className={`${SliderCss.slider} slide carousel`}
        data-bs-ride="carousel"
        data-aos="fade-right"
        data-aos-offset="250"
        data-aos-easing="linear"
        data-aos-duration="700"
      >
        <div
          className="carousel-inner"
          style={{ height: "100%", cursor: "pointer" }}
        >
          <Slide
            key={articles[0] && articles[0]._id}
            _id={articles[0] && articles[0]._id}
            imageSrc={articles[0] && articles[0].image}
            slideDetails={
              articles[0] &&
              (articles[0].title.length > 48
                ? articles[0].title.substring(0, 48) + "..."
                : articles[0].title)
            }
            activeSlide={"active"}
          />
          {counts.map((article) => (
            <Slide
              key={article && article._id}
              _id={article && article._id}
              imageSrc={article && article.image}
              slideDetails={
                article &&
                (article.title.length > 48
                  ? article.title.substring(0, 48) + "..."
                  : article.title)
              }
            />
          ))}
        </div>
        <svg
          className={SliderCss.buttonHolder}
          xmlns="http://www.w3.org/2000/svg"
          width="444"
          height="104"
          viewBox="0 0 444 104"
        >
          <rect
            id="Rectangle_53"
            data-name="Rectangle 53"
            width="440"
            height="100"
            transform="translate(2 2)"
            fill="none"
            stroke="#088568"
            stroke-width="2"
          />
        </svg>
        <button
          className={`${SliderCss.buttonLeft}`}
          aria-hidden="true"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        ></button>
        <button
          className={`${SliderCss.buttonRight}`}
          aria-hidden="true"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        ></button>
      </div>
    </React.Fragment>
  );
};

export default Slider;
