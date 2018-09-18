import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './EditBookModalActions';
import EditBookModal from './EditBookModal';

const mapStateToProps = ({ updatedBook, books }, ownProps) => ({
  bookDataToUpdate: updatedBook.bookDataToUpdate || ownProps.bookData,
  isSaved: updatedBook.isSaved,
  isValidField: updatedBook.isValidField,
  booksTitles: books.allBooks.map(book => book.title),
  duplicateTitleError: updatedBook.duplicateTitleError,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditBookModal);
