import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/auth/auth-operations";
import styles from "./form.module.css";

const Registration = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signup({ name, email, password }));

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.formContainer}>
        <label className={styles.label}>
          <span>Your name:</span>
          <input
            type="name"
            name="name"
            value={name}
            className={styles.input}
            onChange={handleName}
          />
        </label>
        <label className={styles.label}>
          <span>Your email:</span>
          <input
            type="email"
            name="email"
            value={email}
            className={styles.input}
            onChange={handleEmail}
          />
        </label>
        <label className={styles.label}>
          <span>Your password:</span>
          <input
            type="password"
            name="password"
            value={password}
            className={styles.input}
            onChange={handlePassword}
          />
        </label>
      </div>
      <button type="submit" className={styles.submitButton}>
        Sign up
      </button>
    </form>
  );
};

export default Registration;
