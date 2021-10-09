import React from "react";
import { Formik, Form, Field } from "formik";
import { AddArticleValidation } from "../../Core/Validations/AddArticleFromValidation";
import { AddArticleOnSubmit } from "../../Core/Utils/OnSubmitFunctions/AddArticleOnSubmit";

import TextAreaInput from "../Common/TextAreaInput/TextAreaInput";
import OploadFileInput from "../Common/OploadFileInput/OploadFileInput";
import TextInputes from "../Common/TextInputes/TextInputes";
import Button from "../Common/Button/Button";

import AddArticleFromCss from "./AddArticleFrom.module.css";
import "../../Assets/Fonts/Fonts.css";

const AddArticleFrom = () => {
  const AddArticleFromValidation = AddArticleValidation();

  return (
    <Formik
      initialValues={{
        title: "",
        category: "",
        file: "",
        text: "",
      }}
      validationSchema={AddArticleFromValidation}
      onSubmit={AddArticleOnSubmit}
      enableReinitialize
    >
      {({ setFieldValue }) => (
        <Form>
          <div className={`row m-0 ${AddArticleFromCss.inputHolder}`}>
            {/* Category Input : */}
            <div
              role="group"
              aria-labelledby="my-radio-group"
              className={`shab ${AddArticleFromCss.categoryHolder}`}
            >
              <p className={AddArticleFromCss.categoryTitle}>دسته بندی :</p>
              <label>
                <Field required type="radio" name="category" value="article" />
                مقاله
              </label>
              <label>
                <Field required type="radio" name="category" value="news" />
                خبر
              </label>
            </div>
            {/* File Input (Image Input) : */}
            <OploadFileInput
              setFieldValue={setFieldValue}
              oploadFileInputSelfHolder="addArticleOploadFileHolder"
              oploadFileInputLable="آپلود عکس :"
            />
            {/* Title Input : */}
            <div className={AddArticleFromCss.titleInputHolder}>
              <p>عنوان مقاله :</p>
              <TextInputes
                name="title"
                type="text"
                inputPlaceHolder="عنوان مقاله را وارد کنید ( حداقل 15 کاراکتر )"
                selfStyle="addArticleTitle"
                errorSelfStyle="registerError"
              />
            </div>
            {/* Text Area Input  */}
            <TextAreaInput
              name="text"
              label="متن مقاله :"
              row="10"
              placeholder="متن مقاله را وارد کنید ( حداقل 50 کاراکتر )"
            />
          </div>
          <div
            className={`m-0 ${AddArticleFromCss.buttonHolder}`}
            style={{ direction: "ltr" }}
          >
            <Button
              buttonText="افزودن مقاله"
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

export default AddArticleFrom;
