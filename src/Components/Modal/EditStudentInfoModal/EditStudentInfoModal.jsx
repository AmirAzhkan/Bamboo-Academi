import React from "react";
import Modal from "react-modal";
import AdminStudentEditProfileForm from "../../StudentEditInfoFrom-Admin/StudentEditInfoFrom-Admin";

import EditStudentInfoModalCss from "./EditStudentInfoModal.module.css";
import "../ReactModal.css";

Modal.setAppElement("#root");

const EditStudentInfoModal = ({
  studentInfo,
  setRefreshStudentInfo,
  show,
  setShow,
}) => {
  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        className={EditStudentInfoModalCss.reactModal}
      >
        <div
          onClick={() => setShow(false)}
          className={EditStudentInfoModalCss.closeModal}
        ></div>
        <div className={EditStudentInfoModalCss.detailsHolder}>
          <h4 className={EditStudentInfoModalCss.titles}>
            ویرایش اطلاعات دانشجو :
          </h4>
          <AdminStudentEditProfileForm
            studentInfo={studentInfo}
            setRefreshStudentInfo={setRefreshStudentInfo}
            handleCloseModal={setShow}
          />
        </div>
      </Modal>
    </>
  );
};

export default EditStudentInfoModal;
