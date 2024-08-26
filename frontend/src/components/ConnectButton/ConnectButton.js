import React from "react";
import Button from "@mui/material/Button";

const ConnectButton = ({ address, connectWithMetamask }) => {
  const connectButtonStyles = {
    background:
      "linear-gradient(to right, #6441A5 0%, #2a0845 51%, #6441A5 100%)",
    color: "#fff",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "30px",
    marginY: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  };

  return (
    <Button
      variant="contained"
      onClick={connectWithMetamask}
      sx={connectButtonStyles}
    >
      {address
        ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}`
        : "Connect Wallet"}
    </Button>
  );
};

export default ConnectButton;
