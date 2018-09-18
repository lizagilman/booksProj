import { UPDATE_FORM, UPDATE_BOOK } from './EditBookModalConstants';
import { ADD_NEW_BOOK } from '../../../Books/BooksConstants';
import { validateField } from '../../../helpers';

export const updateForm = (bookDataFromUser, field, value, hasError) => {
  const isValid = hasError ? !hasError : validateField(field, value);

  return {
    type: UPDATE_FORM,
    payload: {
      bookDataFromUser,
      field,
      isValid,
      value,
    },
  };
};

export const updateBook = bookDataToUpdate => ({
  type: UPDATE_BOOK,
  payload: { bookDataToUpdate },
});

export const saveNewBook = newBookData => ({
  type: ADD_NEW_BOOK,
  payload: { newBookData },
});
