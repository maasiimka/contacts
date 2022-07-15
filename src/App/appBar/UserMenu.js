import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import { logout } from "../../redux/auth/auth-operations";
import styles from "./app.module.css";
import defaultAvatar from "../../icons/default-avatar.jpg";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <ul className={styles.userMenu}>
      <li className={styles.userItem}>
        <img src={defaultAvatar} alt="avatar" className={styles.avatar} />
      </li>
      <li>
        <p>{name}</p>
      </li>
      <li>
        <button
          type="button"
          className={styles.logoutButton}
          onClick={handleLogout}
        >
          Logout
        </button>
      </li>
    </ul>
  );
};

export default UserMenu;
