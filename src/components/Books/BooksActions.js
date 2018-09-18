import {
  LOAD_BOOKS,
  OPEN_ADD_BOOK_MODAL,
  CLOSE_ADD_BOOK_MODAL,
} from './BooksConstants';

export const loadBooks = data => ({
  type: LOAD_BOOKS,
  payload: { data },
});

export const openAddBookModal = () => ({
  type: OPEN_ADD_BOOK_MODAL,
  payload: {},
});

export const closeAddBookModal = () => ({
  type: CLOSE_ADD_BOOK_MODAL,
  payload: {},
});
