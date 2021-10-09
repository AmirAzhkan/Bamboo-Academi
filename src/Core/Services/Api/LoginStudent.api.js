import http from "../Interceptor/Interceptor";
import * as Storage from "../Storage/Storage";
import { toast } from "react-toastify";

//Main Url Of Our Project Backend
const MainURL = process.env.REACT_APP_PUBLIC_API_URL;

export const LoginUser = async (object, props) => {
  try {
    //Make An Object Base On What We Get From Our Login Form & What Api Need To Login The User
    const studentData = {
      email: object.email,
      password: object.password,
    };

    //Calling Api To Send The Information From Login Form
    const result = await http.post(`${MainURL}auth/login`, studentData);

    //Access To User Token & User Information
    const token = result.data.result.jwtToken;
    const userInfo = result.data.result.studentModel;

    //Set The User Token & User Information In Local Storage Or Session Storage Base On RemmemberMe
    if (object.rememberMe === true) {
      Storage.setItem("token", token);
      Storage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      Storage.sessionSetItem("token", token);
      Storage.sessionSetItem("userInfo", JSON.stringify(userInfo));
    }

    //Condition For Displaying Toast Massage If The Login Is Seccessfull
    if ((result.data.success = true))
      toast.success(result.data.message[0].message);

    //Redirect The User To Student Pannel Page Or The Location That User Come From
    setTimeout(() => {
      if (props.from) {
        const { pathname } = props.from;
        window.location = pathname;
      } else {
        window.location = "/studentPannel";
      }
    }, 5000);

    return result.data;
  } catch (error) {
    return null;
  }
};
