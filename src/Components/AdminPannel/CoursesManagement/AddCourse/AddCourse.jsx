import React from "react";
import AddCourseForm from "../../../AddCourseForm/AddCourseForm";

import AddCourseCss from "./AddCourse.module.css";

const AddCourse = () => {
  return (
    <React.Fragment>
      <h4 className={AddCourseCss.titles}>فرم افزودن دوره :</h4>
      <div className={AddCourseCss.formHolder}>
        <AddCourseForm />
      </div>
    </React.Fragment>
  );
};

export default AddCourse;
