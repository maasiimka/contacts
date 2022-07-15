import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getIsAutentificated,
  getUserName,
} from "../../redux/auth/auth-selectors";
import routes from "../../routes";
import styles from "./homepage.module.css";

const HomePage = () => {
  const isAuthenthicated = useSelector(getIsAutentificated);
  const userName = useSelector(getUserName);

  return (
    <div className={styles.container}>
      <h2>Welcome!</h2>
      {isAuthenthicated ? (
        <h2>{userName}</h2>
      ) : (
        <ul className={styles.authnav}>
          <li>
            <NavLink
              exact
              to={routes.registration}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={routes.login}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Login
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HomePage;
