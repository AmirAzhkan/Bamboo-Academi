import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import StudentPannel from "../../Views/StudentPannel/StudentPannel";
import PublicRoute from "../PublicRoute/PublicRoute";

const AuthenticatedApp = () => {
  return (
    <Switch>
      <Redirect
        from="/studentPannel"
        exact
        to="/studentPannel/studentDashboard"
      />
      <Route path="/studentPannel" component={StudentPannel} />
      <PublicRoute />
    </Switch>
  );
};

export default AuthenticatedApp;
