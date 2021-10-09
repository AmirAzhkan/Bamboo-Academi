import React from "react";
import Modal from "react-modal";
import EditTermForm from "../../EditTermForm/EditTermForm";

import EditTermModalCss from "./EditTermModal.module.css";
import "../ReactModal.css";

Modal.setAppElement("#root");

const EditTermModal = ({ show, setShow, currentTerm, refreshTermsList }) => {
  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        className={EditTermModalCss.reactModal}
      >
        <div className={EditTermModalCss.detailsHolder}>
          <div
            onClick={() => setShow(false)}
            className={EditTermModalCss.closeModal}
          ></div>
          <h4 className={EditTermModalCss.titles}>ویرایش اطلاعات ترم :</h4>
          <EditTermForm
            termInfo={currentTerm}
            refreshTermsList={refreshTermsList}
            manageModal={setShow}
          />
        </div>
      </Modal>
    </>
  );
};

export default EditTermModal;
