import {
  LOAD_BOOKS,
  OPEN_ADD_BOOK_MODAL,
  CLOSE_ADD_BOOK_MODAL,
  ADD_NEW_BOOK,
} from './BooksConstants';
import { DELETE_BOOK } from '../Book/BookConstants';
import { UPDATE_BOOK } from '../Book/components/editBookModal/EditBookModalConstants';

const initialState = {
  allBooks: [],
  isLoading: false,
  isModalOpen: false,
  //  titleError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return { ...state, allBooks: action.payload.data, isLoading: false };
    case DELETE_BOOK:
      return {
        ...state,
        allBooks: state.allBooks.filter(book => book.id !== action.payload.id),
      };
    case UPDATE_BOOK:
      return {
        ...state,
        allBooks: state.allBooks.map(
          book => (book.id === action.payload.bookDataToUpdate.id
            ? action.payload.bookDataToUpdate
            : book),
        ),
      };
    case OPEN_ADD_BOOK_MODAL:
      return { ...state, isModalOpen: true };
    case CLOSE_ADD_BOOK_MODAL:
      return { ...state, isModalOpen: false };
    case ADD_NEW_BOOK:
      /* eslint-disable-next-line */
      const updatedBooks = state.allBooks;
      // const { newTitle } = action.payload.newBookData;
      // const error = updatedBooks.find(book => book.title === newTitle);
      // if(error){
      //   return { ...state, titleError: true }
      // }
      updatedBooks.push(action.payload.newBookData);
      return {
        ...state,
        allBooks: updatedBooks,
      };
    default:
      return state;
  }
};
