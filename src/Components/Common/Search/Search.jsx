import React, { Component } from "react";
import SearchCss from "./Search.module.css";
import "../../../Assets/Fonts/Fonts.css";

class Search extends Component {
  render() {
    const { version, value, onChange } = this.props;

    return (
      <React.Fragment>
        <div className={`${SearchCss[version]}`}>
          <div className={` ${SearchCss.searchContentHolder}`}>
            <input
              type="text"
              placeholder="جستجو"
              value={value}
              onChange={(e) => onChange(e.currentTarget.value)}
            ></input>
            <img
              className={SearchCss.img1}
              src={
                require("../../../Assets/Images/LandingFirst/search-white.png")
                  .default
              }
              alt="not found"
            />
            <img
              className={SearchCss.img2}
              src={
                require("../../../Assets/Images/LandingFirst/search-blue.png")
                  .default
              }
              alt="not found"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
