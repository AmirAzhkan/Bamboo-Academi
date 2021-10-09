import React from "react";
import { getToken } from "../Core/Services/AuthServices/AuthServices";
import { DecodeToken } from "../Core/Utils/DecodeToken";

import StudentAuthenticatedApp from "./StudentAuthenticatedApp/StudentAuthenticatedApp";
import AdminAuthenticatedApp from "./AdminAuthenticatedApp/AdminAuthenticatedApp";
import UnAuthenticatedApp from "./UnAuthenticatedApp/UnAuthenticatedApp";

import "./App.css";

const App = () => {
  let userToken = DecodeToken(getToken());

  if (userToken && userToken.role === "student") {
    return <StudentAuthenticatedApp />;
  } else if (userToken && userToken.role === "admin") {
    return <AdminAuthenticatedApp />;
  } else {
    return <UnAuthenticatedApp />;
  }
};

export default App;
