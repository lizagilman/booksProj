import {
  SHOW_DELETE_BOOK_MODAL,
  CLOSE_DELETE_BOOK_MODAL,
  SHOW_EDIT_BOOK_MODAL,
  CLOSE_EDIT_BOOK_MODAL,
  DELETE_BOOK,
} from './BookConstants';

export const openDeleteModal = id => ({
  type: SHOW_DELETE_BOOK_MODAL,
  payload: { id },
});

export const closeDeleteModal = id => ({
  type: CLOSE_DELETE_BOOK_MODAL,
  payload: { id },
});

export const openEditeModal = id => ({
  type: SHOW_EDIT_BOOK_MODAL,
  payload: { id },
});

export const closeEditModal = id => ({
  type: CLOSE_EDIT_BOOK_MODAL,
  payload: { id },
});

export const deleteBook = id => ({
  type: DELETE_BOOK,
  payload: { id },
});
