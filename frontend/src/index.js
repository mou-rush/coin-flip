import React from "react";
import ReactDOM from "react-dom/client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";

const lineaGoerli = {
  name: "Linea Goerli",
  chainId: 59140,
  rpc: ["https://rpc.goerli.linea.build"],
  nativeCurrency: {
    name: "Linea Ether",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorers: [
    {
      name: "LineaScan",
      url: "https://explorer.goerli.linea.build",
    },
  ],
  slug: "linea-goerli",
  testnet: true,
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    activeChain={lineaGoerli}
    clientId="2695156cdb3d85443a968367d4889218"
  >
    <App />
  </ThirdwebProvider>
);
