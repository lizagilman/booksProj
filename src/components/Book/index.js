import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './BookActions';

import Book from './Book';

const mapStateToProps = ({ book }, ownProps) => ({
  shouldDisplayDeleteModal:
    book.deleteBookModalToDisplay[ownProps.bookData.id] || false,
  shouldDisplayEditModal:
    book.editBookModalToDisplay[ownProps.bookData.id] || false,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Book);
