import React, { useState } from "react";
import moment from "moment-jalaali";
import { toast } from "react-toastify";
import { GetAllComments } from "../../../Core/Services/Api/GetAllComments.api";
import { VarifyComment } from "../../../Core/Services/Api/VarifyComment.api";

import AnswerCommentModal from "../../Modal/AnswerCommentModal/AnswerCommentModal";

import CommentCardCss from "./CommentCard.module.css";
import "../../../Assets/Fonts/Fonts.css";

const CommentCard = ({
  currentUser,
  commentUserName,
  commentId,
  commentText,
  commentDate,
  commentAnswer,
  commentVarified,
  refreshCommentsList,
}) => {
  const date = commentDate.split("T")[0].replace(/-/g, "/");

  const shamsiCommentDate = moment(date, "YYYY/MM/DD")
    .locale("fa")
    .format("jYYYY/jMM/jDD");

  const [CurrentComment, setCurrentComment] = useState([]);
  const [ShowAnswerCommentModal, setShowAnswerCommentModal] = useState(false);

  //Answer Comment From Admin ::
  const handleAnswerComment = async (commentId) => {
    try {
      setShowAnswerCommentModal(true);
      const allComments = await GetAllComments();

      const currentComment = allComments.data.filter(
        (row) => row._id === commentId
      );

      setCurrentComment(currentComment[0]);
    } catch (error) {}
  };

  //Varify Comment From Admin ::
  const handleVarifyComment = async (commentId) => {
    try {
      const varifiedComment = await VarifyComment(commentId);
      if (varifiedComment) {
        toast.success("کامنت با موفقیت تایید شد");
        refreshCommentsList((old) => !old);
      }
    } catch (error) {}
  };

  return (
    <div className={CommentCardCss.commentCardHolder}>
      <div className={CommentCardCss.commentHolder}>
        <span>نظر از سوی : {commentUserName}</span>
        <div className={CommentCardCss.comment}>
          <p className={CommentCardCss.commentText}>{commentText}</p>
          <div className={CommentCardCss.commentDetails}>
            <p>
              تاریخ ارسال : <span>{shamsiCommentDate}</span>
            </p>
            {currentUser.role === "admin" && (
              <>
                <div className={CommentCardCss.mangeComment}>
                  <span
                    className={CommentCardCss.answerToComment}
                    onClick={() => handleAnswerComment(commentId)}
                  ></span>
                  <span
                    className={
                      commentVarified === true
                        ? CommentCardCss.varifiedComment
                        : CommentCardCss.notVarifiedComment
                    }
                    onClick={() => handleVarifyComment(commentId)}
                  ></span>
                </div>
                <AnswerCommentModal
                  show={ShowAnswerCommentModal}
                  setShow={setShowAnswerCommentModal}
                  currentComment={CurrentComment}
                  refreshCommentsList={refreshCommentsList}
                />
              </>
            )}
          </div>
        </div>
      </div>
      {commentAnswer ? (
        <div className={CommentCardCss.answerHolder}>
          <span>پاسخ ادمین :</span>
          <div className={CommentCardCss.answerDetails}>
            <p className={CommentCardCss.answerText}>{commentAnswer}</p>
          </div>
        </div>
      ) : (
        <p className={CommentCardCss.answerStatus}>
          پاسخی برای این نظر شما وجود ندارد
        </p>
      )}
    </div>
  );
};

export default CommentCard;
