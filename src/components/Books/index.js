import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './BooksActions';

import Books from './Books';

const mapStateToProps = ({ books }) => ({
  allBooks: books.allBooks,
  isLoading: books.isLoading,
  isModalOpen: books.isModalOpen,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Books);
