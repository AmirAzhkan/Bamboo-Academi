import { RegisterUser } from "../../Services/Api/RegisterStudent.api";
import { LoginUser } from "../../Services/Api/LoginStudent.api";

export const registerOnSubmit = async (values, props) => {
  const user = await RegisterUser(values);
  //resetForm();

  //Condition For Calling LoginUser Function & Log in The User Directly If The Register Is Seccessfull
  if ((user.succsess = true)) {
    setTimeout(() => {
      LoginUser({ email: values.email, password: values.password }, props);
    }, 5000);
  }
  //console.log(user);
};
