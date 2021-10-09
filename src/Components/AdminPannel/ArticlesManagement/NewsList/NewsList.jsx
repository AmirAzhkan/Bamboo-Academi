import React, { useMemo, useState, useEffect } from "react";
import { GetNews } from "../../../../Core/Services/Api/GetNews.api";
import { GetArticleById } from "../../../../Core/Services/Api/GetArticleById.api";
import { DeleteArticle } from "../../../../Core/Services/Api/DeleteNews-Articles.api";
import ReactTable from "../../../Common/ReactTable/ReactTable";
import EditArticleModal from "../../../Modal/EditArticleModal/EditArticleModal";
import Loading from "../../../Common/Loading/Loading";

import NewsListCss from "./NewsList.module.css";

const NewsList = () => {
  const columns = useMemo(
    () => [
      {
        Header: "عنوان خبر",
        accessor: "title",
      },
    ],
    []
  );

  const [NewsList, setNewsList] = useState([]);
  const [NewsInfo, setNewsInfo] = useState([]);
  const [RefreshNewsInfo, setRefreshNewsInfo] = useState(false);
  const [LoadingState, setLoadingState] = useState(true);
  const [EditNewsModalShow, setEditNewsModalShow] = useState(false);

  useEffect(async () => {
    try {
      const data = await GetNews();
      const newsData = data.result;
      setNewsList(newsData);
      setLoadingState(false);
    } catch (error) {}
  }, [RefreshNewsInfo]);

  //Editing News =>
  const handleEditNews = async (newsId) => {
    try {
      setEditNewsModalShow(true);
      const news = await GetArticleById(newsId);
      setNewsInfo(news.result);
    } catch (error) {}
  };

  //Deleting News =>
  const handleDeleteNews = async (newsId) => {
    const news = await DeleteArticle(newsId);

    setNewsList((old) => {
      let newData = [...old];
      let newNewsData = newData;
      newNewsData = newNewsData.filter((item) => item._id !== newsId);
      newData = newNewsData;
      return newData;
    });
  };

  return (
    <>
      {LoadingState ? (
        <Loading />
      ) : (
        <React.Fragment>
          {NewsList && NewsList.length != 0 ? (
            <>
              <h4 className={NewsListCss.titles}>لیست کل اخبار :</h4>
              <ReactTable
                columns={columns}
                data={NewsList}
                selfStyle="articlesListTable"
                selfPaginate="articlesListPaginate"
                managementName="خبر"
              >
                {{
                  Body: ({ row: { original } }) => (
                    <td className={NewsListCss.manageTd}>
                      <span
                        className={NewsListCss.editNews}
                        onClick={() => handleEditNews(original._id)}
                      >
                        <div
                          className={`${NewsListCss.tooltip} ${NewsListCss.tooltipGreen}`}
                        >
                          ویرایش اطلاعات
                        </div>
                      </span>
                      <span
                        className={NewsListCss.deleteNews}
                        onClick={() => handleDeleteNews(original._id)}
                      >
                        <div
                          className={`${NewsListCss.tooltip} ${NewsListCss.tooltipRed}`}
                        >
                          حذف خبر
                        </div>
                      </span>
                    </td>
                  ),
                }}
              </ReactTable>
              <EditArticleModal
                show={EditNewsModalShow}
                setShow={setEditNewsModalShow}
                articleInfo={NewsInfo}
                refreshArticlesInfo={setRefreshNewsInfo}
              />
            </>
          ) : (
            <>
              <h4 className={NewsListCss.titles}>لیست کل اخبار :</h4>
              <p className={NewsListCss.newsStatus}>
                خبری برای نمایش وجود ندارد
              </p>
            </>
          )}
        </React.Fragment>
      )}
    </>
  );
};

export default NewsList;
