import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("contacts/FetchRequest");
export const fetchContactSuccess = createAction("contacts/FetchSuccess");
export const fetchContactError = createAction("contacts/FetchError");

export const addContactRequest = createAction("contacts/AddRequest");
export const addContactSuccess = createAction("contacts/AddSuccess");
export const addContactError = createAction("contacts/AddError");

export const changeContactRequest = createAction("contacts/ChangeRequest");
export const changeContactSuccess = createAction("contacts/ChangeSuccess");
export const changeContactError = createAction("contacts/ChangeError");

export const deleteContactRequest = createAction("contacts/DeleteRequest");
export const deleteContactSuccess = createAction("contacts/DeleteSuccess");
export const deleteContactError = createAction("contacts/DeleteError");

export const filterContacts = createAction("contacts/Filter");
