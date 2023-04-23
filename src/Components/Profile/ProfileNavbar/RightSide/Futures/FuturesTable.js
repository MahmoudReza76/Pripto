import { Link } from "react-router-dom";
import classes from "../../../styles/futurestable.module.scss";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import btc from "../../../../../asset/Bitcoin1.png";
import eth from "../../../../../asset/eth.png";
import tether from "../../../../../asset/tether.png";
import xrp from "../../../../../asset/xrp.svg";
import dot from "../../../../../asset/polkadot.svg";
const FuturesTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className={classes.table}>
      <table>
        <tr>
          <th className="w-5">Asset</th>
          <th>Total Asset</th>
          <th>Position Margin</th>
          <th>Order Margin</th>
          <th>Unrealized PNL</th>
          <th>Available Balance </th>
          <th>Action</th>
        </tr>
        <tr>
          <td className={classes.table__coin}>
            <img src={btc} alt="bitcoin" />{" "}
            <span style={{ color: colors.grey[100] }}>BTC</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            <Link>Trade</Link>
          </td>
        </tr>
        <tr>
          <td className={classes.table__coin}>
            <img src={eth} alt="etherium" />
            <span style={{ color: colors.grey[100] }}>ETH</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            <Link>Trade</Link>
          </td>
        </tr>
        <tr>
          <td className={classes.table__coin}>
            <img src={tether} alt="tether" />{" "}
            <span style={{ color: colors.grey[100] }}>USDT</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            <Link>Trade</Link>
          </td>
        </tr>
        <tr>
          <td className={classes.table__coin}>
            <img src={xrp} alt="xrp" />
            <span style={{ color: colors.grey[100] }}>XRP</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            <Link>Trade</Link>
          </td>
        </tr>
        <tr>
          <td className={classes.table__coin}>
            <img src={dot} alt="polkodot" />
            <span style={{ color: colors.grey[100] }}>DOT</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            0.00 <span>≈0USD</span>
          </td>
          <td>
            <Link>Trade</Link>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default FuturesTable;
