import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeContactRequest,
  changeContactSuccess,
  changeContactError,
} from "./phonebook-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }

  //   axios
  //     .get("/contacts")
  //     .then(({ data }) => dispatch(fetchContactSuccess(data)))
  //     .catch((error) => dispatch(fetchContactError(error)));
};

export const addContact = ({ name, number }) => (dispatch) => {
  const newContact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post("/contacts", newContact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error.message)));
};

export const changeContact = (id, changeFields) => (dispatch) => {
  dispatch(changeContactRequest());

  if (changeFields) {
    axios
      .patch(`/contacts/${id}`, changeFields)
      .then(({ data }) => dispatch(changeContactSuccess(data)))
      .catch((error) => changeContactError(error.message));
  } else {
    dispatch(changeContactSuccess(id));
  }
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => deleteContactError(error.message));
};
