import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { ModernDatePicker } from "persian-date-picker-mj";
import { employeeEditProfileValidation } from "../../Core/Validations/EmployeeValidation/EditProfileValidation";
import { onEditInformation } from "../../Core/Utils/OnSubmitFunctions/OnEditEmployeeInformation";
import { toast } from "react-toastify";

import PannelTextInputes from "../Common/PannelTextInputes/PannelTextInputes";
import Button from "../Common/Button/Button";

import EmpEditProfileFormCss from "./EmployeeEditProfileForm.module.css";

function EditProfileForm({ employeeData, refreshEmployeeInfo }) {
  const InputInfo = [
    { name: "fullName", type: "text", inputPlaceHolder: "نام کاربری :" },
    { name: "email", type: "email", inputPlaceHolder: "ایمیل :" },
    { name: "address", type: "text", inputPlaceHolder: "آدرس :" },
    { name: "phoneNumber", type: "text", inputPlaceHolder: "شماره موبایل :" },
    { name: "nationalId", type: "text", inputPlaceHolder: "شماره ملی :" },
  ];

  const ProfileValidation = employeeEditProfileValidation();

  const [InitialValue, setInitialValue] = useState({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
    nationalId: "",
    birthDate: "",
  });

  useEffect(() => {
    setInitialValue({
      fullName: employeeData.fullName,
      email: employeeData.email,
      address: employeeData.address,
      phoneNumber: employeeData.phoneNumber,
      nationalId: employeeData.nationalId,
      birthDate: employeeData.birthDate,
    });
  }, [employeeData]);

  const handleCancel = (resetForm) => {
    toast.warning("تغییرات شما لغو شد");
    setTimeout(() => {
      resetForm();
    }, 5000);
  };
  return (
    <Formik
      initialValues={InitialValue}
      validationSchema={ProfileValidation}
      onSubmit={(values) => onEditInformation(values, refreshEmployeeInfo)}
      enableReinitialize
    >
      {({ resetForm }) => (
        <Form>
          <div className={`row m-0 ${EmpEditProfileFormCss.inputHolder}`}>
            {InputInfo.map((textInput) => (
              <PannelTextInputes
                key={textInput.name}
                name={textInput.name}
                type={textInput.type}
                inputLable={textInput.inputPlaceHolder}
                // inputPlaceHolder={textInput.inputPlaceHolder}
                selfStyle="inputPannel"
              />
            ))}
            <div className="datePickerHolder">
              <ModernDatePicker
                name="birthDate"
                initialValue={InitialValue.birthDate}
                placeholder="تاریخ تولد :"
                lableText="تاریخ تولد :"
              />
            </div>
          </div>
          <div
            className={`m-0 ${EmpEditProfileFormCss.buttonHolder}`}
            style={{ direction: "ltr" }}
          >
            <Button
              buttonText="ثبت تغییرات"
              buttonStyle="registerButton"
              buttonPosition="registerButtonPos"
              buttonType="submit"
            />
            <Button
              buttonText="لغو تغییرات"
              buttonStyle="cancelButton"
              buttonPosition="cancelButtonPos"
              buttonType="button"
              onClick={() => handleCancel(resetForm)}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default EditProfileForm;
