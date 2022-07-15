import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsAutentificated } from "../../redux/auth/auth-selectors";

const PublicRoute = ({ redirectTo, children, ...routeProps }) => {
  const isAuthenticated = useSelector(getIsAutentificated);

  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
};

export default PublicRoute;
