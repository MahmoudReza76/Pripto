import { Link } from "react-router-dom";
import classes from "../../../styles/margincoins.module.scss";
const MarginCoins = ({ name, image, symbol, price }) => {
  return (
    <tr className={classes.margincoins}>
      <td>
        <div className={classes.margincoins__coin}>
          <div>
            <img className="w-20 h-20 rounded-3xl " src={image} alt={name} />
          </div>
          <div className={classes.margincoins__coin_name}>
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
      <td>
        <span>0.00</span>
      </td>
      <td>
        <span>0.00</span>
      </td>
      <td className={classes.margincoins__links}>
        <div>
          <Link to="#">Trade</Link>
          <Link to="#">Transfer</Link>
        </div>
        <div>
          <Link to="#">Borrow</Link>
          <Link to="#">Repay</Link>
        </div>
      </td>
    </tr>
  );
};

export default MarginCoins;
