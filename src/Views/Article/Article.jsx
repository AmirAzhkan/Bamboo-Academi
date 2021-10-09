import React, { Component, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import Menu from "../../Components/Common/Menu/Menu";
import Footer from "../../Components/Common/Footer/Footer";
import ArcticlesCard from "../../Components/ArticlesCard/ArticlesCard";
import Comment from "../../Components/Comment/Comment";
import AdminComment from "../../Components/AdminComment/AdminComment";
import Loading from "../../Components/Common/Loading/Loading";

import ArticleCss from "../Article/Article.module.css";
import { GetArticleById } from "../../Core/Services/Api/GetArticleById.api";
import { GetArticle } from "../../Core/Services/Api/GetArticle.api";
import { getCurrentUser } from "../../Core/Services/AuthServices/AuthServices";

const Article = (props) => {
  const [article, setArticle] = useState({});
  const [articles, setArticles] = useState([]);
  const [LoadingState, setLoadingState] = useState(true);
  const articleId = props.match.params.iid;

  // const getArticleById = async () => {
  //   const article = await GetArticleById(articleId);
  //   setArticle(article.result);
  // };

  const userInfo = getCurrentUser();

  useEffect(async () => {
    try {
      const article = await GetArticleById(articleId);
      setArticle(article.result);
      const termz = await GetArticle();
      setArticles(termz.result);
      setLoadingState(false);
    } catch (error) {}
    //getArticleById();
  }, [articleId]);

  // const getAllArticles = async () => {
  //   const termz = await GetArticle();
  //   setArticles(termz.result);
  // };
  // useEffect(() => {
  //   getAllArticles();
  // }, []);

  return (
    <React.Fragment>
      <div className="container-fluid">
        {LoadingState ? (
          <Loading />
        ) : (
          <>
            <ToastContainer bodyClassName={`shab ${ArticleCss.toastStyle}`} />
            {/* Row 1 */}
            <div className="row">
              <div className={`col-md-12 ${ArticleCss.articleDiv}`}>
                <img
                  className={`row ${ArticleCss.articleImg}`}
                  src={article.image}
                  alt="not found"
                />
                <div className={` ${ArticleCss.articleHolder}`}>
                  <Menu version="whiteMenu" />
                  <div className={ArticleCss.articleBaner}>
                    <h2>{article.title}</h2>
                    <div className={ArticleCss.articleCategory}>
                      <p>#</p>
                      <p>{article.category}</p>
                    </div>
                    <ul className={ArticleCss.articleRateHolder}>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`${ArticleCss.articleMask}`}></div>
            </div>
            {/* Row 2 */}
            <div className={ArticleCss.articleContent}>
              <div className={ArticleCss.contentHolder}></div>
              <div className={ArticleCss.rightDiv}>
                <h2>{article.title}</h2>
                <p>{article.text}</p>
              </div>
              <div className={ArticleCss.leftDiv}>
                <div className={ArticleCss.articleSuggestions}>
                  <h4>مقالات پیشنهادی</h4>
                  <div className={ArticleCss.cardsHolder}>
                    {articles.map((article) => (
                      <ArcticlesCard
                        key={article._id}
                        iid={article._id}
                        category={article.category}
                        image={article.image}
                        title={article.title}
                        text={article.text}
                        version="articleCard"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/*                                                      row 3 */}
            {userInfo && userInfo.role === "admin" ? (
              <AdminComment postId={article._id} />
            ) : (
              <Comment
                redirectLink={`/article/${article._id}`}
                postId={article._id}
              />
            )}
            <Footer />
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Article;
