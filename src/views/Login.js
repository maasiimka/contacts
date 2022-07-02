import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/auth-operations";
import styles from "./form.module.css";

const Login = () => {
  const dispatch = useDispatch();

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

    dispatch(login({ email, password }));

    setEmail("");
    setPassword("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formContainer}>
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
        Login
      </button>
    </form>
  );
};

export default Login;
