import http from "../Interceptor/Interceptor";

//Main Url Of Our Project Backend
const MainURL = process.env.REACT_APP_PUBLIC_API_URL;

export const RegisterUser = async (object) => {
  try {
    //Calling Api To Send The Information From Register Form
    const result = await http.post(`${MainURL}auth/register`, object);

    return result.data;
  } catch (error) {
    return null;
  }
};
