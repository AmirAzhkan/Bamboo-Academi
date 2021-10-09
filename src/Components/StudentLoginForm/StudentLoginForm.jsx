import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { loginValidation } from "../../Core/Validations/StudentsValidation/LoginValidation";
import { loginOnSubmit } from "../../Core/Utils/OnSubmitFunctions/StudentLoginOnSubmit";

import TextInputes from "../Common/TextInputes/TextInputes";
import Checkbox from "../Common/CheckBoxInputes/CheckBoxInputes";
import Button from "../Common/Button/Button";

import LoginFormCss from "./StudentLoginForm.module.css";
import "../../Assets/Fonts/Fonts.css";

export const StudentLoginForm = (props) => {
  const LoginValidation = loginValidation();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
      }}
      validationSchema={LoginValidation}
      onSubmit={(values, func) => loginOnSubmit(values, props, func)}
    >
      <Form>
        <div className={`m-0 mt-4 ${LoginFormCss.inputHolder}`}>
          <TextInputes
            name="email"
            type="email"
            selfStyle="inputLog"
            inputPlaceHolder="ایمیل :"
            errorSelfStyle="loginError"
          />
          <TextInputes
            name="password"
            type="password"
            selfStyle="inputLog"
            inputPlaceHolder="رمز عبور :"
            errorSelfStyle="loginError"
          />
        </div>
        <div className="m-0 mt-3" style={{ position: "relative" }}>
          <Checkbox name="rememberMe">من را به خاطر بسپار</Checkbox>
          <Link
            to="/login/forgotPassword"
            className={`shab ${LoginFormCss.linkStyle} ${LoginFormCss.forgotPassword}`}
          >
            فراموشی رمز
          </Link>
        </div>
        <div
          className="m-0 mt-4"
          style={{ direction: "ltr", textAlign: "left" }}
        >
          <Button
            buttonText={"ورود"}
            buttonStyle="buttonDarkBlueToGreen"
            buttonPosition="buttonForm"
            buttonType="submit"
          />
          <Link
            to="/studentRegister"
            className={`shab ${LoginFormCss.linkStyle} ${LoginFormCss.register}`}
          >
            ثبت نام
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default StudentLoginForm;
