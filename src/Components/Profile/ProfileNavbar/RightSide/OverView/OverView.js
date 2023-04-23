import classes from "../../../styles/overview.module.scss";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const OverView = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const percentage = 0;

  return (
    <div className="flex flex-col w-full h-screen p-8 ">
      <div className="flex flex-row justify-between items-top w-full h-52">
        <h1 className="w full text-5xl font-bold">Asset Overview</h1>

        <div className="flex flex-row justify-end items-top">
          <button className="bg-teal-400 text-3xl  px-6 py-3 font-medium  mr-3 h-16 hover:bg-teal-500">
            Deposit
          </button>
          <button className="bg-slate-300 text-3xl px-4 py-3 font-medium  mr-3 h-16 hover:bg-slate-400">
            Buy Crypto
          </button>
          <button className="bg-slate-300 text-3xl px-6 py-3 font-medium  mx-r h-16 hover:bg-slate-400">
            Withdraw
          </button>
        </div>
      </div>
      <div className={classes.overview}>
        <div className={classes.overview__card}>
          <div className="flex flex-row justify-between items-center">
            <h1>Main Account</h1>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                root: {
                  width: "8rem",
                },
                text: {
                  fill: "#03b1b1c0",
                },
              }}
            />
          </div>
          <span>0.00 BTC</span>
          <span>0.00 USD</span>
          <div
            className={classes.overview__card__links}
            style={{ color: colors.greenAccent[300] }}
          >
            <Link to="#">Transfer</Link>
            <Link to="#">Lend</Link>
          </div>
        </div>
        <div className={classes.overview__card}>
          <div className="flex flex-row justify-between items-center">
            <h1>Trading Account</h1>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                root: {
                  width: "8rem",
                },
                text: {
                  fill: "#03b1b1c0",
                },
              }}
            />
          </div>
          <span>0.00 BTC</span>
          <span>0.00 USD</span>
          <div
            className={classes.overview__card__links}
            style={{ color: colors.greenAccent[300] }}
          >
            <Link to="#">Transfer</Link>
            <Link to="#">Trade</Link>
          </div>
        </div>
        <div className={classes.overview__card}>
          <div className="flex flex-row justify-between items-center">
            <h1>Margin Account</h1>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                root: {
                  width: "8rem",
                },
                text: {
                  fill: "#03b1b1c0",
                },
              }}
            />
          </div>
          <span>0.00 BTC</span>
          <span>0.00 USD</span>
          <div
            className={classes.overview__card__links}
            style={{ color: colors.greenAccent[300] }}
          >
            <Link to="#">Transfer</Link>
            <Link to="#">Trade</Link>
          </div>
        </div>
        <div className={classes.overview__card}>
          <div className="flex flex-row justify-between items-center">
            <h1>Futures Account</h1>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                root: {
                  width: "8rem",
                },
                text: {
                  fill: "#03b1b1c0",
                },
              }}
            />
          </div>
          <span>0.00 BTC</span>
          <span>0.00 USD</span>
          <div
            className={classes.overview__card__links}
            style={{ color: colors.greenAccent[300] }}
          >
            <Link to="#">Transfer</Link>
            <Link to="#">Trade</Link>
          </div>
        </div>
        <div className={classes.overview__card}>
          <div className="flex flex-row justify-between items-center">
            <h1>Trading Bot Account</h1>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                root: {
                  width: "8rem",
                },
                text: {
                  fill: "#03b1b1c0",
                },
              }}
            />
          </div>
          <span>0.00 BTC</span>
          <span>0.00 USD</span>
          <div
            className={classes.overview__card__links}
            style={{ color: colors.greenAccent[300] }}
          >
            <Link to="#">Transfer</Link>
            <Link to="#">Trade</Link>
          </div>
        </div>
        <div className={classes.overview__card}>
          <div className="flex flex-row justify-between items-center">
            <h1>Financial Account</h1>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                root: {
                  width: "8rem",
                },
                text: {
                  fill: "#03b1b1c0",
                },
              }}
            />
          </div>
          <span>0.00 BTC</span>
          <span>0.00 USD</span>
          <div
            className={classes.overview__card__links}
            style={{ color: colors.greenAccent[300] }}
          >
            <Link to="#">Earn</Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default OverView;
