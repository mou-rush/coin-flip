import React from "react";
import Snackbar from "@mui/material/Snackbar";

const TransactionSnackbar = ({
  snackbarOpen,
  snackbarMessage,
  setSnackbarOpen,
}) => {
  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={() => setSnackbarOpen(false)}
      message={snackbarMessage}
      sx={{
        "& .MuiSnackbarContent-root": {
          backgroundColor:
            snackbarMessage ===
              "Transaction Successful! Check the new tab for details." ||
            "Withdraw Successful!"
              ? "#4caf50"
              : "#f44336",
          color: "#fff",
          fontWeight: "bold",
        },
      }}
    />
  );
};

export default TransactionSnackbar;
