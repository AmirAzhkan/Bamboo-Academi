import React, { useMemo } from "react";
import Modal from "react-modal";
import ReactTable from "../../Common/ReactTable/ReactTable";
import { AdminDeleteStudentFromTerm } from "../../../Core/Services/Api/AdminDeleteStudentFromTerm.api";

import ManageStuTermModalCss from "./ManageStuTermsModal.module.css";
import "../ReactModal.css";

Modal.setAppElement("#root");

const ManageStuTermsModal = ({
  studentTerms,
  setStudentTermsList,
  show,
  setShow,
}) => {
  const columns = useMemo(
    () => [
      {
        Header: "نام ترم",
        accessor: "title",
      },
      {
        Header: "مدرس",
        accessor: "teacher.fullName",
      },
    ],
    []
  );

  //Getting Student TermsList From The Data That Come From Api
  const termList = studentTerms.terms;

  //Deleting Student Term By Term Id & Student Id
  const handleDeleteTerm = async (termId, studentId) => {
    const term = await AdminDeleteStudentFromTerm(termId, studentId);
    setStudentTermsList((old) => {
      let newData = { ...old };
      let newTermData = newData.terms;
      newTermData = newTermData.filter((item) => item._id !== termId);
      newData.terms = newTermData;
      return newData;
    });
  };

  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        className={ManageStuTermModalCss.reactModal}
      >
        <div
          onClick={() => setShow(false)}
          className={ManageStuTermModalCss.closeModal}
        ></div>
        <div className={ManageStuTermModalCss.detailsHolder}>
          <h4 className={ManageStuTermModalCss.titles}>
            مدیریت ترم های دانشجوی {studentTerms.fullName} :
          </h4>
          {termList && termList.length != 0 ? (
            <ReactTable
              columns={columns}
              data={termList}
              selfStyle="termsListTable"
              selfPaginate="termsListPaginate"
              managementName={"ترم"}
            >
              {{
                Body: ({ row: { original } }) => (
                  <td className={ManageStuTermModalCss.manageTd}>
                    <span
                      className={ManageStuTermModalCss.deleteTerm}
                      onClick={() =>
                        handleDeleteTerm(original._id, studentTerms._id)
                      }
                    >
                      <div className={`${ManageStuTermModalCss.tooltip}`}>
                        حذف ترم
                      </div>
                    </span>
                  </td>
                ),
              }}
            </ReactTable>
          ) : (
            <p className={ManageStuTermModalCss.courseStatus}>
              دانشجوی مورد نظر دوره ای را اخذ نکرده است
            </p>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ManageStuTermsModal;
