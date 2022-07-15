import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAutentificated } from "../../redux/auth/auth-selectors";
import routes from "../../routes";
import styles from "./app.module.css";

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
