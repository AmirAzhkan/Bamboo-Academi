import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { AddCourseValidation } from "../../Core/Validations/AddCourseFormValidation";
import { EditCourseOnSubmit } from "../../Core/Utils/OnSubmitFunctions/OnEditCourse";

import TextAreaInput from "../Common/TextAreaInput/TextAreaInput";
import OploadFileInput from "../Common/OploadFileInput/OploadFileInput";
import PannelTextInputes from "../Common/PannelTextInputes/PannelTextInputes";
import Button from "../Common/Button/Button";

import EditCourseFormCss from "./EditCourseForm.module.css";
import "../../Assets/Fonts/Fonts.css";

const EditCourseForm = ({ courseInfo, refreshCoursesInfo, manageModal }) => {
  const AddCourseFromValidation = AddCourseValidation();

  console.log([courseInfo.topics]);

  return (
    <Formik
      initialValues={{
        courseName: courseInfo.courseName,
        topics: courseInfo.topics,
        file: courseInfo.image,
        description: courseInfo.description,
      }}
      validationSchema={AddCourseFromValidation}
      onSubmit={(values) =>
        EditCourseOnSubmit(
          values,
          courseInfo._id,
          refreshCoursesInfo,
          manageModal
        )
      }
      enableReinitialize
    >
      {({ setFieldValue, values, errors, touched }) => (
        <Form>
          <div className={`row m-0 ${EditCourseFormCss.inputHolder}`}>
            <div className={EditCourseFormCss.oldImageHolder}>
              <p>عکس دوره :</p>
              <div className={EditCourseFormCss.oldArticleImage}>
                <img src={courseInfo.image} alt="عکس دوره" />
              </div>
            </div>
            {/*                                                     File Input (Image Input) : */}
            <OploadFileInput
              required={false}
              setFieldValue={setFieldValue}
              oploadFileInputSelfHolder="editCourseOploadFileHolder"
              oploadFileInputLable="آپلود عکس:"
            />
            {/*                                                           Course Name Input : */}
            <PannelTextInputes
              name="courseName"
              type="text"
              inputLable="نام دوره :"
              inputPlaceHolder="نام دوره را وارد کنید ( حداقل 10 کاراکتر )"
              selfStyle="inputPannel"
              selfHolder="editCourseHolder"
            />
            {/*                                                               Text Area Input  */}
            <TextAreaInput
              name="description"
              label="متن دوره :"
              row="10"
              placeholder="متن مقاله را وارد کنید ( حداقل 50 کاراکتر )"
            />
            {/*                                                                    Topic Input */}
            <div className={EditCourseFormCss.topicsHolder}>
              <FieldArray
                name="topics"
                render={({ insert, remove, push }) => (
                  <>
                    {values.topics &&
                      values.topics.length > 0 &&
                      values.topics.map((topic, index) => (
                        <div
                          className={`${EditCourseFormCss.topicRow}`}
                          key={index}
                        >
                          <div className={EditCourseFormCss.topicCol}>
                            <Field
                              name={`topics.${index}`}
                              placeholder="سرفصل دوره"
                              type="text"
                            />
                            {errors.topics &&
                              errors.topics[index] &&
                              errors.topics[index].name &&
                              touched.topics &&
                              touched.topics[index].name && (
                                <div className="field-error">
                                  {errors.topics[index].name}
                                </div>
                              )}
                          </div>

                          <div className={EditCourseFormCss.topicCol}>
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            ></button>
                          </div>
                        </div>
                      ))}
                    <div className={EditCourseFormCss.addTopicHolder}>
                      <button
                        type="button"
                        className="secondary mb-4"
                        onClick={() => push("")}
                      >
                        افزودن سرفصل
                      </button>
                    </div>
                  </>
                )}
              />
            </div>
          </div>
          <div
            className={`m-0 mb-4 ${EditCourseFormCss.buttonHolder}`}
            style={{ direction: "ltr" }}
          >
            <Button
              buttonText="ثبت تغییرات"
              buttonStyle="addContextButton"
              buttonPosition="addContextButtonPos"
              buttonType="submit"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditCourseForm;
