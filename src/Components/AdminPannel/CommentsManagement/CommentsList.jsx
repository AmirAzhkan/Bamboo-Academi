import React, { useMemo, useState, useEffect } from "react";
import { GetAllComments } from "../../../Core/Services/Api/GetAllComments.api";
import { VarifyComment } from "../../../Core/Services/Api/VarifyComment.api";
import { GetTerm } from "../../../Core/Services/Api/GetTerm.api";
import { GetAllNews_Articles } from "../../../Core/Services/Api/GetAllNews-Articles.api";
import { toast } from "react-toastify";

import ReactTable from "../../Common/ReactTable/ReactTable";
import CommentDetailsModal from "../../Modal/CommentDetailsModal/CommentDetailsModal";
import Loading from "../../Common/Loading/Loading";

import CommentsListCss from "./CommentsList.module.css";

const CommentsList = () => {
  const columns = useMemo(
    () => [
      {
        Header: "نام کاربری",
        accessor: "username",
      },
      {
        Header: "ایمیل کاربر",
        accessor: "email",
      },
    ],
    []
  );

  const [Comments, setComments] = useState([]);
  const [CurrentComments, setCurrentComments] = useState([]);
  const [CommentedPost, setCommentedPost] = useState([]);
  const [RefreshComments, setRefreshComments] = useState(false);
  const [CommentModal, setCommentModal] = useState(false);
  const [LoadingState, setLoadingState] = useState(true);

  useEffect(async () => {
    const allComments = await GetAllComments();
    const commentsList = allComments.data.reverse();
    setComments(commentsList);

    setLoadingState(false);
  }, [RefreshComments]);

  const handleCommentDetailsModal = async (commentId) => {
    setLoadingState(true);
    const currentComment = Comments.filter((row) => row._id === commentId);
    setCurrentComments(currentComment[0]);

    //Access The Term Or Article That Have Current Comment ::
    const allTerms = await GetTerm();
    const allArticles = await GetAllNews_Articles();

    const commentedTermPost = allTerms.result.filter(
      (row) => row._id === currentComment[0].postId
    );

    const commentedArticlePost = allArticles.result.filter(
      (row) => row._id === currentComment[0].postId
    );

    setCommentedPost(
      commentedTermPost.length !== 0
        ? commentedTermPost[0]
        : commentedArticlePost[0]
    );

    setCommentModal(true);
    setLoadingState(false);
  };

  //Varify The Comment ::
  const handleVarifyComment = async (commentId) => {
    const varifiedComment = await VarifyComment(commentId);
    if (varifiedComment) toast.success("کامنت تایید شد");
    setRefreshComments((old) => !old);
  };

  return (
    <>
      {LoadingState ? (
        <Loading />
      ) : (
        <React.Fragment>
          <h4 className={CommentsListCss.titles}>لیست کل کامنت ها :</h4>
          {Comments && Comments.length !== 0 ? (
            <>
              <ReactTable
                columns={columns}
                data={Comments}
                selfStyle="coursesListTable"
                selfPaginate="coursesListPaginate"
                managementName="کامنت"
              >
                {{
                  Body: ({ row: { original } }) => (
                    <td className={CommentsListCss.manageTd}>
                      <span
                        className={CommentsListCss.commentsDetails}
                        onClick={() => handleCommentDetailsModal(original._id)}
                      >
                        <div className={`${CommentsListCss.tooltip}`}>
                          جزئیات کامنت
                        </div>
                      </span>
                      {original.verified === true ? (
                        <span className={CommentsListCss.Varify}>
                          <div className={`${CommentsListCss.tooltip} `}>
                            کامنت تایید شده
                          </div>
                        </span>
                      ) : (
                        <span
                          className={CommentsListCss.notVarify}
                          onClick={() => handleVarifyComment(original._id)}
                        >
                          <div
                            className={`${CommentsListCss.tooltip} ${CommentsListCss.notVarifyTooltip}`}
                          >
                            تایید کامنت
                          </div>
                        </span>
                      )}
                    </td>
                  ),
                }}
              </ReactTable>
              <CommentDetailsModal
                show={CommentModal}
                setShow={setCommentModal}
                currentComment={CurrentComments}
                commentedPost={CommentedPost}
                refreshComments={setRefreshComments}
              />
            </>
          ) : (
            <p className={CommentsListCss.CommentsStatus}>
              کامنتی برای نمایش وجود ندارد
            </p>
          )}
        </React.Fragment>
      )}
    </>
  );
};

export default CommentsList;
