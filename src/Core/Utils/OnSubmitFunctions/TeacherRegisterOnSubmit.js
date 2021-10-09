import { RegisterEmployee } from "../../Services/Api/RegisterEmployee.api";
import { LoginEmployee } from "../../Services/Api/LoginEmployee.api";

export const teacherRegisterOnSubmit = async (values, { resetForm }) => {
  //console.log(values);

  const user = await RegisterEmployee(values);
  //resetForm();

  //Condition For Calling LoginEmployee Function & Log in The Employe Directly If The Register Is Seccessfull
  if ((user.succsess = true)) {
    setTimeout(() => {
      LoginEmployee({ email: values.email, password: values.password });
    }, 5000);
  }
  //console.log(user);
};
