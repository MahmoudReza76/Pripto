import { Link } from "react-router-dom";
import classes from "../../../styles/tradingcoin.module.scss";
const TradingCoins = ({ name, image, symbol, price }) => {
  return (
    <tr className={classes.tradingcoin}>
      <td>
        <div className={classes.tradingcoin__coin}>
          <div>
            <img className="w-20 h-20 rounded-3xl " src={image} alt={name} />
          </div>
          <div className={classes.tradingcoin__coin_name}>
            <span className="text-2xl text-center">{symbol.toUpperCase()}</span>
            <span className="text-2xl">{name}</span>
          </div>
        </div>
      </td>
      <td>
        <span>{price.toFixed(2).toLocaleString()}</span>
      </td>
      <td>
        <span>0.00</span>
      </td>
      <td>
        <span>0.00</span>
      </td>
      <td className={classes.tradingcoin__links}>
        <div>
          <Link to="#">Trade</Link>
          <Link to="#">Transfer</Link>
        </div>
      </td>
    </tr>
  );
};

export default TradingCoins;
