import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { ModernDatePicker } from "persian-date-picker-mj";
import { GetAllTeachers } from "../../Core/Services/Api/GetAllTeachers.api";
import { GetCourses } from "../../Core/Services/Api/GetCourses.api";
import { AddTermValidation } from "../../Core/Validations/AddTermValidation";
import { EditTermOnSubmit } from "../../Core/Utils/OnSubmitFunctions/OnEditTerm";

import PannelTextInputes from "../Common/PannelTextInputes/PannelTextInputes";
import Button from "../Common/Button/Button";
import Loading from "../Common/Loading/Loading";

import EditTermFromCss from "./EditTermForm.module.css";
import "../../Assets/Fonts/Fonts.css";

const EditTermFrom = ({ termInfo, refreshTermsList, manageModal }) => {
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
            title: termInfo.title,
            cost: termInfo.cost,
            endDate: termInfo.endDate.split("T")[0].replace(/-/g, "/"),
            startDate: termInfo.startDate.split("T")[0].replace(/-/g, "/"),
            capacity: termInfo.capacity,
            teacher: termInfo.teacher._id,
            course: termInfo.course._id,
          }}
          validationSchema={AddTermFromValidation}
          onSubmit={(values) =>
            EditTermOnSubmit(
              values,
              termInfo._id,
              refreshTermsList,
              manageModal
            )
          }
          enableReinitialize
        >
          <Form>
            <div className={`row m-0 ${EditTermFromCss.inputHolder}`}>
              {/* Title Input : */}
              <PannelTextInputes
                name="title"
                type="text"
                inputLable="نام ترم :"
                inputPlaceHolder="نام ترم را وارد کنید ( حداقل 10 کاراکتر )"
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
                  initialValue={termInfo.startDate
                    .split("T")[0]
                    .replace(/-/g, "/")}
                  placeholder="تاریخ شروع را وارد کنید"
                  lableText="تاریخ شروع :"
                />
              </div>
              <div id="addTermDatePickerHolder">
                <ModernDatePicker
                  name="endDate"
                  initialValue={termInfo.endDate
                    .split("T")[0]
                    .replace(/-/g, "/")}
                  placeholder="تاریخ پایان را وارد کنید"
                  lableText="تاریخ پایان :"
                />
              </div>
              <div className={EditTermFromCss.selectOptionHolder}>
                <p>انتخاب استاد :</p>
                <Field as="select" name="teacher">
                  <option selected value={termInfo.teacher._id}>
                    {termInfo.teacher.fullName}
                  </option>
                  {TeachersList &&
                    TeachersList.map((teacher) => (
                      <option key={teacher._id} value={teacher._id}>
                        {teacher.fullName}
                      </option>
                    ))}
                </Field>
              </div>
              <div className={EditTermFromCss.selectOptionHolder}>
                <p>انتخاب دوره :</p>
                <Field as="select" name="course">
                  <option selected value={termInfo.course._id}>
                    {termInfo.course.courseName}
                  </option>
                  {CoursesList &&
                    CoursesList.map((course) => (
                      <option key={course._id} value={course._id}>
                        {course.courseName}
                      </option>
                    ))}
                </Field>
              </div>
            </div>
            <div
              className={`m-0 mt-4 mb-4 ${EditTermFromCss.buttonHolder}`}
              style={{ direction: "ltr" }}
            >
              <Button
                buttonText="ویرایش ترم"
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

export default EditTermFrom;
