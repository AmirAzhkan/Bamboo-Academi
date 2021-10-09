import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { GetArticle } from "../../Core/Services/Api/GetArticle.api";
import { GetNews } from "../../Core/Services/Api/GetNews.api";
import Menu from "../../Components/Common/Menu/Menu";
import Search from "../../Components/Common/Search/Search";
import Footer from "../../Components/Common/Footer/Footer";
import ArticlesTabs from "../../Components/ArticlesTabs/ArticlesTabs";
import TabArticle from "../../Components/ArticlesTabs/TabArticle";
import TabNews from "../../Components/ArticlesTabs/TabNews";
import Loading from "../../Components/Common/Loading/Loading";

import ArticlesCss from "./Articles.module.css";
import "./Articles.css";
import "../../Assets/Fonts/Fonts.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [news, setNews] = useState([]);
  const [LoadingState, setLoadingState] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);

  const handleSearch = (query) => {
    setCurrentPage(1);
    setSearchQuery(query);
  };
  useEffect(async () => {
    try {
      const articlesData = await GetArticle();
      setArticles(articlesData.result);

      const newsData = await GetNews();
      setNews(newsData.result);
      setLoadingState(false);
    } catch (error) {}
  }, []);

  return (
    <div className="container-fluid p-0">
      {LoadingState ? (
        <Loading />
      ) : (
        <>
          {/* Row 1 : Header */}
          <div className="row" style={{ position: "relative" }}>
            <div className={` col-md-12 ${ArticlesCss.header}`}>
              <div className={`${ArticlesCss.headerHolder}`}>
                <Menu version="whiteMenu" selectMenuTab="articlesMenuTab" />
                <Search
                  version="searchArticles"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <div className={` ${ArticlesCss.headerMask}`}></div>
            </div>

            {/*                                                                   Row 2 : Articles Content */}

            <div className={`${ArticlesCss.content}`}>
              <div className={`${ArticlesCss.contentHolder}`}>
                <h2 className={`lale`}>اخبار و مقالات</h2>

                <ArticlesTabs />
                <Route
                  path="/articles/tabArticle"
                  render={() => (
                    <TabArticle
                      articles={articles}
                      query={searchQuery}
                      count={count}
                      setCount={setCount}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  )}
                />
                <Route
                  path="/articles/tabNews"
                  render={() => (
                    <TabNews
                      news={news}
                      query={searchQuery}
                      count={count}
                      setCount={setCount}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          {/*                                                                   Row 3 : Footer */}

          <Footer />
        </>
      )}
    </div>
  );
};

export default Articles;
