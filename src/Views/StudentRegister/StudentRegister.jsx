import React from "react";
import RegisterLayout from "../../Components/Common/RegisterLayout/RegisterLayout";
import StudentRegisterForm from "../../Components/StudentRegisterForm/StudentRegisterForm";

import StudentRegCss from "./StudentRegister.module.css";
import "react-toastify/dist/ReactToastify.css";
import "../../Assets/Fonts/Fonts.css";

export const StudentRegister = () => {
  return (
    <RegisterLayout registerTitle="ثبت نام">
      <StudentRegisterForm />
    </RegisterLayout>
  );
};

export default StudentRegister;
