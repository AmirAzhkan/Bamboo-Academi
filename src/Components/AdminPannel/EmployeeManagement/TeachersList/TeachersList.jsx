import React, { useMemo, useState, useEffect } from "react";
import { GetAllTeachers } from "../../../../Core/Services/Api/GetAllTeachers.api";
import { DeleteEmployee } from "../../../../Core/Services/Api/DeleteEmployee.api";
import { GetEmployeeById } from "../../../../Core/Services/Api/GetEmployeeById.api";
import ReactTable from "../../../Common/ReactTable/ReactTable";
import EditEmployeeInfoModal from "../../../Modal/EditEmployeeInfoModal/EditEmployeeInfoModal";
import Loading from "../../../Common/Loading/Loading";

import TeachersListCss from "./TeachersList.module.css";

const TeachersList = () => {
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
  const [TeachersList, setTeachersList] = useState([]);
  const [TeacherInfo, setTeacherInfo] = useState([]);
  const [EditTeacherInfoModal, setEditTeacherInfoModal] = useState(false);
  const [RefreshTeacherInfo, setRefreshTeacherInfo] = useState(false);
  const [LoadingState, setLoadingState] = useState(true);

  useEffect(async () => {
    const data = await GetAllTeachers();
    const teachersData = data.result;
    setTeachersList(teachersData);
    setLoadingState(false);
  }, [RefreshTeacherInfo]);

  //Edit Teacher Information =>
  const handleEditTeacherModal = async (teacherId) => {
    setEditTeacherInfoModal(true);
    const teacherInfo = await GetEmployeeById(teacherId);
    setTeacherInfo(teacherInfo.result);
  };

  //Deleting Teacher =>
  const handleDeleteTeachers = async (teachersId, teachersName) => {
    const teacher = await DeleteEmployee(teachersId, teachersName);

    setTeachersList((old) => {
      let newData = [...old];
      let newTeachersData = newData;
      newTeachersData = newTeachersData.filter(
        (item) => item._id !== teachersId
      );
      newData = newTeachersData;
      return newData;
    });
  };

  return (
    <>
      {LoadingState ? (
        <Loading />
      ) : (
        <React.Fragment>
          <h4 className={TeachersListCss.titles}>لیست کل اساتید :</h4>
          {TeachersList && TeachersList.length != 0 ? (
            <>
              <ReactTable
                columns={columns}
                data={TeachersList}
                selfStyle="studentListTable"
                selfPaginate="studentListPaginate"
                managementName="دانشجو"
              >
                {{
                  Body: ({ row: { original } }) => (
                    <td className={TeachersListCss.manageTd}>
                      <span
                        className={TeachersListCss.editStudent}
                        onClick={() => handleEditTeacherModal(original._id)}
                      >
                        <div
                          className={`${TeachersListCss.tooltip} ${TeachersListCss.tooltipGreen}`}
                        >
                          ویرایش اطلاعات
                        </div>
                      </span>
                      <span
                        className={TeachersListCss.deleteStudent}
                        onClick={() =>
                          handleDeleteTeachers(original._id, original.fullName)
                        }
                      >
                        <div
                          className={`${TeachersListCss.tooltip} ${TeachersListCss.tooltipRed}`}
                        >
                          حذف استاد
                        </div>
                      </span>
                    </td>
                  ),
                }}
              </ReactTable>
              <EditEmployeeInfoModal
                show={EditTeacherInfoModal}
                setShow={setEditTeacherInfoModal}
                refreshEmployeeInfo={setRefreshTeacherInfo}
                employeeInfo={TeacherInfo}
                employeeRole="استاد"
              />
            </>
          ) : (
            <p className={TeachersListCss.teachersStatus}>استادی موجود نیست</p>
          )}
        </React.Fragment>
      )}
    </>
  );
};

export default TeachersList;
