import React from "react";
import AnswerCommentForm from "../../AnswerCommentForm/AnswerCommentForm";

import Modal from "react-modal";

import CommentDetailsModalCss from "./CommentDetailsModal.module.css";
import "../ReactModal.css";

Modal.setAppElement("#root");

const CommentDetailsModal = ({
  show,
  setShow,
  currentComment,
  commentedPost,
  refreshComments,
}) => {
  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        className={CommentDetailsModalCss.reactModal}
      >
        <div
          onClick={() => setShow(false)}
          className={CommentDetailsModalCss.closeModal}
        ></div>
        <div className={CommentDetailsModalCss.detailsHolder}>
          <h4 className={CommentDetailsModalCss.titles}>
            جزئیات کامنت {currentComment.username} :
          </h4>
          <div>
            <h5 className={CommentDetailsModalCss.title}>پست مورد نظر :</h5>
            <p className={CommentDetailsModalCss.commentDetails}>
              {commentedPost.title}
            </p>
          </div>
          <div>
            <h5 className={CommentDetailsModalCss.title}>متن کامنت :</h5>
            <p className={CommentDetailsModalCss.commentDetails}>
              {currentComment.comment}
            </p>
          </div>
          <div style={{ marginBottom: "0px" }}>
            <AnswerCommentForm
              currentComment={currentComment}
              refreshComments={refreshComments}
              textInputSize="answerCommentTextArea"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommentDetailsModal;
