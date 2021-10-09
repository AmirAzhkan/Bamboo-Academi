import React from "react";
import Modal from "react-modal";
import EditArticleFrom from "../../EditArticleFrom/EditArticleFrom";

import EditArticleModalCss from "./EditArticleModal.module.css";
import "../ReactModal.css";

Modal.setAppElement("#root");

const EditArticleModal = ({
  show,
  setShow,
  articleInfo,
  refreshArticlesInfo,
}) => {
  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        className={EditArticleModalCss.reactModal}
      >
        <div className={EditArticleModalCss.detailsHolder}>
          <div
            onClick={() => setShow(false)}
            className={EditArticleModalCss.closeModal}
          ></div>
          <h4 className={EditArticleModalCss.titles}>ویرایش اطلاعات مقاله :</h4>
          <EditArticleFrom
            articleInfo={articleInfo}
            refreshArticlesInfo={refreshArticlesInfo}
            manageModal={setShow}
          />
        </div>
      </Modal>
    </>
  );
};

export default EditArticleModal;
