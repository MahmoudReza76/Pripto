import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import classes from "../../../styles/futures.module.scss";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import TabPanel from "./TabPanel";
const Futures = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="flex flex-col w-full h-screen p-8 ">
      <div className="flex flex-row justify-between items-top w-full h-52 py-10">
        <h1 className="w full text-5xl font-bold">Futures Account</h1>
      </div>
      <div className={classes.futures} style={{ background: colors.grey[900] }}>
        <div className={classes.futures__asset}>
          <h1 style={{ color: colors.cyan[300] }}>0.000</h1>
          <span style={{ color: colors.cyan[300] }}>
            BTC
            <span style={{ fontSize: "1.5rem", color: colors.grey[300] }}>
              ≈ 0 USD
            </span>
          </span>
        </div>
        <div className={classes.futures__icons}>
          <Link className={classes.futures__icons__box}>
            <span className=" h-full bg-black rounded-full p-3 ">
              <ShoppingCartOutlinedIcon
                sx={{
                  color: colors.cyan[300],
                  width: "4rem",
                  height: "4rem",
                }}
              />
            </span>
            <span>Buy Crypto</span>
          </Link>
          <Link className={classes.futures__icons__box}>
            <span className=" h-full bg-teal-400 rounded-full p-3">
              <TrendingFlatOutlinedIcon
                sx={{
                  color: colors.grey[100],
                  width: "4rem",
                  height: "4rem",
                }}
              />
            </span>
            <span>Transfer</span>
          </Link>
        </div>
      </div>
      <div className={classes.futures__tabs}>
        <TabPanel />
      </div>
    </div>
  );
};

export default Futures;
