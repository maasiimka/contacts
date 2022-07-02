import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsAutentificated } from "../redux/auth/auth-selectors";

const PrivateRoute = ({ redirectTo, children, ...routeProps }) => {
  const isAuthenticated = useSelector(getIsAutentificated);

  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
