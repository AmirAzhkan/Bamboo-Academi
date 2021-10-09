import React from "react";
import EditProfileForm from "../PannelEditProfileForm/EditProfileForm";

import EditProfileCss from "./PannelEditProfile.module.css";

function EditProfile({ studentInfo, refreshStudentInfo }) {
  return (
    <div
      id="v-pills-editProfile"
      role="tabpanel"
      aria-labelledby="v-pills-editProfile-tab"
    >
      <div className={EditProfileCss.titleHolder}>
        <h4 className={EditProfileCss.contentTitle}>ویرایش پروفایل :</h4>
      </div>
      <div className={`${EditProfileCss.formHolder}`}>
        <EditProfileForm
          studentInfo={studentInfo}
          refreshStudentInfo={refreshStudentInfo}
        />
      </div>
    </div>
  );
}

export default EditProfile;
