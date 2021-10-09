import { EditStudentInfo } from "../../Services/Api/EditStudentInfo.api";

export const onEditInformation = async (values, refreshStudentInfo) => {
  const user = await EditStudentInfo(values, refreshStudentInfo);

  //console.log(user);
};
