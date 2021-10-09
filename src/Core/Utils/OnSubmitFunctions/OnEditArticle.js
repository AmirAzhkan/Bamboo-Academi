import { UploadFile } from "../../Services/Api/UploadFile.api";
import { EditArticle } from "../../Services/Api/EditArticle.api";

export const EditArticleOnSubmit = async (
  values,
  refreshArticlesInfo,
  articleId,
  manageModal
) => {
  //Send The File That We Get From Our Form To FromData() ::
  const formData = new FormData();
  formData.append("image", values.file);

  let imageLink = "";
  //Send The FormData To Upload File Api To Get The Web Link Of Our File ::
  if (typeof values.file !== "string") {
    imageLink = await UploadFile(formData);
  }

  //Make Article Data As Add News-Article Api Need To Make An Article ::
  const articleData = {
    text: values.text,
    category: values.category,
    image:
      typeof values.file === "string" ? values.file : imageLink.data.result,
    title: values.title,
  };

  console.log(articleData);

  //Send The Article Data To Api ::
  const article = await EditArticle(
    articleData,
    refreshArticlesInfo,
    articleId,
    manageModal
  );
};
