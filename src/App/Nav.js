import React from "react";
import routes from "../routes";
import { NavLink } from "react-router-dom";
import styles from "./app.module.css";
import { useSelector } from "react-redux";
import { getIsAutentificated } from "../redux/auth/auth-selectors";

const Nav = () => {
  const isAuthenticated = useSelector(getIsAutentificated);

  return (
    <ul className={styles.nav}>
      <li>
        <NavLink
          exact
          to={routes.home}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li>
        {isAuthenticated && (
          <NavLink
            exact
            to={routes.phonebook}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
        )}
      </li>
    </ul>
  );
};

export default Nav;
