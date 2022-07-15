import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { addContact } from "../../redux/phonebook/phonebook-operations";
import selectors from "../../redux/phonebook/phonebook-selectors";

const Form = ({ onSave }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getContacts);

  const [name, setName] = useState("");

  const handleNameChange = (event) => setName(event.target.value);

  const [number, setNumber] = useState("");

  const handleNumberChange = (event) => setNumber(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationArray = contacts.filter(
      (contact) => contact.name === name || contact.number === number
    );

    if (validationArray.length !== 0) {
      return alert("This contact already exist.");
    }

    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formContainer}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={styles.input}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={styles.input}
            onChange={handleNumberChange}
          />
        </label>
      </div>
      <button type="submit" className={styles.button}>
        add contact
      </button>
    </form>
  );
};

export default Form;
