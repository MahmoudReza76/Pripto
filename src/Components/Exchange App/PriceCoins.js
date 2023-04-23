import { MarketOverview } from "react-ts-tradingview-widget";

export const PriceCoins = () => {
  const coins = [
    {
      title: "USDT",
      symbols: [
        {
          s: "BINANCE:BTCUSDT",
        },
        {
          s: "BINANCE:ETHUSDT",
        },
        {
          s: "BINANCE:BNBUSDT",
        },
        {
          s: "BINANCE:XRPUSDT",
        },
        {
          s: "BINANCE:ADAUSDT",
        },
        {
          s: "BINANCE:DOGEUSDT",
        },
        {
          s: "BINANCE:MATICUSDT",
        },
        {
          s: "BINANCE:SOLUSDT",
        },
        {
          s: "BINANCE:DOTUSDT",
        },
        {
          s: "BINANCE:LTCUSDT",
        },
        {
          s: "BINANCE:TRXUSDT",
        },
        {
          s: "BINANCE:AVAXUSDT",
        },
        {
          s: "BINANCE:UNIUSDT",
        },
        {
          s: "BINANCE:ATOMUSDT",
        },
        {
          s: "BINANCE:LINKUSDT",
        },
        {
          s: "BINANCE:XMRUSDT",
        },
        {
          s: "BINANCE:ETCUSDT",
        },
        {
          s: "BINANCE:BCHUSDT",
        },
        {
          s: "BINANCE:XLMUSDT",
        },
        {
          s: "BINANCE:NEARUSDT",
        },
        {
          s: "BINANCE:APEUSDT",
        },
        {
          s: "BINANCE:QNTUSDT",
        },
        {
          s: "BINANCE:FILUSDT",
        },
        {
          s: "BINANCE:ALGOUSDT",
        },
        {
          s: "BINANCE:ICPUSDT",
        },
        {
          s: "BINANCE:VETUSDT",
        },
        {
          s: "BINANCE:HBARUSDT",
        },
        {
          s: "BINANCE:APTUSDT",
        },
        {
          s: "BINANCE:AAVEUSDT",
        },
        {
          s: "BINANCE:MANAUSDT",
        },
        {
          s: "BINANCE:SANDUSDT",
        },
        {
          s: "BINANCE:FLOWUSDT",
        },
        {
          s: "BINANCE:EOSUSDT",
        },
        {
          s: "BINANCE:LUNCUSDT",
        },
        {
          s: "BINANCE:EGLDUSDT",
        },
        {
          s: "BINANCE:AXSUSDT",
        },
        {
          s: "BINANCE:XTZUSDT",
        },
        {
          s: "BINANCE:FTMUSDT",
        },
      ],
    },
    {
      title: "BTC",
      symbols: [
        {
          s: "BINANCE:ETHBTC",
        },
        {
          s: "BINANCE:BNBBTC",
        },
        {
          s: "BINANCE:XRPBTC",
        },
        {
          s: "BINANCE:ADABTC",
        },
        {
          s: "BINANCE:DOGEBTC",
        },
        {
          s: "BINANCE:MATICBTC",
        },
        {
          s: "BINANCE:SOLBTC",
        },
        {
          s: "BINANCE:DOTBTC",
        },
        {
          s: "BINANCE:LTCBTC",
        },
        {
          s: "BINANCE:TRXBTC",
        },
        {
          s: "BINANCE:AVAXBTC",
        },
        {
          s: "BINANCE:UNIBTC",
        },
        {
          s: "BINANCE:ATOMBTC",
        },
        {
          s: "BINANCE:LINKBTC",
        },
        {
          s: "BINANCE:XMRBTC",
        },
        {
          s: "BINANCE:ETCBTC",
        },
        {
          s: "BINANCE:BCHBTC",
        },
        {
          s: "BINANCE:XLMBTC",
        },
        {
          s: "BINANCE:NEARBTC",
        },
        {
          s: "BINANCE:APEBTC",
        },
        {
          s: "BINANCE:QNTBTC",
        },
        {
          s: "BINANCE:FILBTC",
        },
        {
          s: "BINANCE:ALGOBTC",
        },
        {
          s: "BINANCE:ICPBTC",
        },
        {
          s: "BINANCE:VETBTC",
        },
        {
          s: "BINANCE:HBARBTC",
        },
        {
          s: "BINANCE:APTBTC",
        },
        {
          s: "BINANCE:AAVEBTC",
        },
        {
          s: "BINANCE:MANABTC",
        },
        {
          s: "BINANCE:SANDBTC",
        },
        {
          s: "BINANCE:FLOWBTC",
        },
        {
          s: "BINANCE:EOSBTC",
        },
        {
          s: "BINANCE:CAKEBTC",
        },
        {
          s: "BINANCE:EGLDBTC",
        },
        {
          s: "BINANCE:AXSBTC",
        },
        {
          s: "BINANCE:XTZBTC",
        },
        {
          s: "BINANCE:FTMBTC",
        },
      ],
    },
  ];
  return (
    <MarketOverview
      tabs={coins}
      width="auto"
      height="600"
      colorTheme="dark"
      showChart="false"
      largeChartUrl="http://localhost:3000/exchange"
    />
  );
};
// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div class="tradingview-widget-container__widget"></div>
//   <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com" rel="noopener" target="_blank"><span class="blue-text">USDT</span></a> <span class="blue-text">and</span> <a href="https://www.tradingview.com" rel="noopener" target="_blank"><span class="blue-text">USDC</span></a> by TradingView</div>
//   <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js" async>
//   {
//   "colorTheme": "dark",
//   "dateRange": "1D",
//   "showChart": false,
//   "locale": "en",
//   "width": "100%",
//   "height": "100%",
//   "largeChartUrl": "",
//   "isTransparent": false,
//   "showSymbolLogo": true,
//   "showFloatingTooltip": false,
//   "tabs": [
//     {
//       "title": "USDT",
//       "symbols": [
//         {
//           "s": "BINANCE:BTCUSDT"
//         },
//         {
//           "s": "BINANCE:ETHUSDT"
//         },
//         {
//           "s": "BINANCE:BNBUSDT"
//         },
//         {
//           "s": "BINANCE:XRPUSDT"
//         },
//         {
//           "s": "BINANCE:ADAUSDT"
//         },
//         {
//           "s": "BINANCE:DOGEUSDT"
//         },
//         {
//           "s": "BINANCE:MATICUSDT"
//         },
//         {
//           "s": "BINANCE:SOLUSDT"
//         },
//         {
//           "s": "BINANCE:DOTUSDT"
//         },
//         {
//           "s": "BINANCE:LTCUSDT"
//         },
//         {
//           "s": "BINANCE:TRXUSDT"
//         },
//         {
//           "s": "BINANCE:AVAXUSDT"
//         },
//         {
//           "s": "BINANCE:UNIUSDT"
//         },
//         {
//           "s": "BINANCE:ATOMUSDT"
//         },
//         {
//           "s": "BINANCE:LINKUSDT"
//         },
//         {
//           "s": "BINANCE:XMRUSDT"
//         },
//         {
//           "s": "BINANCE:ETCUSDT"
//         },
//         {
//           "s": "BINANCE:BCHUSDT"
//         },
//         {
//           "s": "BINANCE:XLMUSDT"
//         },
//         {
//           "s": "BINANCE:NEARUSDT"
//         },
//         {
//           "s": "BINANCE:APEUSDT"
//         },
//         {
//           "s": "BINANCE:QNTUSDT"
//         },
//         {
//           "s": "BINANCE:FILUSDT"
//         },
//         {
//           "s": "BINANCE:ALGOUSDT"
//         },
//         {
//           "s": "BINANCE:ICPUSDT"
//         },
//         {
//           "s": "BINANCE:VETUSDT"
//         },
//         {
//           "s": "BINANCE:HBARUSDT"
//         },
//         {
//           "s": "BINANCE:APTUSDT"
//         },
//         {
//           "s": "BINANCE:AAVEUSDT"
//         },
//         {
//           "s": "BINANCE:MANAUSDT"
//         },
//         {
//           "s": "BINANCE:SANDUSDT"
//         },
//         {
//           "s": "BINANCE:FLOWUSDT"
//         },
//         {
//           "s": "BINANCE:EOSUSDT"
//         },
//         {
//           "s": "BINANCE:LUNCUSDT"
//         },
//         {
//           "s": "BINANCE:EGLDUSDT"
//         },
//         {
//           "s": "BINANCE:AXSUSDT"
//         },
//         {
//           "s": "BINANCE:XTZUSDT"
//         },
//         {
//           "s": "BINANCE:FTMUSDT"
//         }
//       ]
//     },
//     {
//       "title": "USDC",
//       "symbols": []
//     },
//     {
//       "title": "BTC",
//       "symbols": []
//     },
//     {
//       "title": "BCH",
//       "symbols": []
//     }
//   ]
// }
//   </script>
// </div>
// <!-- TradingView Widget END -->
