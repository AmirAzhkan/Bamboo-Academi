import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { employeeLoginValidation } from "../../Core/Validations/EmployeeValidation/LoginValidation";
import { employeeLoginOnSubmit } from "../../Core/Utils/OnSubmitFunctions/EmployeeLoginOnSubmit";

import TextInputes from "../Common/TextInputes/TextInputes";
import Checkbox from "../Common/CheckBoxInputes/CheckBoxInputes";
import Button from "../Common/Button/Button";

import EmployeeLoginFormCss from "./EmployeeLoginForm.module.css";
import "../../Assets/Fonts/Fonts.css";

export const EmployeeLoginForm = () => {
  const LoginValidation = employeeLoginValidation();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
      }}
      validationSchema={LoginValidation}
      onSubmit={employeeLoginOnSubmit}
    >
      <Form>
        <div className={`m-0 mt-4 ${EmployeeLoginFormCss.inputHolder}`}>
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
            className={`shab ${EmployeeLoginFormCss.linkStyle} ${EmployeeLoginFormCss.forgotPassword}`}
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
          {/* <Link
            to="/adminRegister"
            className={`shab ${EmployeeLoginFormCss.linkStyle} ${EmployeeLoginFormCss.register}`}
          >
            ثبت نام
          </Link> */}
        </div>
      </Form>
    </Formik>
  );
};

export default EmployeeLoginForm;
