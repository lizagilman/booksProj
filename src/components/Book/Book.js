import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BookCard from './components/BookCard';
import DeleteBookModal from './components/DeleteBookModal';
import EditBookModal from './components/editBookModal';
import bookDataDefaultProps from '../helpers';

const styles = theme => ({
  card: {
    maxWidth: '500px',
  },
  media: {
    height: '20vw',
    minHeight: '300px',
    backgroundPosition: 'top',
    width: '500px',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
});

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteBook = this.handleDeleteBook.bind(this);
    this.openDeleteBookModal = this.openDeleteBookModal.bind(this);
    this.closeDeleteBookModal = this.closeDeleteBookModal.bind(this);
    this.openEditBookModal = this.openEditBookModal.bind(this);
    this.closeEditBookModal = this.closeEditBookModal.bind(this);
  }

  openDeleteBookModal(e) {
    e.preventDefault();
    const { openDeleteModal, bookData: { id } } = this.props;
    openDeleteModal(id);
  }

  closeDeleteBookModal(e) {
    e.preventDefault();
    const { closeDeleteModal, bookData: { id } } = this.props;
    closeDeleteModal(id);
  }

  handleDeleteBook() {
    const { deleteBook, bookData: { id } } = this.props;
    deleteBook(id);
  }

  openEditBookModal(e) {
    e.preventDefault();
    const { openEditeModal, bookData: { id } } = this.props;
    openEditeModal(id);
  }

  closeEditBookModal(e) {
    e.preventDefault();
    const { closeEditModal, bookData: { id } } = this.props;
    closeEditModal(id);
  }

  render() {
    const {
      classes,
      shouldDisplayEditModal,
      shouldDisplayDeleteModal,
      bookData,
      bookKey,
    } = this.props;

    const editBookModal = (
      <EditBookModal
        handleClose={this.closeEditBookModal}
        bookData={{ ...bookData }}
      />
    );

    const deleteBookModal = (
      <DeleteBookModal
        handleDelete={this.handleDeleteBook}
        handleClose={this.closeDeleteBookModal}
      />
    );

    return (
      <React.Fragment>
        <BookCard
          bookData={bookData}
          classes={classes}
          openEditBookModal={this.openEditBookModal}
          openDeleteBookModal={this.openDeleteBookModal}
          bookKey={bookKey}
        />
        {shouldDisplayEditModal && editBookModal}
        {shouldDisplayDeleteModal && deleteBookModal}
      </React.Fragment>
    );
  }
}

Book.defaulProps = {
  classes: {},
  bookData: {},
  shouldDisplayDeleteModal: false,
  shouldDisplayEditBookModal: false,
  deleteBook: Function.prototype,
};

Book.propTypes = {
  classes: PropTypes.object.isRequired,
  deleteModalToDisplay: PropTypes.bool,
  deleteBook: PropTypes.func,
  bookData: bookDataDefaultProps,
};

export default withStyles(styles)(Book);
