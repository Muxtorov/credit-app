import { Button, Modal } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%,   -50%)`,
    position: "absolute",
    width: 400,
    height: 200,
    backgroundColor: "#2E7EF6",
    color: "#fff",
    padding: "30px",
  },
});

const ModalComponent = ({ open, item, handleClose, handleDel, setOpen }) => {
  const classes = useStyles();

  const ModalBox = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">O'chirishni xoxlaysizmi?</h2>
      <Button
        style={{ margin: "5px" }}
        variant="contained"
        onClick={handleClose}
      >
        Bekor qilish
      </Button>
      <Button
        style={{ margin: "5px" }}
        variant="contained"
        color="secondary"
        onClick={() => {
          handleDel(item);
          setOpen(false);
        }}
      >
        O'chirish
      </Button>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {ModalBox}
    </Modal>
  );
};
export default ModalComponent;
