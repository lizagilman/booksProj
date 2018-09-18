import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const DeleteModal = (props) => {
  const { fullScreen, handleClose, handleDelete } = props;

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={true}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {'Are you sure?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>There's no way back.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete book
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DeleteModal.defaulProps = {
  handleClose: Function.prototype,
  handleDelete: Function.prototype,
};

DeleteModal.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default withMobileDialog()(DeleteModal);
