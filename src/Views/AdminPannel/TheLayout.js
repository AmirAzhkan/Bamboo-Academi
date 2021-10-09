import React, { useState, useEffect } from "react";
import {
  TheContent,
  TheSidebar,
  TheHeader,
} from "../../Components/AdminPannel/index";
import { getCurrentUser } from "../../Core/Services/AuthServices/AuthServices";
import { GetEmployeeById } from "../../Core/Services/Api/GetEmployeeById.api";
import { ToastContainer } from "react-toastify";

import "./TheLayout.css";
import "../../Assets/scss/style.scss";

const TheLayout = () => {
  const [EmployeeInfo, setEmployeeInfo] = useState([]);
  const [RefreshEmployeeInfo, setRefreshEmployeeInfo] = useState(false);

  useEffect(async () => {
    const employeeInfo = getCurrentUser();
    try {
      let data = await GetEmployeeById(employeeInfo._id);
      setEmployeeInfo(data.result);
    } catch (error) {}
  }, [RefreshEmployeeInfo]);

  return (
    <div className="c-app c-default-layout" dir="rtl">
      <ToastContainer bodyClassName="shab toastStyle" />
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader employeeInfo={EmployeeInfo} />
        <div className="c-body">
          <TheContent
            employeeInfo={EmployeeInfo}
            refreshEmployeeInfo={setRefreshEmployeeInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default TheLayout;
