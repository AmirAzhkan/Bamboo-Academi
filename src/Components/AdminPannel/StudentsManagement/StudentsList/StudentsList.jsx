import React, { useMemo, useState, useEffect } from "react";
import { GetAllStudents } from "../../../../Core/Services/Api/GetAllStudents.api";
import { DeleteStudentById } from "../../../../Core/Services/Api/DeleteStudentById";
import { GetStudentById } from "../../../../Core/Services/Api/GetStudentById";
import ReactTable from "../../../Common/ReactTable/ReactTable";
import EditStudentInfoModal from "../../../Modal/EditStudentInfoModal/EditStudentInfoModal";
import ManageStuTermsModal from "../../../Modal/ManageStuTermsModal/ManageStuTermsModal";
import Loading from "../../../Common/Loading/Loading";

import StudentsListCss from "./StudentsList.module.css";

const StudentsList = () => {
  const columns = useMemo(
    () => [
      {
        Header: "نام کاربری",
        accessor: "fullName",
      },
      {
        Header: "ایمیل",
        accessor: "email",
      },
      {
        Header: "شماره موبایل",
        accessor: "phoneNumber",
      },
    ],
    []
  );
  const [StudentList, setStudentList] = useState([]);
  const [StudentInfo, setStudentInfo] = useState([]);
  const [RefreshStudentInfo, setRefreshStudentInfo] = useState(false);
  const [StudentTermsList, setStudentTermsList] = useState([]);
  const [EditStuModalShow, setEditStuModalShow] = useState(false);
  const [MangeTermModalShow, setMangeTermModalShow] = useState(false);
  const [LoadingState, setLoadingState] = useState(true);

  useEffect(async () => {
    const data = await GetAllStudents();
    //A Trick To React Table Can Access Data What Like It Need (Get From StackOverFlow...!)
    const studentData = data.result;
    setStudentList(studentData);
    setLoadingState(false);
  }, [RefreshStudentInfo]);

  //Deleting Student =>
  const handleDeleteStudent = async (studentId, studentName) => {
    const student = await DeleteStudentById(studentId, studentName);
    //console.log(student);
    setStudentList((old) => {
      let newData = [...old];
      let newStudentData = newData;
      newStudentData = newStudentData.filter((item) => item._id !== studentId);
      newData = newStudentData;
      return newData;
    });
  };

  //Editing Student Information =>
  const handleEditStudentModal = async (studentId) => {
    setEditStuModalShow(true);
    const studentInfo = await GetStudentById(studentId);
    setStudentInfo(studentInfo.result);
  };

  //Managing Student Terms =>
  const handleStuCouManageModal = async (studentId) => {
    setMangeTermModalShow(true);
    const studentTerms = await GetStudentById(studentId);
    setStudentTermsList(studentTerms.result);
  };

  return (
    <>
      {LoadingState ? (
        <Loading />
      ) : (
        <React.Fragment>
          <h4 className={StudentsListCss.titles}>لیست کل دانشجویان :</h4>
          {StudentList && StudentList.length != 0 ? (
            <>
              {" "}
              <ReactTable
                columns={columns}
                data={StudentList}
                selfStyle="studentListTable"
                selfPaginate="studentListPaginate"
                managementName="دانشجو"
              >
                {{
                  Body: ({ row: { original } }) => (
                    <td className={StudentsListCss.manageTd}>
                      <span
                        className={StudentsListCss.courseManage}
                        onClick={() => handleStuCouManageModal(original._id)}
                      >
                        <div
                          className={`${StudentsListCss.tooltip} ${StudentsListCss.tooltipGreen}`}
                        >
                          مدیریت ترم ها
                        </div>
                      </span>
                      <span
                        className={StudentsListCss.editStudent}
                        onClick={() => handleEditStudentModal(original._id)}
                      >
                        <div
                          className={`${StudentsListCss.tooltip} ${StudentsListCss.tooltipGreen}`}
                        >
                          ویرایش اطلاعات
                        </div>
                      </span>
                      <span
                        className={StudentsListCss.deleteStudent}
                        onClick={() =>
                          handleDeleteStudent(original._id, original.fullName)
                        }
                      >
                        <div
                          className={`${StudentsListCss.tooltip} ${StudentsListCss.tooltipRed}`}
                        >
                          حذف دانشجو
                        </div>
                      </span>
                    </td>
                  ),
                }}
              </ReactTable>
              <EditStudentInfoModal
                show={EditStuModalShow}
                setShow={setEditStuModalShow}
                studentInfo={StudentInfo}
                setRefreshStudentInfo={setRefreshStudentInfo}
              />
              <ManageStuTermsModal
                show={MangeTermModalShow}
                setShow={setMangeTermModalShow}
                studentTerms={StudentTermsList}
                setStudentTermsList={setStudentTermsList}
              />{" "}
            </>
          ) : (
            <p className={StudentsListCss.studentStatus}>دانشجویی موجود نیست</p>
          )}
        </React.Fragment>
      )}
    </>
  );
};

export default StudentsList;
