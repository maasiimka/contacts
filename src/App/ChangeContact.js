import React, { useState } from "react";
import styles from "./styles.module.css";

const ChangeContact = ({ name, number, submitChangedData }) => {
  const [userName, setUserName] = useState(name);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const [userNumber, setUserNumber] = useState(number);

  const handleUserNumber = (e) => {
    setUserNumber(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    submitChangedData({ name: userName, number: userNumber });

    setUserName("");
    setUserNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.changeContactForm}>
      <div className={styles.formContainer}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={userName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={styles.input}
            onChange={handleUserName}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="number"
            value={userNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={styles.input}
            onChange={handleUserNumber}
          />
        </label>
      </div>
      <button type="submit" className={styles.button}>
        Change
      </button>
    </form>
  );
};

export default ChangeContact;
