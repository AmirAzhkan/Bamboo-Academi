import { LoginEmployee } from "../../Services/Api/LoginEmployee.api";

export const employeeLoginOnSubmit = async (values, { resetForm }) => {
  //console.log(values);

  const user = await LoginEmployee(values);
  //resetForm();
  //console.log(user);
};
