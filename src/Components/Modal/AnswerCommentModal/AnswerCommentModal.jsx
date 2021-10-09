import React from "react";
import AnswerCommentForm from "../../AnswerCommentForm/AnswerCommentForm";

import Modal from "react-modal";

import AnswerCommentModalCss from "./AnswerCommentModal.module.css";
import "../ReactModal.css";

Modal.setAppElement("#root");

const AnswerCommentModal = ({
  show,
  setShow,
  currentComment,
  refreshCommentsList,
}) => {
  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        className={AnswerCommentModalCss.reactModal}
      >
        <div
          onClick={() => setShow(false)}
          className={AnswerCommentModalCss.closeModal}
        ></div>
        <div className={AnswerCommentModalCss.detailsHolder}>
          <h4 className={AnswerCommentModalCss.titles}>
            جزئیات کامنت {currentComment.username} :
          </h4>
          <div style={{ marginBottom: "0px" }}>
            <AnswerCommentForm
              currentComment={currentComment}
              refreshComments={refreshCommentsList}
              textInputSize="siteAnswerCommentTextArea"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AnswerCommentModal;
