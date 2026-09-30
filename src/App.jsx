import { SwapWidget } from "@dodoex/widgets";

const apiKey = import.meta.env.VITE_DODO_API_KEY;

// Starting tokens on BNB Chain (chain ID 56).
// "0xEeee...EEeE" is the standard placeholder address for a chain's own coin (here BNB).
const BNB = {
  chainId: 56,
  address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  name: "BNB",
  symbol: "BNB",
  decimals: 18,
};
const USDT = {
  chainId: 56,
  address: "0x55d398326f99059ff775485246999027b3197955",
  name: "Tether USD",
  symbol: "USDT",
  decimals: 18,
};

export default function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
      <SwapWidget
        apikey={apiKey}
        colorMode="dark"
        defaultChainId={56}
        defaultFromToken={BNB}
        defaultToToken={USDT}
        crossChain={false}
        width={400}
        dappMetadata={{ name: "DODO Widget Quickstart" }}
      />
    </div>
  );
}