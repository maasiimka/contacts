import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../redux/phonebook/phonebook-actions";
import selectors from "../../redux/phonebook/phonebook-selectors";
import styles from "./styles.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);

  const handleFilter = useCallback(
    (event) => dispatch(filterContacts(event.target.value)),
    [dispatch]
  );

  return (
    <label>
      find contact
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={handleFilter}
      />
    </label>
  );
};

export default Filter;
