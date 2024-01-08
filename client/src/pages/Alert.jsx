import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import './alert.css'
export default function AlertDialog({setOutside}) {
  const [open, setOpen] = React.useState(true);

   

  const handleClose = () => {
    setOpen(false);
    
  };
  const handleAgree = () => {

    setOpen(false);
    setOutside(true);
  };
  const handleDisagree = () => {
    setOpen(false);
    setOutside(false);

  };

  return (
    <React.Fragment>
      
      <Dialog
      id="kk"
        open={open}
        onClose={handleClose}
        style={{ backdropFilter: "blur(5px)"}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
       
      >
        <DialogTitle id="alert-dialog-title">
          Delivery Information
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to deliver it outside the campus? For Outside delivery 50 Rs. for delivery will be charged.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>No</Button>
          <Button onClick={handleAgree} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}