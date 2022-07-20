import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserName } from "../../redux/auth/auth-selectors";
import styles from "./start.module.css";

const StartPage = () => {
  const userName = useSelector(getUserName);

  return (
    <section className={styles.startSection}>
      <h2 className={styles.startTitle}>Welcome, {userName} !</h2>
      <p className={styles.startSubtitle}>
        Start working with your phonebook right now
      </p>
      <Link to="/phonebook" className={styles.startButton}>
        Start
      </Link>
    </section>
  );
};

export default StartPage;
