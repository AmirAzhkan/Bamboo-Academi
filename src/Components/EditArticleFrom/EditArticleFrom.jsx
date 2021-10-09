import React from "react";
import { Formik, Form, Field } from "formik";
import { AddArticleValidation } from "../../Core/Validations/AddArticleFromValidation";
import { EditArticleOnSubmit } from "../../Core/Utils/OnSubmitFunctions/OnEditArticle";

import TextAreaInput from "../Common/TextAreaInput/TextAreaInput";
import OploadFileInput from "../Common/OploadFileInput/OploadFileInput";
import TextInputes from "../Common/TextInputes/TextInputes";
import Button from "../Common/Button/Button";

import EditArticleFromCss from "./EditArticleFrom.module.css";
import "../../Assets/Fonts/Fonts.css";

const EditArticleFrom = ({ articleInfo, refreshArticlesInfo, manageModal }) => {
  const AddArticleFromValidation = AddArticleValidation();

  return (
    <Formik
      initialValues={{
        title: articleInfo.title,
        category: articleInfo.category,
        file: articleInfo.image,
        text: articleInfo.text,
      }}
      validationSchema={AddArticleFromValidation}
      onSubmit={(values) =>
        EditArticleOnSubmit(
          values,
          refreshArticlesInfo,
          articleInfo._id,
          manageModal
        )
      }
      enableReinitialize
    >
      {({ setFieldValue }) => (
        <Form>
          <div className={`row m-0 ${EditArticleFromCss.inputHolder}`}>
            {/* Category Input : */}
            <div
              role="group"
              aria-labelledby="my-radio-group"
              className={`shab ${EditArticleFromCss.categoryHolder}`}
            >
              <p className={EditArticleFromCss.categoryTitle}>دسته بندی :</p>
              <label>
                <Field required type="radio" name="category" value="article" />
                مقاله
              </label>
              <label>
                <Field required type="radio" name="category" value="news" />
                خبر
              </label>
            </div>
            <div className={EditArticleFromCss.oldImageHolder}>
              <p>عکس مقاله :</p>
              <div className={EditArticleFromCss.oldArticleImage}>
                <img src={articleInfo.image} alt="عکس مقاله" />
              </div>
            </div>
            {/* File Input (Image Input) : */}
            <OploadFileInput
              required={false}
              setFieldValue={setFieldValue}
              oploadFileInputSelfHolder="editArticleOploadFileHolder"
              oploadFileInputLable="آپلود عکس جدید :"
            />
            {/* Title Input : */}
            <div className={EditArticleFromCss.titleInputHolder}>
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
            className={`m-0 mb-4 ${EditArticleFromCss.buttonHolder}`}
            style={{ direction: "ltr" }}
          >
            <Button
              buttonText="ویرایش اطلاعات"
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

export default EditArticleFrom;
