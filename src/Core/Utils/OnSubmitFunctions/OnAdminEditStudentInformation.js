import http from "../../Services/Interceptor/Interceptor";
import { toast } from "react-toastify";

//Main Url Of Our Project Backend
const MainURL = process.env.REACT_APP_PUBLIC_API_URL;

export const onAdminEditStuInformation = async (
  values,
  studentId,
  setRefreshStudentInfo,
  handleCloseModal
) => {
  try {
    const result = await http.put(`${MainURL}student/${studentId}`, values);

    //console.log(result);

    if ((result.data.success = true)) {
      toast.success("اطلاعات دانشجو بروزرسانی شد");
      setRefreshStudentInfo((old) => !old);
      setTimeout(() => {
        handleCloseModal(false);
      }, 5000);
    }
  } catch (error) {}
};
