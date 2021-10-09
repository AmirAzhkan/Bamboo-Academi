import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { employeeRegisterValidation } from "../../Core/Validations/EmployeeValidation/RegisterValidation";
import { teacherRegisterOnSubmit } from "../../Core/Utils/OnSubmitFunctions/TeacherRegisterOnSubmit";

import TextInputes from "../../Components/Common/TextInputes/TextInputes";
import Button from "../../Components/Common/Button/Button";

import TeacherRegisterFormCss from "./TeacherRegisterForm.module.css";
import "../../Assets/Fonts/Fonts.css";

export const TeacherRegisterForm = () => {
  const InputInfo = [
    { name: "fullName", type: "text", inputPlaceHolder: "نام کاربری :" },
    { name: "email", type: "email", inputPlaceHolder: "ایمیل :" },
    { name: "address", type: "text", inputPlaceHolder: "آدرس :" },
    { name: "phoneNumber", type: "text", inputPlaceHolder: "شماره موبایل :" },
    { name: "nationalId", type: "text", inputPlaceHolder: "شماره ملی :" },
    { name: "birthDate", type: "text", inputPlaceHolder: "تاریخ تولد :" },
    { name: "password", type: "password", inputPlaceHolder: "رمز عبور :" },
  ];

  const RegisterValidation = employeeRegisterValidation();

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        address: "",
        phoneNumber: "",
        nationalId: "",
        birthDate: "",
        password: "",
        role: "teacher",
      }}
      validationSchema={RegisterValidation}
      onSubmit={teacherRegisterOnSubmit}
    >
      <Form>
        <div className={`m-0 mt-2 ${TeacherRegisterFormCss.inputHolder}`}>
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
        </div>
        <div className="m-0" style={{ direction: "ltr" }}>
          <Button
            buttonText={"ثبت نام"}
            buttonStyle="buttonDarkBlueToGreen"
            buttonPosition="buttonForm"
            buttonType="submit"
          />
          <Link
            to="/employeeLogin"
            className={`shab ${TeacherRegisterFormCss.linkStyle} ${TeacherRegisterFormCss.login}`}
          >
            ورود
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default TeacherRegisterForm;
