import React, { useState } from "react";
import { Container } from "@mui/material";
import { useAddress, useMetamask, useContract } from "@thirdweb-dev/react";

import { ethers } from "ethers";
import Header from "./components/Header/Header";
import ConnectButton from "./components/ConnectButton/ConnectButton";
import BetForm from "./components/BetForm/BetForm";
import FlipButton from "./components/FlipCoinButton/FlipButton";
import TransactionSnackbar from "./components/TransactionSnackbar/TransactionSnackbar";
import WithdrawButton from "./components/WithdrawButton/WithdrawButton";
import { RotatingCoin } from "./components/Coin/Coin";
import "./App.css";

const App = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const { contract } = useContract(
    "0xA394446Fa1Bc279f06fec0b82C9e67182bc61b13"
  );

  const [amount, setAmount] = useState("");
  const [guess, setGuess] = useState("heads");
  const [loading, setLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const flipCoin = async () => {
    if (!amount) {
      setSnackbarMessage("Please enter an amount.");
      setSnackbarOpen(true);
      return;
    }

    if (!contract) {
      setSnackbarMessage("Contract not loaded!");
      setSnackbarOpen(true);
      return;
    }

    try {
      setLoading(true);

      // calling the contract method directly with thirdweb
      const transaction = await contract.call("flipCoin", [guess === "heads"], {
        value: ethers.utils.parseEther(amount),
      });

      const txHash = transaction.receipt.transactionHash;

      const etherscanLink = `https://goerli.etherscan.io/tx/${txHash}`;

      setTimeout(() => {
        window.open(etherscanLink, "_blank");
      }, 100);

      setSnackbarMessage(
        "Transaction Successful! Check the new tab for details."
      );
    } catch (error) {
      const errorMessage =
        error.message || "Transaction Failed! See console for details.";
      console.error("Transaction error:", errorMessage);

      setSnackbarMessage(errorMessage);
    } finally {
      setLoading(false);
      setSnackbarOpen(true);
    }
  };

  const withdraw = async () => {
    if (!contract) {
      setSnackbarMessage("Contract not loaded!");
      setSnackbarOpen(true);
      return;
    }

    try {
      setLoading(true);

      // Call the withdraw method from the contract
      await contract.call("withdraw");

      setSnackbarMessage("Withdraw Successful!");
    } catch (error) {
      const errorMessage =
        error.message || "Withdraw Failed! See console for details.";
      console.error("Withdraw error:", errorMessage);

      setSnackbarMessage(errorMessage);
    } finally {
      setLoading(false);
      setSnackbarOpen(true);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "10vh" }}>
      <Header />
      {address && <WithdrawButton onWithdraw={withdraw} loading={loading} />}
      <RotatingCoin />
      <ConnectButton
        address={address}
        connectWithMetamask={connectWithMetamask}
      />
      {address && (
        <>
          <BetForm
            amount={amount}
            setAmount={setAmount}
            guess={guess}
            setGuess={setGuess}
          />
          <FlipButton
            withdraw={withdraw}
            flipCoin={flipCoin}
            loading={loading}
          />
        </>
      )}
      <TransactionSnackbar
        snackbarOpen={snackbarOpen}
        snackbarMessage={snackbarMessage}
        setSnackbarOpen={setSnackbarOpen}
      />
    </Container>
  );
};

export default App;
