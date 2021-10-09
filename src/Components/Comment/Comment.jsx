import React, { useState, useEffect } from "react";
import { getCurrentUser } from "../../Core/Services/AuthServices/AuthServices";
import { GetAllComments } from "../../Core/Services/Api/GetAllComments.api";

import SendComment from "./SendComment/SendComment";
import CurrentUserComment from "./CurrentUserComment/CurrentUserComment";
import OtherUsersComment from "./OtherUsersComment/OtherUsersComment";

import CommentCss from "./Comment.module.css";

const Comment = ({ redirectLink, postId }) => {
  const [CommentsList, setCommentsList] = useState([]);
  const [RefreshCommentsList, setRefreshCommentsList] = useState(false);

  const user = getCurrentUser();

  useEffect(async () => {
    const commentsList = await GetAllComments();
    setCommentsList(commentsList.data);
  }, [RefreshCommentsList]);

  return (
    <React.Fragment>
      <SendComment
        redirectLink={redirectLink}
        postId={postId}
        commentsList={CommentsList}
        currentUser={user}
        refreshCommentsList={setRefreshCommentsList}
      />
      {user && user.role === "student" && (
        <>
          <CurrentUserComment
            postId={postId}
            commentsList={CommentsList}
            currentUser={user}
          />
          <OtherUsersComment
            postId={postId}
            commentsList={CommentsList}
            currentUser={user}
          />
        </>
      )}
    </React.Fragment>
  );
};

export default Comment;
