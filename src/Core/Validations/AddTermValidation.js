import * as Yup from "yup";

const AddTermValidationSchema = Yup.object({
  title: Yup.string()
    .required("عنوان ترم را وارد کنید")
    .min(5, "حداقل طول عنوان 5 کاراکتر است"),

  cost: Yup.string()
    .required("قیمت دوره را وارد کنید")
    .min(3, "حداقل قیمت 1000 تومان است"),

  capacity: Yup.string()
    .required("ظرفیت دوره را وارد کنید")
    .min(2, "حداقل ظرفیت دوره 10 نفر است"),

  startDate: Yup.string()
    .required("تاریخ شروع ترم را وارد کنید")
    .matches(
      "^[1-4]\\d{3}/((0[1-6]\\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\\/(30|([1-2][0-9])|(0[1-9]))))$",
      "تاریخ شروع نامعتبر است (1300/01/01)"
    ),

  endDate: Yup.string()
    .required("تاریخ پایان ترم را وارد کنید")
    .matches(
      "^[1-4]\\d{3}/((0[1-6]\\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\\/(30|([1-2][0-9])|(0[1-9]))))$",
      "تاریخ پایان نامعتبر است (1300/01/01)"
    ),
});

export function AddTermValidation() {
  return AddTermValidationSchema;
}
