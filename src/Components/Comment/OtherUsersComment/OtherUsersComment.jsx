import React from "react";

import CommentCard from "../../Common/CommentCard/CommentCard";

import OtherUsersCommentCss from "./OtherUsersComment.module.css";
import "../../../Assets/Fonts/Fonts.css";

const CurrentUserComment = ({ postId, commentsList, currentUser }) => {
  //Access The All Comments Of The Current Post ::
  const comments = commentsList.filter((row) => row.postId === postId);

  //Access The All Comments That Other User Sended On This Current Post Except Current User  ::
  const currentOtherUsersComment = comments.filter(
    (row) => row.email !== currentUser.email
  );

  //Access All Varified Comments ::
  const verifiedComments = currentOtherUsersComment.filter(
    (row) => row.verified === true
  );

  return (
    <React.Fragment>
      <div className={`row ${OtherUsersCommentCss.holder}`}>
        <h4>نظر های ثبت شده دیگر کاربران :</h4>
        <div className={OtherUsersCommentCss.userCommentsHolder}>
          {verifiedComments.length !== 0 ? (
            verifiedComments
              .reverse()
              .map((comment) => (
                <CommentCard
                  currentUser={currentUser}
                  commentUserName={comment.username}
                  commentText={comment.comment}
                  commentDate={comment.createDate}
                  commentAnswer={comment.answer}
                />
              ))
          ) : (
            <p>نظری از سوی دیگر کاربران درباره ی این پست وجود ندارد</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentUserComment;
