import React from "react";
import RegisterLayout from "../../Components/Common/RegisterLayout/RegisterLayout";
import AdminRegisterForm from "../../Components/AdminRegisterForm/AdminRegisterForm";

import AdminRegCss from "./AdminRegister.module.css";

const AdminRegister = () => {
  return (
    <RegisterLayout registerTitle="ثبت نام ادمین">
      <AdminRegisterForm />
    </RegisterLayout>
  );
};

export default AdminRegister;
