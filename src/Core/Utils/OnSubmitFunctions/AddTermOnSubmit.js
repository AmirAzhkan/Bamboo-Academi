import { AddTerm } from "../../Services/Api/AddTerm.api";

export const AddTermOnSubmit = async (values, { resetForm }) => {
  console.log(values);
  //Send The Term Data To Api ::
  const term = await AddTerm(values);
  //Condition To Reset The From Values If The Result Of Creating An Term Was Seccessfull ::
  if ((term.success = true)) {
    setTimeout(() => {
      resetForm();
    }, 5000);
  }
};
