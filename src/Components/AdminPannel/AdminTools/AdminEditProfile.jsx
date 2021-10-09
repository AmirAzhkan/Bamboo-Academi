import React, { useState, useEffect } from "react";
import EmployeeEditProfileForm from "../../EmployeeEditProfileForm/EmployeeEditProfileForm";
import Loading from "../../Common/Loading/Loading";

import AdminEditProfileCss from "./AdminEditProfile.module.css";

const AdminEditProfile = ({ employeeInfo, refreshEmployeeInfo }) => {
  const [LoadingState, setLoadingState] = useState(true);
  useEffect(async () => {
    setLoadingState(false);
  }, []);

  return (
    <>
      {LoadingState ? (
        <Loading />
      ) : (
        <React.Fragment>
          <h4 className={AdminEditProfileCss.titles}>ویرایش اطلاعات :</h4>
          <div className={AdminEditProfileCss.formHolder}>
            <EmployeeEditProfileForm
              employeeData={employeeInfo}
              refreshEmployeeInfo={refreshEmployeeInfo}
            />
          </div>
        </React.Fragment>
      )}
    </>
  );
};

export default AdminEditProfile;
