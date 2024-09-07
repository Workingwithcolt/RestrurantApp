import React from "react";
import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";

const signMeOut = () => {
  // If another user log-in from the same tab.
  // We want the sessionStorage to be cleared
  // before he can see some lingering value.
  sessionStorage.clear();

  const auth = getAuth();
  signOut(auth).then(() => {
    // Redirect to the home page after signing out
    window.location.href = '/';
  }).catch((error) => {
    window.alert("Logout failed: " + error.message);
  });
};

const LogoutButton = ({ onClose }) => {
  return (
    <Button variant="Text" className="text-center w-100" onClick={() => {
      onClose()
      signMeOut()
    }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
