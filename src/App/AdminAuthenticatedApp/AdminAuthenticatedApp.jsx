import React from "react";
import { Switch, Route } from "react-router-dom";

import TheLayout from "../../Views/AdminPannel/TheLayout";
import PublicRoute from "../PublicRoute/PublicRoute";

const AdminAuthenticatedApp = () => {
  return (
    <Switch>
      <Route
        path="/adminPannel"
        name="Home"
        render={(props) => <TheLayout {...props} />}
      />
      <PublicRoute />
    </Switch>
  );
};

export default AdminAuthenticatedApp;
