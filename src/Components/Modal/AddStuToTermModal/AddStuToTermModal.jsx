import React, { useMemo } from "react";
import Modal from "react-modal";
import ReactTable from "../../Common/ReactTable/ReactTable";
import { AdminAddStudentToTerm } from "../../../Core/Services/Api/AdminAddStudentToTerm.api";

import AddStuToTermModalCss from "./AddStuToTermModal.module.css";
import "../ReactModal.css";

Modal.setAppElement("#root");

const AddStudentToTermModal = ({
  currentTerm,
  studentsData,
  setStudentsData,
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

  //Getting Students List That Have Not The Current Term From The Data That Come From Api
  const studentsList = studentsData;

  //Adding Student To Current Term By Term Id & Student Id
  const handleAddStudentToTerm = async (termId, studentId) => {
    const student = await AdminAddStudentToTerm(termId, studentId);
    setStudentsData((old) => {
      let newData = [...old];
      let newStudentsData = newData;
      newStudentsData = newStudentsData.filter(
        (item) => item._id !== studentId
      );
      newData = newStudentsData;
      return newData;
    });
    refreshTermsList((old) => !old);
  };

  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        className={AddStuToTermModalCss.reactModal}
      >
        <div
          onClick={() => setShow(false)}
          className={AddStuToTermModalCss.closeModal}
        ></div>
        <div className={AddStuToTermModalCss.detailsHolder}>
          <h4 className={AddStuToTermModalCss.titles}>
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
                  <td className={AddStuToTermModalCss.manageTd}>
                    <span
                      className={AddStuToTermModalCss.addStudent}
                      onClick={() =>
                        handleAddStudentToTerm(currentTerm._id, original._id)
                      }
                    >
                      <div className={`${AddStuToTermModalCss.tooltip}`}>
                        افزودن دانشجو
                      </div>
                    </span>
                  </td>
                ),
              }}
            </ReactTable>
          ) : (
            <p className={AddStuToTermModalCss.termCapacityStatus}>
              ظرفیت ترم مورد نظر به اتمام رسیده است
            </p>
          )}
        </div>
      </Modal>
    </>
  );
};

export default AddStudentToTermModal;
