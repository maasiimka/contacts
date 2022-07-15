import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/phonebook/phonebook-operations";
import selectors from "../../redux/phonebook/phonebook-selectors";
import styles from "./styles.module.css";
import Form from "../../App/phonebook/Form";
import Filter from "../../App/phonebook/Filter";
import Contacts from "../../App/phonebook/Contacts";
import Modal from "../../App/wrap/Modal";
import IconButton from "../../App/wrap/IconButton";
import { ReactComponent as AddIcon } from "../../icons/addIcon.svg";

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
