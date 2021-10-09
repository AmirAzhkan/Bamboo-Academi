import React from "react";
import { Switch, Route } from "react-router-dom";

import AdminRegister from "../../Views/AdminRegister/AdminRegister";
import TeacherRegister from "../../Views/TeacherRegister/TeacherRegister";
import StudentRegister from "../../Views/StudentRegister/StudentRegister";
import EmployeeLogin from "../../Views/EmployeeLogin/EmployeeLogin";
import StudentLogin from "../../Views/StudentLogin/StudentLogin";
import PublicRoute from "../PublicRoute/PublicRoute";

const UnAuthenticatedApp = () => {
  return (
    <Switch>
      <Route path="/adminRegister" component={AdminRegister} />
      <Route path="/teacherRegister" component={TeacherRegister} />
      <Route path="/studentRegister" component={StudentRegister} />
      <Route path="/employeeLogin" component={EmployeeLogin} />
      <Route path="/studentLogin" component={StudentLogin} />
      <PublicRoute />
    </Switch>
  );
};

export default UnAuthenticatedApp;
