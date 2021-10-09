import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";

import "./TheContent.css";

// routes config
import routes from "../../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = ({ employeeInfo, refreshEmployeeInfo }) => {
  return (
    <main className="c-main pt-0">
      <CContainer className="py-4" fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <CFade style={{ height: "100%" }}>
                        <route.component
                          employeeInfo={employeeInfo}
                          refreshEmployeeInfo={refreshEmployeeInfo}
                          {...props}
                        />
                      </CFade>
                    )}
                  />
                )
              );
            })}
            <Redirect from="/adminPannel" to="adminPannel/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
