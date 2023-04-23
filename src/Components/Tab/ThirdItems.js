import { React, useState, useEffect } from "react";
import { newCoins } from "../../Services/api";
import ThirdItem from "./ThirdItem";
import { DefaultLoading } from "../../loading";
import classes from "../../styles/FirstItems.module.scss";
const ThirdItems = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await newCoins();
      console.log(data);
      setCoins(data);
    };

    fetchAPI();
  }, []);

  return (
    <div>
      {coins.length ? (
        <div className={classes.container}>
          <table className={classes.container__table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Coin</th>
                <th>Price</th>
                <th>Marketcap</th>
                <th>Price change 24h</th>
                <th>Last 7 days</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <ThirdItem key={coin.id} coin={coin} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <DefaultLoading />
      )}
    </div>
  );
};

export default ThirdItems;
