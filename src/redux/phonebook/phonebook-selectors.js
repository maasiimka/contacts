import { createSelector } from "@reduxjs/toolkit";

const isLoading = (state) => state.phonebook.loading;

const getFilter = (state) => state.phonebook.filter;

const getContacts = (state) => state.phonebook.contacts;

const getFilteredContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const selectors = {
  isLoading,
  getFilter,
  getContacts,
  getFilteredContacts,
};

export default selectors;
