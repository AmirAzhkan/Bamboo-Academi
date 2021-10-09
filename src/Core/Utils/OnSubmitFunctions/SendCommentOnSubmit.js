import { SendComment } from "../../Services/Api/SendComment.api";

export const SendCommentOnSubmit = async (
  values,
  resetForm,
  refreshCommentsList
) => {
  try {
    const comment = await SendComment(values, refreshCommentsList);
    resetForm();
  } catch (error) {
    console.log(error);
  }
};
