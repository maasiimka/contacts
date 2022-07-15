import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as operations from "../../redux/phonebook/phonebook-operations";
import selectors from "../../redux/phonebook/phonebook-selectors";
import styles from "./styles.module.css";
import IconButton from "../wrap/IconButton";
import ChangeContact from "./ChangeContact";
import { ReactComponent as DeleteIcon } from "../../icons/deleteIcon.svg";
import { ReactComponent as ChangeIcon } from "../../icons/changeIcon.svg";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getFilteredContacts);

  const deleteContact = useCallback(
    (id) => dispatch(operations.deleteContact(id)),
    [dispatch]
  );
  const changeContact = useCallback(
    (id, changeFields) => dispatch(operations.changeContact(id, changeFields)),
    [dispatch]
  );

  return (
    <>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number, changeContactSectionIsOpened }) => (
          <li key={id} className={styles.item}>
            <span>
              {name} : {number}
            </span>
            <div>
              <IconButton handleClick={() => changeContact(id, null)}>
                <ChangeIcon width="35" height="35" fill="#fff" />
              </IconButton>
              <IconButton handleClick={() => deleteContact(id)}>
                <DeleteIcon width="35" height="35" fill="#fff" />
              </IconButton>
            </div>
            {changeContactSectionIsOpened && (
              <ChangeContact
                name={name}
                number={number}
                submitChangedData={(changeFields) =>
                  changeContact(id, changeFields)
                }
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
