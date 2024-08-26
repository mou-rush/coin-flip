import React from "react";
import Typography from "@mui/material/Typography";

const Header = () => {
  const headerStyles = {
    fontWeight: "bold",
    color: "white",
    background: "linear-gradient(90deg, #ff8e53, #f83600)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Typography variant="h3" gutterBottom sx={headerStyles}>
      CoinFlip Game
    </Typography>
  );
};

export default Header;
