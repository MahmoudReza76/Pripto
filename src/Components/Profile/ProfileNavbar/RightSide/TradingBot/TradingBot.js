import classes from "../../../styles/tradingbot.module.scss";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
const TradingBot = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="flex flex-col w-full h-screen p-8 ">
      <div className="flex flex-row justify-between items-top w-full h-52 py-10">
        <h1 className="w-full text-5xl font-bold h-32">Trading Bot Account</h1>
      </div>
      <div className={classes.tradingbot__profitbox}>
        <div className={classes.tradingbot__profit}>
          <h1>Total Operating Assets</h1>
          <span style={{ color: colors.grey[400] }}>0.00 USD</span>
        </div>
        <div className={classes.tradingbot__profit}>
          <h1>Total Profit</h1>
          <span style={{ color: colors.grey[400] }}>0.00 USD</span>
        </div>
        <div className={classes.tradingbot__profit}>
          <h1>Today's Profit</h1>
          <span style={{ color: colors.grey[400] }}>0.00 USD</span>
        </div>
      </div>
      <div>
        <div className={classes.table}>
          <table>
            <tr>
              <th className="w-5">Strategy</th>
              <th>Amount</th>
              <th>Operating Assets</th>
              <th>Profit</th>
              <th>Today's Profit </th>
              <th>Action</th>
            </tr>
            <tr>
              <td className={classes.table__coin}>
                <span style={{ color: colors.grey[100] }}>Spot Grid</span>
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
                <Link>+ Create</Link>
              </td>
            </tr>
            <tr>
              <td className={classes.table__coin}>
                <span style={{ color: colors.grey[100] }}>Futures Grid</span>
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
                <Link>+ Create</Link>
              </td>
            </tr>
            <tr>
              <td className={classes.table__coin}>
                <span style={{ color: colors.grey[100] }}>Martingale</span>
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
                <Link>+ Create</Link>
              </td>
            </tr>
            <tr>
              <td className={classes.table__coin}>
                <span style={{ color: colors.grey[100] }}>Smart Rebalance</span>
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
                <Link>+ Create</Link>
              </td>
            </tr>
            <tr>
              <td className={classes.table__coin}>
                <span style={{ color: colors.grey[100] }}>Infinity Grid</span>
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
                <Link>+ Create</Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TradingBot;
