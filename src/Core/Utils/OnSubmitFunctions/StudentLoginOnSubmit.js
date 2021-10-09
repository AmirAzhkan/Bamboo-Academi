import { LoginUser } from "../../Services/Api/LoginStudent.api";

export const loginOnSubmit = async (values, props, { resetForm }) => {
  //console.log(values);

  const user = await LoginUser(values, props);
  //resetForm();
  //console.log(user);
};
