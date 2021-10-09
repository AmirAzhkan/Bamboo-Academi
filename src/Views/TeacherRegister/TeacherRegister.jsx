import React from "react";
import RegisterLayout from "../../Components/Common/RegisterLayout/RegisterLayout";
import TeacherRegisterForm from "../../Components/TeacherRegisterForm/TeacherRegisterForm";

import TeacherRegCss from "./TeacherRegister.module.css";

const AdminRegister = () => {
  return (
    <RegisterLayout registerTitle="ثبت نام استاد">
      <TeacherRegisterForm />
    </RegisterLayout>
  );
};

export default AdminRegister;
