import React, { Component } from "react";
import { Link } from "react-router-dom";
import SliderCss from "./Slider.module.css";
import "../../Assets/Fonts/Fonts.css";

class Slide extends Component {
  render() {
    const {
      imageSrc,
      imageAltText,
      slideDetails,
      activeSlide,
      _id,
    } = this.props;

    return (
      <div
        className={`carousel-item mx-0 ${activeSlide}`}
        style={{
          height: "100%",
          position: "relative",
          transition: "0.6s ",
          backfaceVisibility: "visible",
        }}
      >
        <Link to={`/articles/article/${_id}`}>
          <img
            src={imageSrc}
            style={{ height: "100%" }}
            className="d-block w-100"
            alt="image is loading"
          />
          <div
            className={`d-sm-block p-0 ${SliderCss.sliderDetailHolder}`}
            style={{ width: "100%" }}
          >
            <p className={`shab ${SliderCss.sliderDetailStyle}`}>
              {slideDetails}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Slide;
