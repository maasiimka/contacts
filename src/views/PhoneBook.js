import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../App/styles.module.css";
import Form from "../App/Form";
import Filter from "../App/Filter";
import Contacts from "../App/Contacts";
import Modal from "../App/Modal";
import IconButton from "../App/IconButton";
import { ReactComponent as AddIcon } from "../App/addIcon.svg";
import { fetchContacts } from "../redux/phonebook-operations";
import selectors from "../redux/phonebook-selectors";

const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.isLoading);
  const [modalOpened, setModalOpened] = useState(false);

  const toggleModal = () => {
    setModalOpened(!modalOpened);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <IconButton handleClick={toggleModal}>
        <AddIcon width="35" height="35" fill="#fff" />
      </IconButton>
      {modalOpened && (
        <Modal closeModal={toggleModal}>
          <Form onSave={toggleModal} />
        </Modal>
      )}

      <h2>Contacts</h2>
      <Filter />
      {isLoading && <h1 className={styles.loader}>Loading...</h1>}
      <Contacts />
    </div>
  );
};

export default Phonebook;
