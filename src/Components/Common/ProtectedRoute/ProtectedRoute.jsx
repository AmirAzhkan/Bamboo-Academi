import React from "react";
import { getCurrentUser } from "../../../Core/Services/AuthServices/AuthServices";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const userInfo = getCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!userInfo)
          return (
            <Redirect
              to={{
                pathname: "/studentLogin",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
