import React, { useMemo, useState, useEffect } from "react";
import { GetTerm } from "../../../../Core/Services/Api/GetTerm.api";
import { GetTermById } from "../../../../Core/Services/Api/GetTermById.api";
import { GetAllStudents } from "../../../../Core/Services/Api/GetAllStudents.api";
import { DeleteTerm } from "../../../../Core/Services/Api/DeleteTerm.api";
import ReactTable from "../../../Common/ReactTable/ReactTable";
import DeleteStudentFromTermModal from "../../../Modal/DeleteStuFromTermModal/DeleteStuFromTermModal";
import AddStudentToTermModal from "../../../Modal/AddStuToTermModal/AddStuToTermModal";
import EditTermModal from "../../../Modal/EditTermModal/EditTermModal";
import Loading from "../../../Common/Loading/Loading";

import TermsListCss from "./TermsList.module.css";

const TermsList = () => {
  const columns = useMemo(
    () => [
      {
        Header: "عنوان ترم",
        accessor: "title",
      },
      {
        Header: "ظرفیت",
        accessor: "capacity",
      },
      {
        Header: "قیمت",
        accessor: "cost",
      },
    ],
    []
  );

  const [TermsList, setTermsList] = useState([]);
  const [TermInfo, setTermInfo] = useState([]);
  const [StudentsList, setStudentsList] = useState([]);
  const [RefreshTermsList, setRefreshTermsList] = useState(false);
  const [DeleteStuFromTermModal, setDeleteStuFromTermModal] = useState(false);
  const [AddStuToTermModal, setAddStuToTermModal] = useState(false);
  const [EditTermModalShow, setEditTermModalShow] = useState(false);
  const [LoadingState, setLoadingState] = useState(true);

  useEffect(async () => {
    const data = await GetTerm();
    const TermsData = data.result;
    setTermsList(TermsData);
    setLoadingState(false);
  }, [RefreshTermsList]);

  //Edit Term =>
  const handleEditTermModal = async (termId) => {
    setEditTermModalShow(true);
    const term = await GetTermById(termId);
    setTermInfo(term.result);
  };

  //Add Student To Term =>
  const handleAddStudentToTerm = async (termId) => {
    setAddStuToTermModal(true);
    //Accsessing To Current Term Data ::
    const currentTerm = await GetTermById(termId);
    setTermInfo(currentTerm.result);

    //Accsessing The All Students Data ::
    const allStudents = await GetAllStudents();

    //Filtering The All Students List To Accsessing The List Of Students That Have Not Current Term ::
    const filteredStudents = allStudents.result.filter((row) => {
      const isInTerm = row.terms.some(
        (term) => term._id === currentTerm.result._id
      );
      if (!isInTerm) return row;
    });
    setStudentsList(filteredStudents);
  };

  //Deleting Student From Term =>
  const handleDeleteStudentFromTerm = async (termId) => {
    setDeleteStuFromTermModal(true);
    const currentTerm = await GetTermById(termId);
    setTermInfo(currentTerm.result);
  };

  //Deleting The Term =>
  const handleDeleteTerm = async (termId) => {
    const term = await DeleteTerm(termId);

    setTermsList((old) => {
      let newData = [...old];
      let newTermsData = newData;
      newTermsData = newTermsData.filter((item) => item._id !== termId);
      newData = newTermsData;
      return newData;
    });
  };

  return (
    <>
      {LoadingState ? (
        <Loading />
      ) : (
        <React.Fragment>
          <h4 className={TermsListCss.titles}>لیست کل ترم ها :</h4>
          {TermsList && TermsList.length != 0 ? (
            <>
              <ReactTable
                columns={columns}
                data={TermsList}
                selfStyle="allTermsListTable"
                selfPaginate="allTermsListPaginate"
                managementName="ترم"
              >
                {{
                  Body: ({ row: { original } }) => (
                    <td className={TermsListCss.manageTd}>
                      {/* Edit The Term Information ::: */}
                      <span
                        className={TermsListCss.editTerm}
                        onClick={() => handleEditTermModal(original._id)}
                      >
                        <div
                          className={`${TermsListCss.tooltip} ${TermsListCss.tooltipGreen}`}
                        >
                          ویرایش اطلاعات
                        </div>
                      </span>
                      {/* Add Student To Term ::: */}
                      <span
                        className={TermsListCss.addStudentToTerm}
                        onClick={() => handleAddStudentToTerm(original._id)}
                      >
                        <div
                          className={`${TermsListCss.tooltip} ${TermsListCss.tooltipGreen}`}
                        >
                          افزودن دانشجو
                        </div>
                      </span>
                      {/* Delete Student From Term :::  */}
                      <span
                        className={TermsListCss.deleteStudentFromTerm}
                        onClick={() =>
                          handleDeleteStudentFromTerm(original._id)
                        }
                      >
                        <div
                          className={`${TermsListCss.tooltip} ${TermsListCss.tooltipRed}`}
                        >
                          حذف دانشجو
                        </div>
                      </span>
                      {/* Delete Term ::: */}
                      <span
                        className={TermsListCss.deleteTerm}
                        onClick={() => handleDeleteTerm(original._id)}
                      >
                        <div
                          className={`${TermsListCss.tooltip} ${TermsListCss.tooltipRed}`}
                        >
                          حذف ترم
                        </div>
                      </span>
                    </td>
                  ),
                }}
              </ReactTable>
              <EditTermModal
                show={EditTermModalShow}
                setShow={setEditTermModalShow}
                currentTerm={TermInfo}
                refreshTermsList={setRefreshTermsList}
              />
              <DeleteStudentFromTermModal
                show={DeleteStuFromTermModal}
                setShow={setDeleteStuFromTermModal}
                currentTerm={TermInfo}
                setCurrentTerm={setTermInfo}
                refreshTermsList={setRefreshTermsList}
              />
              <AddStudentToTermModal
                show={AddStuToTermModal}
                setShow={setAddStuToTermModal}
                currentTerm={TermInfo}
                studentsData={StudentsList}
                setStudentsData={setStudentsList}
                refreshTermsList={setRefreshTermsList}
              />
            </>
          ) : (
            <p className={TermsListCss.termsStatus}>
              ترمی برای نمایش وجود ندارد
            </p>
          )}
        </React.Fragment>
      )}
    </>
  );
};

export default TermsList;
