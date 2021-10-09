import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { ModernDatePicker } from "persian-date-picker-mj";
import { EditProfileValidation } from "../../../Core/Validations/StudentsValidation/EditProfileValidation";
import { onEditInformation } from "../../../Core/Utils/OnSubmitFunctions/OnEditStudentInformation";
import { toast } from "react-toastify";

import PannelTextInputes from "../../Common/PannelTextInputes/PannelTextInputes";
import "./EditStuBirthDateDatePicker.css";
import Button from "../../Common/Button/Button";

import EditProfileFormCss from "./EditProfileForm.module.css";

function EditProfileForm({ studentInfo, refreshStudentInfo }) {
  const InputInfo = [
    { name: "fullName", type: "text", inputPlaceHolder: "نام کاربری :" },
    { name: "email", type: "email", inputPlaceHolder: "ایمیل :" },
    { name: "phoneNumber", type: "text", inputPlaceHolder: "شماره موبایل :" },
    { name: "nationalId", type: "text", inputPlaceHolder: "شماره ملی :" },
  ];

  const ProfileValidation = EditProfileValidation();

  const [InitialValue, setInitialValue] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    nationalId: "",
    birthDate: "",
  });

  useEffect(() => {
    setInitialValue({
      fullName: studentInfo.fullName,
      email: studentInfo.email,
      phoneNumber: studentInfo.phoneNumber,
      nationalId: studentInfo.nationalId,
      birthDate: studentInfo.birthDate,
    });
  }, [studentInfo]);

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
      onSubmit={(values) => onEditInformation(values, refreshStudentInfo)}
      enableReinitialize
    >
      {({ resetForm }) => (
        <Form>
          <div className={`row m-0 ${EditProfileFormCss.inputHolder}`}>
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
            className={`m-0 ${EditProfileFormCss.buttonHolder}`}
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
