import React from "react";
import Modal from "react-modal";
import EditCourseForm from "../../EditCourseForm/EditCourseForm";

import EditCourseModalCss from "./EditCourseModal.module.css";
import "../ReactModal.css";

Modal.setAppElement("#root");

const EditCourseModal = ({ show, setShow, courseInfo, refreshCoursesInfo }) => {
  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        className={EditCourseModalCss.reactModal}
      >
        <div className={EditCourseModalCss.detailsHolder}>
          <div
            onClick={() => setShow(false)}
            className={EditCourseModalCss.closeModal}
          ></div>
          <h4 className={EditCourseModalCss.titles}>ویرایش اطلاعات دوره :</h4>
          <EditCourseForm
            courseInfo={courseInfo}
            refreshCoursesInfo={refreshCoursesInfo}
            manageModal={setShow}
          />
        </div>
      </Modal>
    </>
  );
};

export default EditCourseModal;
