import React from "react";
import { Button } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const WithdrawButton = ({ onWithdraw, loading }) => {
  return (
    <Button
      onClick={onWithdraw}
      disabled={loading}
      startIcon={<AccountBalanceWalletIcon />}
      sx={{
        position: "absolute",
        top: "10px",
        right: "20px",
        backgroundColor: "#FFD700",
        color: "#000",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#FFB800",
        },
        borderRadius: "10px",
        padding: "10px 20px",
        textTransform: "none",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      Withdraw
    </Button>
  );
};

export default WithdrawButton;
