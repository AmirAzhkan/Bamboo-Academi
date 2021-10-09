import React from "react";
import AddTermForm from "../../../AddTermForm/AddTermForm";

import AddTermCss from "./AddTerm.module.css";

const AddTerm = () => {
  return (
    <React.Fragment>
      <h4 className={AddTermCss.titles}>فرم افزودن ترم :</h4>
      <div className={AddTermCss.formHolder}>
        <AddTermForm />
      </div>
    </React.Fragment>
  );
};

export default AddTerm;
