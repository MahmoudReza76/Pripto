import { useState, useEffect } from "react";
import Chart from "./Chart";
import TradeBox from "./TradeBox";
import { PriceCoins } from "./PriceCoins";
import classes from "../../styles/exchangeapp.module.scss";
import ExchangeNavlinks from "./ExchangeNavlinks";
import Ticker from "./Ticker";
import FooterExchange from "./FooterExchange";
import { ExchangeDefault } from "../../loading";

const ExchangeApp = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);
  return (
    <div className="h-full w-full bg-black relative">
      {loading ? (
        <ExchangeDefault />
      ) : (
        <div className={classes.exchangeapp}>
          <div>
            <ExchangeNavlinks />
          </div>
          <div>
            <Ticker />
          </div>
          <div className={classes.exchangeapp__middlebox}>
            <div className={classes.exchangeapp__pricebox}>
              <PriceCoins />
            </div>
            <div className={classes.exchangeapp__chart}>
              <Chart />
            </div>
          </div>
          <div className={classes.exchangeapp__tradebox}>
            <TradeBox />
          </div>
          <FooterExchange />
        </div>
      )}
    </div>
  );
};

export default ExchangeApp;
