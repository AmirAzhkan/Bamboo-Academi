import * as Yup from "yup";

const employeeLoginValidationSchema = Yup.object({
  email: Yup.string()
    .email("آدرس ایمیل نامعتبر است")
    .required("ایمیل خود را وارد کنید"),

  password: Yup.string()
    .required("رمز عبور خود را وارد کنید")
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
      "رمز عبور نامعتبر است"
    ),
});

export function employeeLoginValidation() {
  return employeeLoginValidationSchema;
}
