import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { ModernDatePicker } from "persian-date-picker-mj";
import { registerValidation } from "../../Core/Validations/StudentsValidation/RegisterValidation";
import { registerOnSubmit } from "../../Core/Utils/OnSubmitFunctions/StudentRegisterOnSubmit";

import TextInputes from "../Common/TextInputes/TextInputes";
import Button from "../Common/Button/Button";

import RegisterFormCss from "./StudentRegisterForm.module.css";
import "./BirthDateDatePicker.css";
import "../../Assets/Fonts/Fonts.css";

export const StudentRegisterForm = (props) => {
  const InputInfo = [
    { name: "fullName", type: "text", inputPlaceHolder: "نام کاربری :" },
    { name: "email", type: "email", inputPlaceHolder: "ایمیل :" },
    { name: "phoneNumber", type: "text", inputPlaceHolder: "شماره موبایل :" },
    { name: "nationalId", type: "text", inputPlaceHolder: "شماره ملی :" },
  ];

  const RegisterValidation = registerValidation();

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phoneNumber: "",
        nationalId: "",
        birthDate: "",
        password: "",
      }}
      validationSchema={RegisterValidation}
      onSubmit={(values) => registerOnSubmit(values, props)}
    >
      <Form>
        <div className={`m-0 mt-2 ${RegisterFormCss.inputHolder}`}>
          {InputInfo.map((textInput) => (
            <TextInputes
              key={textInput.name}
              name={textInput.name}
              type={textInput.type}
              inputPlaceHolder={textInput.inputPlaceHolder}
              selfStyle="inputRegister"
              errorSelfStyle="registerError"
            />
          ))}
          <ModernDatePicker
            name="birthDate"
            hasLabel="false"
            placeholder="تاریخ تولد :"
          />
          <TextInputes
            name="password"
            type="password"
            inputPlaceHolder="رمز عبور :"
            selfStyle="inputRegister"
            errorSelfStyle="registerError"
          />
        </div>
        <div className="m-0" style={{ direction: "ltr" }}>
          <Button
            buttonText={"ثبت نام"}
            buttonStyle="buttonDarkBlueToGreen"
            buttonPosition="buttonForm"
            buttonType="submit"
          />
          <Link
            to="/studentLogin"
            className={`shab ${RegisterFormCss.linkStyle} ${RegisterFormCss.login}`}
          >
            ورود
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default StudentRegisterForm;
