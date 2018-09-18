import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TextField from '@material-ui/core/TextField';
import uuidv1 from 'uuid/v1';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import bookDataDefaultProps, { titlieze, selectImg } from '../../../helpers';
import * as styles from './editBookModalStyles';

const EditBookModal = (props) => {
  const {
    fullScreen,
    bookData,
    handleClose,
    isSaved,
    isValidField,
    bookDataToUpdate,
    duplicateTitleError,
  } = props;

  const handleChange = field => (event) => {
    const { value } = event.target;
    /* eslint-disable-next-line */
    const { bookData, bookDataToUpdate, updateForm, booksTitles } = props;
    const bookDataFromUser = {
      ...bookData,
      ...bookDataToUpdate,
      [field]: value,
    };

    const isDuplicateTitle = field === 'title'
      ? booksTitles.findIndex(title => title === value) !== -1
      : false;

    updateForm(bookDataFromUser, field, value, isDuplicateTitle);
  };

  const handleSave = () => {
    const { updateBook, bookData: { id }, saveNewBook } = props;

    if (id) {
      updateBook(bookDataToUpdate);
    } else {
      saveNewBook({
        id: uuidv1(),
        ...bookDataToUpdate,
        thumbnail: selectImg(),
      });
    }
  };

  const hasErrors = Object.keys(isValidField).some(
    field => !isValidField[field],
  );
  const emptyForm = !Object.keys(bookDataToUpdate).length;
  const incompleteForm = Object.keys(bookDataToUpdate).length < 4
    || Object.keys(bookDataToUpdate).some(field => field === '');

  const saveButton = (
    <Button
      onClick={handleSave}
      color="secondary"
      autoFocus
      disabled={isSaved || hasErrors || emptyForm || incompleteForm}
    >
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  );

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={true}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        scroll="paper"
      >
        <DialogTitle id="responsive-dialog-title">
          <div style={{ color: '#3f51b5' }}>
            {bookData.id ? 'Edit Book' : 'New Book'}
          </div>
        </DialogTitle>
        <DialogContent>
          <div style={styles.hintStyle}>* Mandatory Field</div>
          <FormControl
            style={styles.rowStyle}
            error={!isValidField.title}
            aria-describedby="title-error-text"
            fullWidth
          >
            <InputLabel htmlFor="bookTitle">Title *</InputLabel>
            <Input
              id="bookTile"
              type="text"
              defaultValue={titlieze(bookData.title)}
              onChange={handleChange('title')}
              autoFocus={true}
            />
            {!isValidField.title && (
              <FormHelperText id="title-error-text">
                {duplicateTitleError ? 'Title already exists' : 'Invalid title'}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl
            style={styles.rowStyle}
            error={!isValidField.author}
            aria-describedby="author-error-text"
            fullWidth
          >
            <InputLabel htmlFor="bookAuthor">Author *</InputLabel>
            <Input
              id="bookAuthor"
              type="text"
              defaultValue={bookData.author}
              onChange={handleChange('author')}
              autoFocus={true}
            />
            {!isValidField.author && (
              <FormHelperText id="author-error-text">
                Invalid author name
              </FormHelperText>
            )}
          </FormControl>

          <FormControl style={styles.dateStyle}>
            <TextField
              id="date"
              label={isValidField.date ? 'Publish Date *' : 'Invalid date'}
              type="date"
              defaultValue={bookData.date}
              onChange={handleChange('date')}
              error={!isValidField.date}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>

          <FormControl
            error={!isValidField.description}
            aria-describedby="description-error-text"
            fullWidth
          >
            <InputLabel htmlFor="date">Description *</InputLabel>
            <Input
              id="description"
              type="text"
              defaultValue={bookData.description}
              onChange={handleChange('description')}
              autoFocus={true}
              multiline={true}
            />
            {!isValidField.description && (
              <FormHelperText id="description-error-text">
                Description cannot be blank
              </FormHelperText>
            )}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          {saveButton}
        </DialogActions>
      </Dialog>
    </div>
  );
};

EditBookModal.defaulProps = {
  isSaved: false,
  bookData: {},
  updatedBookData: {},
  isValidField: {
    date: true,
    author: true,
    title: true,
    description: true,
  },
};

EditBookModal.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  updatedBookData: bookDataDefaultProps,
  bookData: bookDataDefaultProps,
  isSaved: PropTypes.bool,
  isValidField: PropTypes.shape({
    date: PropTypes.bool,
    author: PropTypes.bool,
    title: PropTypes.bool,
    description: PropTypes.bool,
  }),
};

export default withMobileDialog()(EditBookModal);
