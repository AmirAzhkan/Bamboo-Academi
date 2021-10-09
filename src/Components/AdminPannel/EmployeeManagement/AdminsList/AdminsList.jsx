import React, { useMemo, useState, useEffect } from "react";
import { getCurrentUser } from "../../../../Core/Services/AuthServices/AuthServices";
import { GetAllEmployees } from "../../../../Core/Services/Api/GetAllEmployees.api";
import { GetEmployeeById } from "../../../../Core/Services/Api/GetEmployeeById.api";
import { DeleteEmployee } from "../../../../Core/Services/Api/DeleteEmployee.api";
import ReactTable from "../../../Common/ReactTable/ReactTable";
import EditEmployeeInfoModal from "../../../Modal/EditEmployeeInfoModal/EditEmployeeInfoModal";
import Loading from "../../../Common/Loading/Loading";

import AdminsListCss from "./AdminsList.module.css";

const AdminsList = () => {
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
  const [OtherAdmins, setOtherAdmins] = useState([]);
  const [AdminInfo, setAdminInfo] = useState([]);
  const [EditOtherAdminInfoModal, setEditOtherAdminInfoModal] = useState(false);
  const [RefreshAdminInfo, setRefreshAdminInfo] = useState(false);
  const [LoadingState, setLoadingState] = useState(true);

  useEffect(async () => {
    const adminInfo = getCurrentUser();
    const data = await GetAllEmployees();

    //Filtering The Data To Access The All Admins From Employees List =>
    const filteredRole = data.result.filter((row) => {
      const isAdmin = row.role === "admin";
      if (isAdmin) return row;
    });

    //Filtering The FilteredRole To Accsess All Admins List Except The Admin Is Logged In =>
    const filteredAdmin = filteredRole.filter((row) => {
      const otherAdmins = row._id !== adminInfo._id;
      if (otherAdmins) return row;
    });

    setOtherAdmins(filteredAdmin);
    setLoadingState(false);
  }, [RefreshAdminInfo]);

  //Editing Other Admins Information =>
  const handleEditAdminModal = async (adminId) => {
    setEditOtherAdminInfoModal(true);
    const adminInfo = await GetEmployeeById(adminId);
    setAdminInfo(adminInfo.result);
  };

  //Deleting Admin =>
  const handleDeleteAdmin = async (adminId, adminName) => {
    const admin = await DeleteEmployee(adminId, adminName);

    setOtherAdmins((old) => {
      let newData = [...old];
      let newAdminData = newData;
      newAdminData = newAdminData.filter((item) => item._id !== adminId);
      newData = newAdminData;
      return newData;
    });
  };

  return (
    <>
      {LoadingState ? (
        <Loading />
      ) : (
        <React.Fragment>
          <h4 className={AdminsListCss.titles}>لیست دیگر ادمین ها :</h4>
          {OtherAdmins && OtherAdmins.length != 0 ? (
            <>
              {" "}
              <ReactTable
                columns={columns}
                data={OtherAdmins}
                selfStyle="studentListTable"
                selfPaginate="studentListPaginate"
                managementName="ادمین"
              >
                {{
                  Body: ({ row: { original } }) => (
                    <td className={AdminsListCss.manageTd}>
                      <span
                        className={AdminsListCss.editStudent}
                        onClick={() => handleEditAdminModal(original._id)}
                      >
                        <div
                          className={`${AdminsListCss.tooltip} ${AdminsListCss.tooltipGreen}`}
                        >
                          ویرایش اطلاعات
                        </div>
                      </span>
                      <span
                        className={AdminsListCss.deleteStudent}
                        onClick={() =>
                          handleDeleteAdmin(original._id, original.fullName)
                        }
                      >
                        <div
                          className={`${AdminsListCss.tooltip} ${AdminsListCss.tooltipRed}`}
                        >
                          حذف ادمین
                        </div>
                      </span>
                    </td>
                  ),
                }}
              </ReactTable>
              <EditEmployeeInfoModal
                show={EditOtherAdminInfoModal}
                setShow={setEditOtherAdminInfoModal}
                refreshEmployeeInfo={setRefreshAdminInfo}
                employeeInfo={AdminInfo}
                employeeRole="ادمین"
              />
            </>
          ) : (
            <p className={AdminsListCss.adminsStatus}>ادمینی موجود نیست</p>
          )}
        </React.Fragment>
      )}
    </>
  );
};

export default AdminsList;
