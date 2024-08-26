import React from "react";
import "./Coin.css";
import coinImage from "../../assets/coin.png";

export const RotatingCoin = () => {
  return (
    <div className="coin-container">
      <div className="coin">
        <img src={coinImage} alt="Coin" className="coin-image" />
      </div>
    </div>
  );
};
