import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../Views/Articles/Articles.css";
import atc from "./ArticlesTabs.module.css";
// atc : Articles Tabs css

const ArticlesTabs = () => {
  return (
    <React.Fragment>
      <ul
        className={`nav nav-tabs ${atc.tabStyle}`}
        id="myTab"
        role="tablist"
        style={{ borderBottom: "2px solid rgba(0, 68, 88, 0.4)" }}
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            style={{ position: "relative", top: "1px" }}
            id="articles-tab"
            data-bs-toggle="tab"
            data-bs-target="#articles"
            type="button"
            role="tab"
            aria-controls="articles"
            aria-selected="true"
          >
            <Link to="/articles/tabArticle" className={atc.Linkz}>
              مقالات
            </Link>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            style={{ position: "relative", top: "1px" }}
            id="news-tab"
            data-bs-toggle="tab"
            data-bs-target="#news"
            type="button"
            role="tab"
            aria-controls="news"
            aria-selected="false"
          >
            <Link to="/articles/tabNews" className={atc.Linkz}>
              اخبار
            </Link>
          </button>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default ArticlesTabs;
