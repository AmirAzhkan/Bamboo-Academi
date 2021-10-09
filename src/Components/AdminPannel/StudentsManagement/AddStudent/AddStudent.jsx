import React from "react";
import StudentRegisterForm from "../../../StudentRegisterForm-Admin/StudentRegisterForm";

import AddStudentCss from "./AddStudent.module.css";

function AddStudent() {
  return (
    <React.Fragment>
      <h4 className={AddStudentCss.titles}>افزودن دانشجو :</h4>
      <div className={AddStudentCss.formHolder}>
        <StudentRegisterForm />
      </div>
    </React.Fragment>
  );
}

export default AddStudent;
