import React, { useMemo, useState, useEffect } from "react";
import { GetArticle } from "../../../../Core/Services/Api/GetArticle.api";
import { GetArticleById } from "../../../../Core/Services/Api/GetArticleById.api";
import { DeleteArticle } from "../../../../Core/Services/Api/DeleteNews-Articles.api";
import ReactTable from "../../../Common/ReactTable/ReactTable";
import EditArticleModal from "../../../Modal/EditArticleModal/EditArticleModal";
import Loading from "../../../Common/Loading/Loading";

import ArticlesListCss from "./ArticlesList.module.css";

const ArticlesList = () => {
  const columns = useMemo(
    () => [
      {
        Header: "عنوان مقاله",
        accessor: "title",
      },
    ],
    []
  );

  const [ArticlesList, setArticlesList] = useState([]);
  const [ArticleInfo, setArticleInfo] = useState([]);
  const [RefreshArticlesInfo, setRefreshArticlesInfo] = useState(false);
  const [LoadingState, setLoadingState] = useState(true);
  const [EditArticleModalShow, setEditArticleModalShow] = useState(false);

  useEffect(async () => {
    try {
      const data = await GetArticle();
      const articlesData = data.result;
      setArticlesList(articlesData);
      setLoadingState(false);
    } catch (error) {}
  }, [RefreshArticlesInfo]);

  //Edit The Article =>
  const handleEditArticleModal = async (articleId) => {
    try {
      setEditArticleModalShow(true);
      const article = await GetArticleById(articleId);
      setArticleInfo(article.result);
    } catch (error) {}
  };

  //Deleting The Article =>
  const handleDeleteArticle = async (articleId) => {
    const article = await DeleteArticle(articleId);

    setArticlesList((old) => {
      let newData = [...old];
      let newArticlesData = newData;
      newArticlesData = newArticlesData.filter(
        (item) => item._id !== articleId
      );
      newData = newArticlesData;
      return newData;
    });
  };

  return (
    <>
      {LoadingState ? (
        <Loading />
      ) : (
        <React.Fragment>
          <h4 className={ArticlesListCss.titles}>لیست کل مقالات :</h4>
          {ArticlesList && ArticlesList.length != 0 ? (
            <>
              <ReactTable
                columns={columns}
                data={ArticlesList}
                selfStyle="articlesListTable"
                selfPaginate="articlesListPaginate"
                managementName="مقاله"
              >
                {{
                  Body: ({ row: { original } }) => (
                    <td className={ArticlesListCss.manageTd}>
                      <span
                        className={ArticlesListCss.editArticle}
                        onClick={() => handleEditArticleModal(original._id)}
                      >
                        <div
                          className={`${ArticlesListCss.tooltip} ${ArticlesListCss.tooltipGreen}`}
                        >
                          ویرایش اطلاعات
                        </div>
                      </span>
                      <span
                        className={ArticlesListCss.deleteArticle}
                        onClick={() => handleDeleteArticle(original._id)}
                      >
                        <div
                          className={`${ArticlesListCss.tooltip} ${ArticlesListCss.tooltipRed}`}
                        >
                          حذف مقاله
                        </div>
                      </span>
                    </td>
                  ),
                }}
              </ReactTable>
              <EditArticleModal
                show={EditArticleModalShow}
                setShow={setEditArticleModalShow}
                articleInfo={ArticleInfo}
                refreshArticlesInfo={setRefreshArticlesInfo}
              />
            </>
          ) : (
            <p className={ArticlesListCss.ArticlesStatus}>
              مقاله ای برای نمایش وجود ندارد
            </p>
          )}
        </React.Fragment>
      )}
    </>
  );
};

export default ArticlesList;
