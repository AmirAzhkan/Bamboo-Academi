import { RegisterUser } from "../../Services/Api/RegisterStudent.api";
import { toast } from "react-toastify";

export const adminRegisterStudentOnSubmit = async (values, { resetForm }) => {
  //console.log(values);

  const user = await RegisterUser(values);

  //Condition For Displaying A Toast Massage & Reset The Form Value If
  //The Student Registration Is Seccessfull From Admin ....
  if ((user.success = true)) {
    toast.success("دانشجوی مورد نظر با موفقیت افزوده شد");
    setTimeout(() => {
      resetForm();
    }, 5000);
  }
  //console.log(user);
};
