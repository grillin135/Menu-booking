import React,{ useState }from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
const Alert = () => {
    const [name, setName] = useState("");
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [errorname, setErrorName] = useState(false);
    const [errorContact, setErrorContact] = useState(false);
    const [errorAddress, setErrorAddress] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        window.location.reload(false);
      };
      const handleClickError = () => {
        setError(true);
      };
    
      const handleCloseError = () => {
        setError(false);
      };
      const handleClickErrorName = () => {
        setErrorName(true);
      };
    
      const handleCloseErrorName = () => {
        setErrorName(false);
      };
    
      const handleName = (e) => {
        setName(e.target.value);
      };
    
      const handleClickContactError = () => {
        setErrorContact(true);
      };
      const handleClickAddressError = () => {
        setErrorAddress(true);
      };
    
      const handleClickContactErrorClose = () => {
        setErrorContact(false);
      };
      const handleClickAddressErrorClose = () => {
        setErrorAddress(false);
      };
    return (
        <div>
        <Dialog
        open={errorContact}
        onClose={handleClickContactError}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Hey please check you contact number."}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClickContactErrorClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={errorAddress}
        onClose={handleClickAddressError}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Hey please enter your address."}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClickAddressErrorClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Hurray! Your order has been submitted."}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={error}
        onClose={handleCloseError}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add any meal."}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseError} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={errorname}
        onClose={handleCloseErrorName}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please enter your name."}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseErrorName} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default Alert
