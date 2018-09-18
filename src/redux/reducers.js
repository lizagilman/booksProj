import { combineReducers } from 'redux';
import BooksReducer from '../components/Books/BooksReducer';
import BookReducer from '../components/Book/BookReducer';
import UpdatedBookReducer from '../components/Book/components/editBookModal/EditBookModalReducer';

export default combineReducers({
  books: BooksReducer,
  book: BookReducer,
  updatedBook: UpdatedBookReducer,
});
