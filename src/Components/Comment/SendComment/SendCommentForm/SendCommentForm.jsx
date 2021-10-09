import React from "react";
import { Formik, Form } from "formik";
//import { AddCourseValidation } from "../../Core/Validations/AddCourseFormValidation";
import { SendCommentOnSubmit } from "../../../../Core/Utils/OnSubmitFunctions/SendCommentOnSubmit";

import TextAreaInput from "../../../Common/TextAreaInput/TextAreaInput";
import Button from "../../../Common/Button/Button";

import SendCommentFormCss from "./SendCommentForm.module.css";
import "../../../../Assets/Fonts/Fonts.css";

const SendCommentForm = ({
  postId,
  userInfo,
  notVerifiedComments,
  refreshCommentsList,
}) => {
  //const AddCourseFromValidation = AddCourseValidation();

  return (
    <Formik
      initialValues={{
        postId: postId,
        email: userInfo.email,
        username: userInfo.fullName,
        comment: "",
      }}
      //validationSchema={AddCourseFromValidation}
      onSubmit={(values, { resetForm }) =>
        SendCommentOnSubmit(values, resetForm, refreshCommentsList)
      }
      enableReinitialize
    >
      <Form>
        <div className={` p-0 m-0 ${SendCommentFormCss.inputHolder}`}>
          <TextAreaInput
            name="comment"
            label="متن ارسالی مورد نظر :"
            row="10"
            placeholder="نظر خود را وارد کنید"
            selfStyle="sendCommentTextArea"
          />
        </div>
        <div
          className={`m-0 mb-3 ${SendCommentFormCss.buttonHolder}`}
          style={{ direction: "rtl" }}
        >
          <Button
            buttonText="ارسال نظر"
            buttonStyle="buttonDarkBlueToGreen"
            buttonPosition="sendCommentButtonPos"
            buttonType="submit"
          />
          {notVerifiedComments && (
            <p>شما ، {notVerifiedComments.length} نظر در انتظار تایید دارید</p>
          )}
        </div>
      </Form>
    </Formik>
  );
};

export default SendCommentForm;
