import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import uuidv1 from 'uuid/v1';
import Book from '../Book';
import EditBookModal from '../Book/components/editBookModal';
import bookDataDefaultProps, { loremIpsum, selectImg } from '../helpers';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    margin: 0,
    width: '100%',
  },
  card: {
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  addButton: {
    top: '85%',
    right: '5%',
    position: 'fixed',
    height: '100px',
    width: '100px',
    [theme.breakpoints.only('xs')]: {
      top: '85%',
      height: '70px',
      width: '70px',
    },
  },
  progress: {
    top: '150px',
    position: 'absolute',
  },
});

class Books extends React.Component {
  componentWillMount() {
    localStorage.setItem('imgSelcetionIndex', 0);
    const { loadBooks } = this.props;

    /* eslint-disable-next-line */
    const formatResults = data => data.items.map(item => formatBookData(item));

    const formatBookData = (book) => {
      const { id } = book;
      const {
        title, authors, publishedDate, description,
      } = book.volumeInfo;

      // const { imageLinks } = book.volumeInfo;
      // const thumbnail = imageLinks ? imageLinks.thumbnail : noImgUrl;

      const thumbnail = selectImg();
      const bookDescription = description || loremIpsum;

      const unavailable = 'No data available';

      return {
        id: id || uuidv1(),
        title: title || unavailable,
        author: authors ? authors[0] : 'No data available',
        date:
          publishedDate && publishedDate.length < 5
            ? `${publishedDate}-01-01`
            : publishedDate || unavailable,
        description: bookDescription,
        thumbnail,
      };
    };

    axios
      .get('booksData.json')
      .then((response) => {
        loadBooks(formatResults(response.data));
      });
  }

  render() {
    const {
      allBooks,
      openAddBookModal,
      closeAddBookModal,
      isModalOpen,
      classes,
    } = this.props;

    const Modal = (
      <EditBookModal handleClose={closeAddBookModal} bookData={{}} />
    );
    const Spinner = (
      <CircularProgress
        className={classes.progress}
        size={150}
        color="secondary"
      />
    );

    const isLoading = !allBooks.length;

    const books = isLoading
      ? Spinner
      : allBooks.map((book, i) => (
          <Grid item key={book.id} className={classes.card}>
            <Book bookData={{ ...book }} bookKey={i} />
          </Grid>
      ));

    const AddButton = (
      <Button
        className={classes.addButton}
        variant="fab"
        color="primary"
        aria-label="Add"
        onClick={openAddBookModal}
      >
        <AddIcon />
      </Button>
    );

    return (
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={40}
          className={classes.grid}
        >
          {books}
        </Grid>
        {isLoading ? false : AddButton}
        {isModalOpen && Modal}
      </div>
    );
  }
}

Books.defaulProps = {
  allBooks: [],
  isLoading: false,
  isModalOpen: false,
};

Books.propTypes = {
  classes: PropTypes.object.isRequired,
  allBooks: PropTypes.arrayOf(bookDataDefaultProps),
  isLoading: PropTypes.bool,
  isModalOpen: PropTypes.bool,
};

export default withStyles(styles)(Books);
