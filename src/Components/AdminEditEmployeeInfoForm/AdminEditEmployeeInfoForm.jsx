import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { ModernDatePicker } from "persian-date-picker-mj";
import { employeeEditProfileValidation } from "../../Core/Validations/EmployeeValidation/EditProfileValidation";
import { onAdminEditEmployeeInfo } from "../../Core/Utils/OnSubmitFunctions/OnAdminEditEmployeeInfo.api";
import { toast } from "react-toastify";

import PannelTextInputes from "../Common/PannelTextInputes/PannelTextInputes";
import Button from "../Common/Button/Button";

import AdminEditEmpInfoCss from "./AdminEditEmployeeInfoForm.module.css";

function AdminEditEmpInfoForm({
  employeeData,
  refreshEmployeeInfo,
  handleCloseModal,
}) {
  const InputInfo = [
    { name: "fullName", type: "text", inputPlaceHolder: "نام کاربری :" },
    { name: "email", type: "email", inputPlaceHolder: "ایمیل :" },
    { name: "address", type: "text", inputPlaceHolder: "آدرس :" },
    { name: "phoneNumber", type: "text", inputPlaceHolder: "شماره موبایل :" },
    { name: "nationalId", type: "text", inputPlaceHolder: "شماره ملی :" },
    // { name: "birthDate", type: "text", inputPlaceHolder: "تاریخ تولد :" },
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

  //Getting Employee Id =>
  const employeeId = employeeData._id;

  const handleCancel = (resetForm) => {
    toast.warning("تغییرات شما لغو شد");
    resetForm();
    setTimeout(() => {
      handleCloseModal(false);
    }, 5000);
  };

  return (
    <Formik
      initialValues={InitialValue}
      validationSchema={ProfileValidation}
      onSubmit={(values) =>
        onAdminEditEmployeeInfo(
          values,
          employeeId,
          refreshEmployeeInfo,
          handleCloseModal
        )
      }
      enableReinitialize
    >
      {({ resetForm }) => (
        <Form>
          <div className={`row m-0 ${AdminEditEmpInfoCss.inputHolder}`}>
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
            className={`m-0 ${AdminEditEmpInfoCss.buttonHolder}`}
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

export default AdminEditEmpInfoForm;
