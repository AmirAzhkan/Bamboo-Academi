import React from "react";
import AddArticleForm from "../../../AddArticleFrom/AddArticleFrom";

import AddArticleCss from "./AddArticle.module.css";

const AddArticle = () => {
  return (
    <React.Fragment>
      <h4 className={AddArticleCss.titles}>فرم افزودن مقاله :</h4>
      <div className={AddArticleCss.formHolder}>
        <AddArticleForm />
      </div>
    </React.Fragment>
  );
};

export default AddArticle;
