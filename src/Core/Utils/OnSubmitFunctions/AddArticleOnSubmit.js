import { UploadFile } from "../../Services/Api/UploadFile.api";
import { AddArticle } from "../../Services/Api/AddArticle.api";

export const AddArticleOnSubmit = async (values, { resetForm }) => {
  //Send The File That We Get From Our Form To FromData() ::
  const formData = new FormData();
  formData.append("image", values.file);

  //Send The FromData To Upload File Api To Get The Web Link Of Our File ::
  const imageLink = await UploadFile(formData);

  //Make Article Data As Add News-Article Api Need To Make An Article ::
  const articleData = {
    text: values.text,
    category: values.category,
    image: imageLink.data.result,
    title: values.title,
  };

  //Send The Article Data To Api ::
  const article = await AddArticle(articleData);

  //Condition To Reset The From Values If The Result Of Creating An Article Was Seccessfull ::
  if ((article.success = true)) {
    setTimeout(() => {
      resetForm();
    }, 5000);
  }
};
