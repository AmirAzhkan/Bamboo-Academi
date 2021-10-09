import React, { useMemo } from "react";
import Modal from "react-modal";
import ReactTable from "../../Common/ReactTable/ReactTable";
import { AdminDeleteStudentFromTerm } from "../../../Core/Services/Api/AdminDeleteStudentFromTerm.api";

import DelStuFromTermModalCss from "./DeleteStuFromTermModal.module.css";
import "../ReactModal.css";

Modal.setAppElement("#root");

const DeleteStudentFromTermModal = ({
  currentTerm,
  setCurrentTerm,
  refreshTermsList,
  show,
  setShow,
}) => {
  const columns = useMemo(
    () => [
      {
        Header: "نام دانشجو",
        accessor: "fullName",
      },
      {
        Header: "ایمیل",
        accessor: "email",
      },
    ],
    []
  );

  //Getting Students List That Have The Current Term From The Data That Come From Api
  const studentsList = currentTerm.students;

  //Deleting Student From Current Term By Term Id & Student Id
  const handleDeleteStudentFromTerm = async (termId, studentId) => {
    const student = await AdminDeleteStudentFromTerm(termId, studentId);
    setCurrentTerm((old) => {
      let newData = { ...old };
      let newTermData = newData.students;
      newTermData = newTermData.filter((item) => item._id !== studentId);
      newData.students = newTermData;
      return newData;
    });
    refreshTermsList((old) => !old);
  };

  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        className={DelStuFromTermModalCss.reactModal}
      >
        <div
          onClick={() => setShow(false)}
          className={DelStuFromTermModalCss.closeModal}
        ></div>
        <div className={DelStuFromTermModalCss.detailsHolder}>
          <h4 className={DelStuFromTermModalCss.titles}>
            مدیریت دانشجویان ترم {currentTerm.title} :
          </h4>
          {studentsList && studentsList.length != 0 ? (
            <ReactTable
              columns={columns}
              data={studentsList}
              selfStyle="deleteStudentFromTermTable"
              selfPaginate="deleteStudentFromTermPaginate"
              managementName={"دانشجو"}
            >
              {{
                Body: ({ row: { original } }) => (
                  <td className={DelStuFromTermModalCss.manageTd}>
                    <span
                      className={DelStuFromTermModalCss.deleteStudent}
                      onClick={() =>
                        handleDeleteStudentFromTerm(
                          currentTerm._id,
                          original._id
                        )
                      }
                    >
                      <div className={`${DelStuFromTermModalCss.tooltip}`}>
                        حذف دانشجو
                      </div>
                    </span>
                  </td>
                ),
              }}
            </ReactTable>
          ) : (
            <p className={DelStuFromTermModalCss.studentStatus}>
              دانشجویی ترم مورد نظر را اخذ نکرده است
            </p>
          )}
        </div>
      </Modal>
    </>
  );
};

export default DeleteStudentFromTermModal;
