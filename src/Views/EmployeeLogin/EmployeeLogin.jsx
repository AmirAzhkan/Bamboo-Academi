import React from "react";
import LoginLayout from "../../Components/Common/LoginLayout/LoginLayout";
import EmployeeLoginForm from "../../Components/EmployeeLoginForm/EmployeeLoginForm";

import EmployeeLoginCss from "./EmployeeLogin.module.css";
import "react-toastify/dist/ReactToastify.css";
import "../../Assets/Fonts/Fonts.css";

export const EmployeeLogin = () => {
  return (
    <LoginLayout loginTitle="ورود کارمندان">
      <EmployeeLoginForm />
    </LoginLayout>
  );
};

export default EmployeeLogin;
