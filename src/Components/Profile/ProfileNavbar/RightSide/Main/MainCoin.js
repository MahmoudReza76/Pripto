import { Link } from "react-router-dom";
import classes from "../../../styles/maincoin.module.scss";
const MainCoin = ({ name, image, symbol, price }) => {
  return (
    <tr className={classes.maincoin}>
      <td>
        <div className={classes.maincoin__coin}>
          <div>
            <img className="w-20 h-20 rounded-3xl " src={image} alt={name} />
          </div>
          <div className={classes.maincoin__coin_name}>
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
      <td className={classes.maincoin__links}>
        <div>
          <Link to="#">Deposit</Link>
          <Link to="#">Withdraw</Link>
        </div>
        <div>
          <Link to="#">Transfer</Link>
        </div>
      </td>
    </tr>
  );
};

export default MainCoin;
