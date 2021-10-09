import React from "react";
import Modal from "react-modal";
import AdminEditEmpInfoForm from "../../AdminEditEmployeeInfoForm/AdminEditEmployeeInfoForm";

import EditEmpInfoModalCss from "./EditEmployeeInfoModal.module.css";
import "../ReactModal.css";

Modal.setAppElement("#root");

const EditEmployeeInfoModal = ({
  employeeRole,
  employeeInfo,
  refreshEmployeeInfo,
  show,
  setShow,
}) => {
  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        className={EditEmpInfoModalCss.reactModal}
      >
        <div
          onClick={() => setShow(false)}
          className={EditEmpInfoModalCss.closeModal}
        ></div>
        <div className={EditEmpInfoModalCss.detailsHolder}>
          <h4 className={EditEmpInfoModalCss.titles}>
            ویرایش اطلاعات {employeeRole} {employeeInfo.fullName} :
          </h4>
          <AdminEditEmpInfoForm
            employeeData={employeeInfo}
            refreshEmployeeInfo={refreshEmployeeInfo}
            handleCloseModal={setShow}
          />
        </div>
      </Modal>
    </>
  );
};

export default EditEmployeeInfoModal;
