import * as Yup from "yup";

const AddCourseValidationSchema = Yup.object({
  courseName: Yup.string()
    .required("عنوان مقاله را وارد کنید")
    .min(10, "حداقل طول عنوان 10 کاراکتر است"),

  description: Yup.string()
    .required("متن مقاله را وارد کنید")
    .min(50, "حداقل طول متن مقاله 50 کاراکتر است"),
});

export function AddCourseValidation() {
  return AddCourseValidationSchema;
}
