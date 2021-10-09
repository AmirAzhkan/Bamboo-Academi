import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { ModernDatePicker } from "persian-date-picker-mj";
import { GetAllTeachers } from "../../Core/Services/Api/GetAllTeachers.api";
import { GetCourses } from "../../Core/Services/Api/GetCourses.api";
import { AddTermValidation } from "../../Core/Validations/AddTermValidation";
import { AddTermOnSubmit } from "../../Core/Utils/OnSubmitFunctions/AddTermOnSubmit";

import PannelTextInputes from "../Common/PannelTextInputes/PannelTextInputes";
import Button from "../Common/Button/Button";
import Loading from "../Common/Loading/Loading";

import AddTermFromCss from "./AddTermForm.module.css";
import "./AddTermDatePicker.css";
import "../../Assets/Fonts/Fonts.css";

const AddTermFrom = () => {
  const AddTermFromValidation = AddTermValidation();

  const [TeachersList, setTeachersList] = useState([]);
  const [CoursesList, setCoursesList] = useState([]);
  const [LoadingState, setLoadingState] = useState(true);

  useEffect(async () => {
    try {
      const teachers = await GetAllTeachers();
      setTeachersList(teachers.result);
      const courses = await GetCourses();
      setCoursesList(courses.result);
      setLoadingState(false);
    } catch (error) {}
  }, []);

  return (
    <>
      {LoadingState ? (
        <Loading />
      ) : (
        <Formik
          initialValues={{
            title: "",
            cost: "",
            endDate: "",
            startDate: "",
            capacity: "",
            teacher: "",
            course: "",
          }}
          validationSchema={AddTermFromValidation}
          onSubmit={AddTermOnSubmit}
          enableReinitialize
        >
          <Form>
            <div className={`row m-0 ${AddTermFromCss.inputHolder}`}>
              {/* Title Input : */}
              <PannelTextInputes
                name="title"
                type="text"
                inputLable="نام ترم :"
                inputPlaceHolder="نام ترم را وارد کنید ( حداقل 5 کاراکتر )"
                selfStyle="inputPannel"
                selfHolder="addTermTitleHolder"
              />
              <PannelTextInputes
                name="cost"
                type="text"
                inputLable="قیمت ترم :"
                inputPlaceHolder="قیمت ترم را وارد کنید ( حداقل قیمت : 1000 )"
                selfStyle="inputPannel"
                selfHolder="addTermHolder"
              />
              <PannelTextInputes
                name="capacity"
                type="text"
                inputLable="ظرفیت ترم :"
                inputPlaceHolder="ظرفیت ترم را وارد کنید (حداقل ظرفیت : 10 نفر)"
                selfStyle="inputPannel"
                selfHolder="addTermHolder"
              />
              <div id="addTermDatePickerHolder">
                <ModernDatePicker
                  name="startDate"
                  placeholder="تاریخ شروع را وارد کنید"
                  lableText="تاریخ شروع :"
                />
              </div>
              <div id="addTermDatePickerHolder">
                <ModernDatePicker
                  name="endDate"
                  placeholder="تاریخ پایان را وارد کنید"
                  lableText="تاریخ پایان :"
                />
              </div>
              <div className={AddTermFromCss.selectOptionHolder}>
                <p>انتخاب استاد :</p>
                <Field as="select" name="teacher">
                  {TeachersList &&
                    TeachersList.map((teacher) => (
                      <option value={teacher._id}>{teacher.fullName}</option>
                    ))}
                </Field>
              </div>
              <div className={AddTermFromCss.selectOptionHolder}>
                <p>انتخاب دوره :</p>
                <Field as="select" name="course">
                  {CoursesList &&
                    CoursesList.map((course) => (
                      <option value={course._id}>{course.courseName}</option>
                    ))}
                </Field>
              </div>
            </div>
            <div
              className={`m-0 mt-5 ${AddTermFromCss.buttonHolder}`}
              style={{ direction: "ltr" }}
            >
              <Button
                buttonText="افزودن ترم"
                buttonStyle="addContextButton"
                buttonPosition="addContextButtonPos"
                buttonType="submit"
              />
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
};

export default AddTermFrom;
