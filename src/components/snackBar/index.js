import React,{useContext} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Context} from '../../router/Router';

function SnackBar() {
  const consumer = useContext(Context);
  return (
    <div>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={consumer.snackBarOpen}
        autoHideDuration={2000}
        onClose={consumer.snackBarHandleClose}
        message={consumer.snackBarMessage}
        action={
          <React.Fragment>
            {/* <Button color="secondary" size="small" onClick={consumer.snackBarHandleClose}>
              UNDO
            </Button> */}
            <IconButton size="small" aria-label="close" color="inherit" onClick={consumer.snackBarHandleClose}>
              <CloseIcon fontSize="small" />
            </IconButton> 
          </React.Fragment>
        }
      />
    </div>
  );
}

export default SnackBar;