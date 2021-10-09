import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "../PannelDashboard/PannelDashboard";
import EditProfile from "../PannelEditProfile/PannelEditProfile";
import MyCourses from "../PannelMyCourses/PannelMyCourses";
import CoursesList from "../PannelCoursesList/PannelCoursesList";

import TabContentCss from "./TabContent.module.css";

function TabContent({ studentInfo, refreshStudentInfo }) {
  return (
    <div className={`col-md-12 ${TabContentCss.content}`}>
      <div className="tab-content" id="v-pills-tabContent">
        <Route
          path="/studentPannel/studentEditProfile"
          render={() => (
            <EditProfile
              studentInfo={studentInfo}
              refreshStudentInfo={refreshStudentInfo}
            />
          )}
        />
        <Route path="/studentPannel/studentCourses" component={MyCourses} />
        <Route path="/studentPannel/coursesList" component={CoursesList} />
        <Route path="/studentPannel/studentDashboard" component={Dashboard} />
      </div>
    </div>
  );
}

export default TabContent;
