import { TickerTape } from "react-ts-tradingview-widget";
const Ticker = () => {
  const coins = [
    {
      description: "",
      proName: "BINANCE:BTCUSDT",
    },
    {
      description: "",
      proName: "BINANCE:ETHUSDT",
    },
    {
      description: "",
      proName: "BINANCE:BNBUSDT",
    },
    {
      description: "",
      proName: "BINANCE:ADAUSDT",
    },
    {
      description: "",
      proName: "BINANCE:XRPUSDT",
    },
    {
      description: "",
      proName: "BINANCE:MATICUSDT",
    },
    {
      description: "",
      proName: "BINANCE:SOLUSDT",
    },
    {
      description: "",
      proName: "BINANCE:DOGEUSDT",
    },
    {
      description: "",
      proName: "BINANCE:DOTUSDT",
    },
    {
      description: "",
      proName: "BINANCE:LINKUSDT",
    },
    {
      description: "",
      proName: "BINANCE:ATOMUSDT",
    },
  ];
  return (
    <TickerTape
      symbols={coins}
      colorTheme="dark"
      largeChartUrl="http://localhost:3000/exchange"
    />
  );
};

export default Ticker;
