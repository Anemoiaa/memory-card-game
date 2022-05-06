import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function WinDialog({steps, handleClick, ...props}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  return (
      <Dialog
        fullScreen={fullScreen}
        open={true}
        onClose={handleClick}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"You Win!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Good Job! You did it in {steps} steps!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClick}>
            Play Again!
          </Button>
        </DialogActions>
      </Dialog>

  );
}