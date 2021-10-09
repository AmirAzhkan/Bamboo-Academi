import * as Yup from "yup";

const employeeRegisterValidationSchema = Yup.object({
  fullName: Yup.string()
    .required("نام کاربری خود را وارد کنید")
    .matches(
      "^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$",
      "نام کاربری نامعتبر(8 کاراکتر شامل حرف و عدد لاتین)"
    ),
  // RegEx Meaning : 8 to 20 Characters , Alphanumeric & Underscore & Dot ,
  // No Dot Or Underscore At The End Or Start ,
  // Underscore & Dot Cant Be Next To To Each Other (e.g user_.name).
  // Underscore Or Dot Can't Be Used Multiple Times In A Row (e.g user__name / user..name).

  email: Yup.string()
    .email("آدرس ایمیل نامعتبر است")
    .required("ایمیل خود را وارد کنید"),

  address: Yup.string()
    .required("آدرس خود را وارد کنید")
    .matches(
      "^([a-zA-z0-9/\\''(),-s]{2,255})$",
      "آدرس نامعتبر است (لاتین وارد شود:Sari-Farhang7)"
    ),

  phoneNumber: Yup.string()
    .required("شماره موبایل خود را وارد کنید")
    .matches("^(\\+98|0)?9\\d{9}$", "شماره موبایل نامعتبر است"),
  //RegEx Meaning : All Of Persian Phone Number Style (Started With +98 Or 0 )

  nationalId: Yup.string()
    .required("شماره ملی خود را وارد کنید")
    .matches("^[0-9]{10}$", "شماره ملی نامعتبر است"),
  //RegEx Meaning : NationalNumber Style Of Iran

  birthDate: Yup.string()
    .required("تاریخ تولد خود را وارد کنید")
    .matches(
      "^[1-4]\\d{3}/((0[1-6]\\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\\/(30|([1-2][0-9])|(0[1-9]))))$",
      "تاریخ تولد نامعتبر است (1300/01/01)"
    ),
  //RegEx Meaning : 1300/01/01 (All Of Date Exceptions Is Supported)

  password: Yup.string()
    .required("رمز عبور خود را وارد کنید")
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
      "رمز عبور نامعتبر"
    ),
});

export function employeeRegisterValidation() {
  return employeeRegisterValidationSchema;
}
