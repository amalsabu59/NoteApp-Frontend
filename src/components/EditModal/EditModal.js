import React from "react";
import "./editModal.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputField from "../Home/InputFiled";
import { useDispatch, useSelector } from "react-redux";
import { closeEditModal } from "../../redux/slices/globalSlice";

function EditModal({ open, onClose, onShare }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeEditModal());
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <IconButton
        aria-label="close"
        className="close-button"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <InputField />
      </DialogContent>
    </Dialog>
  );
}

export default EditModal;
