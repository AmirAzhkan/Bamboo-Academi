import React from "react";

import CommentCard from "../../Common/CommentCard/CommentCard";

import CurrentUserCommentCss from "./CurrentUserComment.module.css";
import "../../../Assets/Fonts/Fonts.css";

const CurrentUserComment = ({ postId, commentsList, currentUser }) => {
  //Access The All Comments Of The Current Post ::
  const comments = commentsList.filter((row) => row.postId === postId);

  //Access The All Comments That Current User Sended On This Current Post ::
  const currentUserComment = comments.filter(
    (row) => row.email === currentUser.email
  );

  //Access All Varified Comments ::
  const verifiedComments = currentUserComment.filter(
    (row) => row.verified === true
  );

  return (
    <React.Fragment>
      <div className={`row ${CurrentUserCommentCss.holder}`}>
        <h4>نظر های ثبت شده از شما :</h4>
        <div className={CurrentUserCommentCss.userCommentsHolder}>
          {currentUserComment.length === 0 && verifiedComments.length === 0 && (
            <p>کاربر گرامی ، نظری از سوی شما درباره ی این پست ثبت نشده است</p>
          )}
          {currentUserComment.length !== 0 && verifiedComments.length === 0 && (
            <p>
              کاربر گرامی ، نظرات ثبت شده ی شما ، در انتظار تایید از سوی مدیر{" "}
              <span>سایت آموزشی بامبو </span> می باشد
            </p>
          )}
          {verifiedComments.reverse().map((comment) => (
            <CommentCard
              currentUser={currentUser}
              commentUserName="شما"
              commentText={comment.comment}
              commentDate={comment.createDate}
              commentAnswer={comment.answer}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentUserComment;
