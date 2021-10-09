import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ProtectedRoute from "../../Components/Common/ProtectedRoute/ProtectedRoute";
import Course from "../../Views/Course/Course";
import Courses from "../../Views/Courses/Courses";
import Article from "../../Views/Article/Article";
import Articles from "../../Views/Articles/Articles";
import Error from "../../Views/Error/Error";
import Landing from "../../Views/Landing/Landing";

const PublicRoute = () => {
  return (
    <Switch>
      <ProtectedRoute path="/course/:iid" component={Course} />
      <ProtectedRoute path="/article/:iid" component={Article} />
      <Route path="/courses/course/:iid" component={Course} />
      <Route path="/courses" component={Courses} />
      <Route path="/article" component={Article} />
      <Route path="/articles/article/:iid" component={Article} />
      <Redirect from="/articles" exact to="/articles/tabArticle" />
      <Route path="/articles" component={Articles} />
      <Route path="/notFound" component={Error} />
      <Route path="/" exact component={Landing} />
      <Redirect to="/notFound" />
    </Switch>
  );
};

export default PublicRoute;
