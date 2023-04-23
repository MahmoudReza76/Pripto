import { React, useState, useEffect } from "react";
import { topVolume } from "../../Services/api";
import SecondItem from "./SecondItem";
import { DefaultLoading } from "../../loading";
import classes from "../../styles/FirstItems.module.scss";
const SecondItems = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await topVolume();
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
                <SecondItem key={coin.id} coin={coin} />
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

export default SecondItems;
