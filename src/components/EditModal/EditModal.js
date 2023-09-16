import React, { useState } from "react";
import "./editModal.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import InputField from "../Home/InputFiled";

function EditModal({ open, onClose, onShare }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Share Note</DialogTitle>
      <DialogContent>
        <InputField />
      </DialogContent>
    </Dialog>
  );
}

export default EditModal;
