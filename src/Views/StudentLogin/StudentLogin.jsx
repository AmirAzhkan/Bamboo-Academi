import React from "react";
import LoginLayout from "../../Components/Common/LoginLayout/LoginLayout";
import StudentLoginForm from "../../Components/StudentLoginForm/StudentLoginForm";

import StudentLoginCss from "./StudentLogin.module.css";
import "react-toastify/dist/ReactToastify.css";
import "../../Assets/Fonts/Fonts.css";

export const StudentLogin = (props) => {
  return (
    <LoginLayout loginTitle="ورود کاربر">
      {props.location.state ? (
        <StudentLoginForm from={props.location.state.from} />
      ) : (
        <StudentLoginForm />
      )}
    </LoginLayout>
  );
};

export default StudentLogin;
