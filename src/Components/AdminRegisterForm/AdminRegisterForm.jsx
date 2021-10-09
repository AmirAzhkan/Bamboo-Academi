import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { ModernDatePicker } from "persian-date-picker-mj";
import { employeeRegisterValidation } from "../../Core/Validations/EmployeeValidation/RegisterValidation";
import { adminRegisterOnSubmit } from "../../Core/Utils/OnSubmitFunctions/AdminRegisterOnSubmit";

import TextInputes from "../../Components/Common/TextInputes/TextInputes";
import Button from "../../Components/Common/Button/Button";

import AdminRegisterFormCss from "./AdminRegisterForm.module.css";
import "./BirthDateDatePicker.css";
import "../../Assets/Fonts/Fonts.css";

export const AdminRegisterForm = () => {
  const InputInfo = [
    { name: "fullName", type: "text", inputPlaceHolder: "نام کاربری :" },
    { name: "email", type: "email", inputPlaceHolder: "ایمیل :" },
    { name: "address", type: "text", inputPlaceHolder: "آدرس :" },
    { name: "phoneNumber", type: "text", inputPlaceHolder: "شماره موبایل :" },
    { name: "nationalId", type: "text", inputPlaceHolder: "شماره ملی :" },
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
        role: "admin",
      }}
      validationSchema={RegisterValidation}
      onSubmit={adminRegisterOnSubmit}
    >
      <Form>
        <div className={`m-0 mt-2 ${AdminRegisterFormCss.inputHolder}`}>
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
            to="/employeeLogin"
            className={`shab ${AdminRegisterFormCss.linkStyle} ${AdminRegisterFormCss.login}`}
          >
            ورود
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default AdminRegisterForm;
