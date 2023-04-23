import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import classes from "../../styles/FirstItem.module.scss";
const FirstItem = ({ coin }) => {
  let profit = coin.price_change_percentage_24h >= 0;

  return (
    <tr className={classes.coin}>
      <td>
        <div>
          <img className={classes.coin__image} src={coin.image} alt={coin.id} />
        </div>
      </td>
      <td>{coin.name}</td>
      <td>${coin.current_price.toFixed(3)}</td>
      <td>{coin.market_cap.toLocaleString()}</td>
      <td
        style={{
          color: profit > 0 ? "rgb(14, 203, 129)" : "red",
          fontWeight: 500,
        }}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine />
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default FirstItem;
