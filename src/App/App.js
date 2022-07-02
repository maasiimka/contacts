import React, { lazy, Suspense, useCallback, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import routes from "../routes";
import styles from "./app.module.css";
import AuthNav from "./AuthNav";
import Nav from "./Nav";
import UserMenu from "./UserMenu";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { getIsAutentificated } from "../redux/auth/auth-selectors";
import { getCurrent } from "../redux/auth/auth-operations";

const HomePage = lazy(() =>
  import("../views/HomePage" /* webpackChunkName: "home-page" */)
);

const PhoneBook = lazy(() =>
  import("../views/PhoneBook" /* webpackChunkName: "phonebook" */)
);

const Registration = lazy(() =>
  import("../views/Registration" /* webpackChunkName: "registration" */)
);

const Login = lazy(() =>
  import("../views/Login" /* webpackChunkName: "login" */)
);

const Error = lazy(() =>
  import("../views/Error" /* webpackChunkName: "login" */)
);

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAutentificated);

  const onPageRefresh = useCallback(() => dispatch(getCurrent()), [dispatch]);

  useEffect(() => {
    onPageRefresh();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <Nav />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </header>

      <Suspense>
        <Switch fallback={<p>Loading...</p>}>
          <Route path={routes.home} exact>
            <HomePage />
          </Route>
          <PrivateRoute path={routes.phonebook} redirectTo={routes.home}>
            <PhoneBook />
          </PrivateRoute>
          <PublicRoute
            path={routes.registration}
            restricted
            redirectTo={routes.home}
          >
            <Registration />
          </PublicRoute>
          <PublicRoute path={routes.login} restricted redirectTo={routes.home}>
            <Login />
          </PublicRoute>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
