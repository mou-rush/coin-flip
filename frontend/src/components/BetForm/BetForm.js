import React from "react";
import { TextField, ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

const BetForm = ({ amount, setAmount, guess, setGuess }) => {
  const toggleButtonsStyles = {
    color: "white",
    "&.Mui-selected": {
      backgroundColor: "#f9a825",
      color: "#fff",
    },
  };

  return (
    <Box sx={{ marginTop: 3 }}>
      <TextField
        label="Amount to Risk (ETH)"
        variant="outlined"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        InputProps={{
          style: { color: "#fff" },
        }}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        sx={{
          input: { color: "white" },
          marginBottom: 2,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "#f9a825",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#f9a825",
            },
          },
        }}
      />
      <ToggleButtonGroup
        value={guess}
        exclusive
        onChange={(e, newGuess) => setGuess(newGuess)}
        sx={{ marginBottom: 2 }}
      >
        <ToggleButton value="heads" sx={toggleButtonsStyles}>
          🪙 Heads
        </ToggleButton>
        <ToggleButton value="tails" sx={toggleButtonsStyles}>
          🪙 Tails
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default BetForm;
