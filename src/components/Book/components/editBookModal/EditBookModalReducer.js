import { UPDATE_FORM, UPDATE_BOOK } from './EditBookModalConstants';
import {
  ADD_NEW_BOOK,
  CLOSE_ADD_BOOK_MODAL,
} from '../../../Books/BooksConstants';
import { CLOSE_EDIT_BOOK_MODAL } from '../../BookConstants';

const initialState = {
  bookDataToUpdate: {},
  isSaved: false,
  isValidField: {
    date: true,
    author: true,
    title: true,
    description: true,
  },
  duplicateTitleError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_FORM:
      /* eslint-disable-next-line */
      const { payload } = action;

      return {
        bookDataToUpdate: payload.bookDataFromUser,
        isSaved: false,
        isValidField: {
          ...state.isValidField,
          [payload.field]: payload.isValid,
        },
        duplicateTitleError:
          payload.field === 'title' && payload.value && !payload.isValid,
      };
    case CLOSE_ADD_BOOK_MODAL:
      return { ...initialState };
    case UPDATE_BOOK:
      return {
        ...state,
        isSaved: true,
      };
    case CLOSE_EDIT_BOOK_MODAL:
      return {
        ...initialState,
      };
    case ADD_NEW_BOOK:
      return { ...state, isSaved: true };
    default:
      return state;
  }
}
