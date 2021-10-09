import * as Yup from "yup";

const AddArticleValidationSchema = Yup.object({
  title: Yup.string()
    .required("عنوان مقاله را وارد کنید")
    .min(15, "حداقل طول عنوان 15 کاراکتر است"),

  text: Yup.string()
    .required("متن مقاله را وارد کنید")
    .min(50, "حداقل طول متن مقاله 50 کاراکتر است"),
});

export function AddArticleValidation() {
  return AddArticleValidationSchema;
}
