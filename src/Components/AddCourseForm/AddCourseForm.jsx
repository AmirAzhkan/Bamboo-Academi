import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { AddCourseValidation } from "../../Core/Validations/AddCourseFormValidation";
import { AddCourseOnSubmit } from "../../Core/Utils/OnSubmitFunctions/AddCourseOnSubmit";

import TextAreaInput from "../Common/TextAreaInput/TextAreaInput";
import OploadFileInput from "../Common/OploadFileInput/OploadFileInput";
import PannelTextInputes from "../Common/PannelTextInputes/PannelTextInputes";
import Button from "../Common/Button/Button";

import AddCourseFormCss from "./AddCourseForm.module.css";
import "../../Assets/Fonts/Fonts.css";

const AddCourseForm = () => {
  const AddCourseFromValidation = AddCourseValidation();

  return (
    <Formik
      initialValues={{
        courseName: "",
        topics: ["", ""],
        file: "",
        description: "",
      }}
      validationSchema={AddCourseFromValidation}
      onSubmit={AddCourseOnSubmit}
      enableReinitialize
    >
      {({ setFieldValue, values, errors, touched }) => (
        <Form>
          <div className={`row m-0 ${AddCourseFormCss.inputHolder}`}>
            {/*                                                           Course Name Input : */}
            <PannelTextInputes
              name="courseName"
              type="text"
              inputLable="نام دوره :"
              inputPlaceHolder="نام دوره را وارد کنید ( حداقل 10 کاراکتر )"
              selfStyle="inputPannel"
              selfHolder="addCourseHolder"
            />
            {/*                                                     File Input (Image Input) : */}
            <OploadFileInput
              setFieldValue={setFieldValue}
              oploadFileInputSelfHolder="addCourseOploadFileHolder"
              oploadFileInputLable="آپلود عکس :"
            />
            {/*                                                               Text Area Input  */}
            <TextAreaInput
              name="description"
              label="متن دوره :"
              row="10"
              placeholder="متن مقاله را وارد کنید ( حداقل 50 کاراکتر )"
            />
            {/*                                                                    Topic Input */}
            <div className={AddCourseFormCss.topicsHolder}>
              <FieldArray
                name="topics"
                render={({ insert, remove, push }) => (
                  <>
                    {values.topics.length > 0 &&
                      values.topics.map((topic, index) => (
                        <div
                          className={`${AddCourseFormCss.topicRow}`}
                          key={index}
                        >
                          <div className={AddCourseFormCss.topicCol}>
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

                          <div className={AddCourseFormCss.topicCol}>
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            ></button>
                          </div>
                        </div>
                      ))}
                    <div className={AddCourseFormCss.addTopicHolder}>
                      <button
                        type="button"
                        className="secondary mt-3"
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
            className={`m-0 ${AddCourseFormCss.buttonHolder}`}
            style={{ direction: "ltr" }}
          >
            <Button
              buttonText="افزودن دوره"
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

export default AddCourseForm;
