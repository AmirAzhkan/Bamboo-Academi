import React from "react";
import { Link } from "react-router-dom";
import SendCommentForm from "./SendCommentForm/SendCommentForm";

import SendCommentCss from "./SendComment.module.css";
import "../../../Assets/Fonts/Fonts.css";

const SendComment = ({
  redirectLink,
  postId,
  commentsList,
  currentUser,
  refreshCommentsList,
}) => {
  //Access The All Comments Of The Current Post ::
  const comments = commentsList.filter((row) => row.postId === postId);

  //Access The All Comments That Current User Sended On This Current Post ::
  const currentUserComment = comments.filter(
    (row) => row.email === currentUser.email
  );

  //Access All Not Varified Comments ::
  const notVerifiedComments = currentUserComment.filter(
    (row) => row.verified === false
  );

  return (
    <React.Fragment>
      <div className="row">
        <div className={`col-12 p-0 ${SendCommentCss.sendCommentHolder}`}>
          <div className={SendCommentCss.commentZoz}></div>
          <div className={SendCommentCss.zozContext}>
            <h4 className={SendCommentCss.contextTitle}>
              ثبت نظر درباره این پست
            </h4>
            <div className={SendCommentCss.contextCol}>
              {currentUser ? (
                <SendCommentForm
                  postId={postId}
                  userInfo={currentUser}
                  notVerifiedComments={notVerifiedComments}
                  refreshCommentsList={refreshCommentsList}
                />
              ) : (
                <div className={SendCommentCss.redirectLoginText}>
                  <p>
                    دانشجوی گرامی برای ثبت نظر درباره ی این پست باید وارد حساب
                    کاربری خود بشوید
                  </p>
                  <Link to={redirectLink}>ورود به حساب کاربری</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SendComment;
