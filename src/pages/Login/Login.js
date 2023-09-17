import React, { useState } from "react";
import "./login.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { closeLoginModal, login } from "../../redux/slices/userSlice";

function Login({ open }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = () => {
    // Add your login logic here
    console.log("Username:", username, "Password:", password);
    dispatch(login({ username, password }));
  };

  const handleCloseModal = () => {
    dispatch(closeLoginModal());
  };

  return (
    <Dialog open={open} onClose={handleCloseModal}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        {/* <DialogTitle>Login</DialogTitle>{" "} */}
        <IconButton aria-label="close" onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      </div>
      <h4 style={{ textAlign: "center" }}>Login</h4>
      <DialogContent>
        <div className="login-container">
          <div className="input-group">
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
            />
          </div>
          <div className="input-group">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button color="primary" onClick={handleLogin}>
              Sign In
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Login;
