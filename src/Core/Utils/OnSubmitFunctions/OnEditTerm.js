import { EditTerm } from "../../Services/Api/EditTerm.api";

export const EditTermOnSubmit = async (
  values,
  termId,
  refreshTermsList,
  manageModal
) => {
  //Send The Term Data To Api ::
  const term = await EditTerm(values, termId, refreshTermsList, manageModal);
};
