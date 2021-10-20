import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomerAlert = ({ open, handleClose, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity="success">{message}</Alert>
    </Snackbar>
  );
};

export default CustomerAlert;
