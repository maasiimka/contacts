import React from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";
import styles from "./app.module.css";

const AuthNav = () => (
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
);

export default AuthNav;
