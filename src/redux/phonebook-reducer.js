import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  changeContactRequest,
  changeContactSuccess,
  changeContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
} from "./phonebook-actions";

import { logoutSuccess } from "./auth/auth-actions";

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,

  [addContactSuccess]: (state, { payload }) => [...state, payload],

  [changeContactSuccess]: (state, { payload }) => {
    if (typeof payload === "string") {
      return state.map((contact) =>
        contact.id === payload
          ? {
              ...contact,
              changeContactSectionIsOpened: true,
            }
          : contact
      );
    }

    return state.map((contact) =>
      contact.id === payload.id
        ? {
            ...payload,
            changeContactSectionIsOpened: false,
          }
        : contact
    );
  },

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [logoutSuccess]: () => [],
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [changeContactRequest]: () => true,
  [changeContactSuccess]: () => false,
  [changeContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
