import React from "react";
import { Button, Grid } from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";

const FlipButton = ({ loading, flipCoin, withdraw }) => {
  const flipCoinStyles = {
    background: loading
      ? "linear-gradient(45deg, #f9a825, #f9a825)"
      : "linear-gradient(to right, #6441A5 0%, #2a0845 51%, #6441A5 100%)",
    color: "white",
    fontWeight: "bold",
    padding: "12px",
    width: "100%",
    borderRadius: "30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    marginTop: 2,
  };

  return (
    <Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={flipCoin}
        disabled={loading}
        sx={flipCoinStyles}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Flip Coin"}
      </Button>
    </Grid>
  );
};

export default FlipButton;
