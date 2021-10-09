import React from "react";
import { Formik, Form } from "formik";
import { ModernDatePicker } from "persian-date-picker-mj";
import { registerValidation } from "../../Core/Validations/StudentsValidation/RegisterValidation";
import { adminRegisterStudentOnSubmit } from "../../Core/Utils/OnSubmitFunctions/StudentRegister-Admin-OnSubmit";

import PannelTextInputes from "../Common/PannelTextInputes/PannelTextInputes";
import Button from "../Common/Button/Button";

import RegisterFormCss from "./StudentRegisterForm.module.css";
import "../../Assets/Fonts/Fonts.css";

export const StudentRegisterForm = () => {
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
      onSubmit={adminRegisterStudentOnSubmit}
    >
      <Form>
        <div className={`m-0 mt-1 ${RegisterFormCss.inputHolder}`}>
          {InputInfo.map((textInput) => (
            <PannelTextInputes
              key={textInput.name}
              name={textInput.name}
              type={textInput.type}
              inputLable={textInput.inputPlaceHolder}
              //inputPlaceHolder={textInput.inputPlaceHolder}
              selfStyle="inputPannel"
            />
          ))}
          <div className="datePickerHolder">
            <ModernDatePicker name="birthDate" lableText="تاریخ تولد :" />
          </div>
          <PannelTextInputes
            name="password"
            type="password"
            inputLable="رمز عبور :"
            selfStyle="inputPannel"
          />
        </div>
        <div className="m-0" style={{ textAlign: "left" }}>
          <Button
            buttonText={"ثبت نام"}
            buttonStyle="registerButton"
            buttonPosition="buttonForm"
            buttonType="submit"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default StudentRegisterForm;
