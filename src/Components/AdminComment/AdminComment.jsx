import React, { useState, useEffect } from "react";
import { getCurrentUser } from "../../Core/Services/AuthServices/AuthServices";
import { GetAllComments } from "../../Core/Services/Api/GetAllComments.api";

import CommentCard from "../Common/CommentCard/CommentCard";

import AdminCommentCss from "./AdminComment.module.css";

const AdminComment = ({ postId }) => {
  const [CommentsList, setCommentsList] = useState([]);
  const [RefreshCommentsList, setRefreshCommentsList] = useState(false);

  //Access The All Comments Of The Current Post ::
  const postComments = CommentsList.filter((row) => row.postId === postId);

  const user = getCurrentUser();

  useEffect(async () => {
    const commentsList = await GetAllComments();
    setCommentsList(commentsList.data);
  }, [RefreshCommentsList]);

  return (
    <React.Fragment>
      <div className={AdminCommentCss.holder}>
        <h4>نظرات کاربران درباره ی این پست :</h4>
        <div className={AdminCommentCss.commentsHolder}>
          {postComments.length !== 0 ? (
            postComments
              .reverse()
              .map((comment) => (
                <CommentCard
                  currentUser={user}
                  commentUserName={comment.username}
                  commentId={comment._id}
                  commentText={comment.comment}
                  commentDate={comment.createDate}
                  commentAnswer={comment.answer}
                  commentVarified={comment.verified}
                  refreshCommentsList={setRefreshCommentsList}
                />
              ))
          ) : (
            <p>نظری درباره ی این پست ثبت نشده است</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminComment;
