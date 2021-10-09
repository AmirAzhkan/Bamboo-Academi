import React, { useState, useEffect } from "react";
import { getCurrentUser } from "../../Core/Services/AuthServices/AuthServices";
import { GetStudentById } from "../../Core/Services/Api/GetStudentById";
import { ToastContainer } from "react-toastify";

import PannelTab from "../../Components/StudentPannel/StudentPannelTab/PannelTab";
import PannelMenu from "../../Components/StudentPannel/StudentPannelMenu/PannelMenu";
import TabContent from "../../Components/StudentPannel/StudentPannelTabContent/TabContent";

import StuPannelCss from "./StudentPannel.module.css";
import "../../Assets/Fonts/Fonts.css";

const StudentPannel = () => {
  const [StudentInfo, setStudentInfo] = useState([]);
  const [RefreshStudentInfo, setRefreshStudentInfo] = useState(false);

  useEffect(async () => {
    try {
      const studentInfo = getCurrentUser();
      const data = await GetStudentById(studentInfo._id);

      setStudentInfo(data.result);
    } catch (error) {}
  }, [RefreshStudentInfo]);

  return (
    <React.Fragment>
      <div className={`container-fluid p-0 ${StuPannelCss.pannelBg}`}>
        <ToastContainer bodyClassName={`shab ${StuPannelCss.toastStyle}`} />
        {/* Pannel Right Side Tab : */}
        <PannelTab />
        {/* Content : */}
        <div className={`${StuPannelCss.contentHolder}`}>
          {/* Content Header & Menu */}
          <div className={`col-md-12 ${StuPannelCss.menuHolder}`}>
            <PannelMenu studentInfo={StudentInfo} />
          </div>
          {/* Tab Content */}
          <TabContent
            studentInfo={StudentInfo}
            refreshStudentInfo={setRefreshStudentInfo}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default StudentPannel;
