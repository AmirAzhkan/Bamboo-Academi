import http from "../../Services/Interceptor/Interceptor";
import { toast } from "react-toastify";

//Main Url Of Our Project Backend
const MainURL = process.env.REACT_APP_PUBLIC_API_URL;

export const onAdminEditEmployeeInfo = async (
  values,
  employeeId,
  refreshEmployeeInfo,
  handleCloseModal
) => {
  try {
    const result = await http.put(`${MainURL}employee/${employeeId}`, values);

    //console.log(result);

    if ((result.data.success = true)) {
      toast.success("اطلاعات بروزرسانی شد");
      refreshEmployeeInfo((old) => !old);
      setTimeout(() => {
        handleCloseModal(false);
      }, 5000);
    }
  } catch (error) {}
};
