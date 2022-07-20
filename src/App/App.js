import React, { lazy, Suspense, useCallback, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { getIsAutentificated } from "../redux/auth/auth-selectors";
import { getCurrent } from "../redux/auth/auth-operations";
import PrivateRoute from "./wrap/PrivateRoute";
import PublicRoute from "./wrap/PublicRoute";
import routes from "../routes";
import styles from "./styles.module.css";
import popTransition from "./routeTransition.module.css";
import AuthNav from "./appBar/AuthNav";
import Nav from "./appBar/Nav";
import UserMenu from "./appBar/UserMenu";

const HomePage = lazy(() =>
  import("../views/home/HomePage" /* webpackChunkName: "home-page" */)
);

const PhoneBook = lazy(() =>
  import("../views/phonebook/PhoneBook" /* webpackChunkName: "phonebook" */)
);

const Registration = lazy(() =>
  import(
    "../views/authentication/Registration" /* webpackChunkName: "registration" */
  )
);

const Login = lazy(() =>
  import("../views/authentication/Login" /* webpackChunkName: "login" */)
);

const Error = lazy(() =>
  import("../views/error/Error" /* webpackChunkName: "login" */)
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

      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames={popTransition}
              timeout={200}
            >
              <Suspense>
                <Switch location={location} fallback={<p>Loading...</p>}>
                  <Route path={routes.home} exact>
                    <HomePage />
                  </Route>
                  <PrivateRoute
                    path={routes.phonebook}
                    redirectTo={routes.home}
                  >
                    <PhoneBook />
                  </PrivateRoute>
                  <PublicRoute
                    path={routes.registration}
                    restricted
                    redirectTo={routes.home}
                  >
                    <Registration />
                  </PublicRoute>
                  <PublicRoute
                    path={routes.login}
                    restricted
                    redirectTo={routes.home}
                  >
                    <Login />
                  </PublicRoute>
                  <Route>
                    <Error />
                  </Route>
                </Switch>
              </Suspense>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </>
  );
};

export default App;
