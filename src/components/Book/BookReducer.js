/* eslint-disable-next-line */
import {
  SHOW_DELETE_BOOK_MODAL,
  CLOSE_DELETE_BOOK_MODAL,
  SHOW_EDIT_BOOK_MODAL,
  CLOSE_EDIT_BOOK_MODAL,
} from './BookConstants';

const initialState = {
  deleteBookModalToDisplay: {},
  editBookModalToDisplay: {},
  newBookData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_EDIT_BOOK_MODAL:
      return {
        ...state,
        editBookModalToDisplay: { [action.payload.id]: true },
      };
    case CLOSE_EDIT_BOOK_MODAL:
      return {
        ...state,
        editBookModalToDisplay: { [action.payload.id]: false },
      };
    case SHOW_DELETE_BOOK_MODAL:
      return {
        ...state,
        deleteBookModalToDisplay: { [action.payload.id]: true },
      };
    case CLOSE_DELETE_BOOK_MODAL:
      return {
        ...state,
        deleteBookModalToDisplay: { [action.payload.id]: false },
      };
    default:
      return state;
  }
}
