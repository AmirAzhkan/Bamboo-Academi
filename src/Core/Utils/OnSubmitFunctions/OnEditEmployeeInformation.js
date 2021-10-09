import { EditEmployeeInfo } from "../../Services/Api/EditEmployeInfo.api";

export const onEditInformation = async (values, refreshEmployeeInfo) => {
  const user = await EditEmployeeInfo(values, refreshEmployeeInfo);

  //console.log(user);
};
