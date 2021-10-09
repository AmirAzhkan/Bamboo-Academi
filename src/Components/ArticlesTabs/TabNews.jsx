import React, { useState, useEffect } from "react";
import ArcticlesCard from "../ArticlesCard/ArticlesCard";
import Pagination from "../../Components/Common/Pagination/Pagination";

import { Paginate } from "../../Core/Utils/Paginate";

import atc from "./ArticlesTabs.module.css";

const TabNews = ({
  news,
  query,
  count,
  setCount,
  currentPage,
  setCurrentPage,
}) => {
  const [newsData, setNewsData] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getNews = async () => {
    setNewsData(news);
    setCount(news.length);
  };
  useEffect(() => {
    getNews();
  }, []);

  let filtered = news;
  if (query) {
    filtered = news.filter((m) =>
      m.title.toLowerCase().startsWith(query.toLowerCase())
    );
  }

  const allNews = Paginate(filtered, currentPage, pageSize);

  if (query) {
    setCount(allNews.length);
  } else {
    setCount(news.length);
  }

  return (
    <React.Fragment>
      {filtered.length !== 0 ? (
        <>
          <div className={`col-md-12 p-0 ${atc.tabHolder}`}>
            {/* Tab */}

            <div className="tab-content my-5" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="articles"
                role="tabpanel"
                aria-labelledby="articles-tab"
              >
                {allNews.map((article) => (
                  <ArcticlesCard
                    key={article._id}
                    category={article.category}
                    iid={article._id}
                    image={article.image}
                    title={article.title}
                    text={article.text}
                    version="articlesCard"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={`col-md-12 ${atc.paginatHolder}`}>
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              currentPage={currentPage}
              activeStyle="coursesActive"
              paginateSelfStyle="coursesPaginat"
              nextPaginat="nextCoursesPaginat"
              pervPaginat="pervCoursesPaginat"
            />
          </div>
        </>
      ) : (
        <p className={atc.articlesStatus}>خبری برای نمایش وجود ندارد</p>
      )}
    </React.Fragment>
  );
};

export default TabNews;
