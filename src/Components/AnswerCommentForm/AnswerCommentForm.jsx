import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
//import { AddCourseValidation } from "../../Core/Validations/AddCourseFormValidation";
import { AnswerCommentOnSubmit } from "../../Core/Utils/OnSubmitFunctions/AnswerCommentOnSubmit";

import TextAreaInput from "../Common/TextAreaInput/TextAreaInput";
import Button from "../Common/Button/Button";

import AnswerCommentFormCss from "./AnswerCommentForm.module.css";
import "../../Assets/Fonts/Fonts.css";

const AnswerCommentForm = ({
  currentComment,
  refreshComments,
  textInputSize,
}) => {
  //const AddCourseFromValidation = AddCourseValidation();
  const [InitialValues, setInitialValues] = useState({
    answer: "",
  });

  useEffect(() => {
    if (currentComment.answer)
      setInitialValues({
        answer: currentComment.answer,
      });
  }, []);

  return (
    <Formik
      initialValues={InitialValues}
      //validationSchema={AddCourseFromValidation}
      onSubmit={(values) =>
        AnswerCommentOnSubmit(values, currentComment._id, refreshComments)
      }
      enableReinitialize
    >
      <Form>
        <div className={`m-0 ${AnswerCommentFormCss.inputHolder}`}>
          <TextAreaInput
            name="answer"
            label="پاسخ به کامنت :"
            row="10"
            placeholder="پاسخ خود را وارد کنید"
            selfStyle={textInputSize}
          />
        </div>
        <div
          className={`m-0 mb-3 ${AnswerCommentFormCss.buttonHolder}`}
          style={{ direction: "ltr" }}
        >
          <Button
            buttonText="پاسخ به کامنت"
            buttonStyle="addContextButton"
            buttonPosition="addContextButtonPos"
            buttonType="submit"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default AnswerCommentForm;
