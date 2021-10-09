import { AnswerComment } from "../../Services/Api/AnswerComment.api";

export const AnswerCommentOnSubmit = async (
  values,
  commentId,
  refreshComments
) => {
  try {
    const answer = await AnswerComment(
      values.answer,
      commentId,
      refreshComments
    );
  } catch (error) {
    console.log(error);
  }
};
