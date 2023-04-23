import { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import classes from "../../../styles/margin.module.scss";
import MarginCoins from "./MarginCoins";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import { mainProfile } from "../../../../../Services/api";
import { DefaultLoading } from "../../../../../loading";
// import TabPanel from "./TabPanel";
const Margin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await mainProfile();
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search) ||
      coin.symbol.toUpperCase().includes(search) ||
      coin.name.toUpperCase().includes(search) ||
      coin.symbol.toLowerCase().includes(search)
  );
  return (
    <div>
      {coins.length ? (
        <div className="flex flex-col w-full h-screen p-8 ">
          <div className="flex flex-row justify-between items-top w-full h-52 py-10">
            <h1 className="w-full text-5xl font-bold h-32">Margin Account</h1>
          </div>
          <div
            className={classes.margin}
            style={{ background: colors.grey[900] }}
          >
            <div className={classes.margin__asset}>
              <h1 style={{ color: colors.cyan[300] }}>0.000</h1>
              <div>
                <span style={{ color: colors.cyan[300] }}>
                  BTC
                  <span style={{ fontSize: "1.5rem", color: colors.grey[300] }}>
                    ≈ 0 USD
                  </span>
                </span>
              </div>
              <div className={classes.margin__icons}>
                <Link className={classes.margin__icons__box}>
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
                <Link className={classes.margin__icons__box}>
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
          </div>
          <div>
            <div>
              <input
                className={classes.margin__input}
                type="text"
                placeholder="Search Coin"
                value={search}
                onChange={searchHandler}
              />
            </div>
            <div className={classes.margin__coins}>
              {coins.length ? (
                <div className={classes.margin__table}>
                  <table>
                    <tr>
                      <th className="w-5">Coin</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th>Available</th>
                      <th>In Orders </th>
                      <th>Liabilities</th>
                      <th>Action</th>
                    </tr>
                    {searchCoins.map((coin) => (
                      <MarginCoins
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                      />
                    ))}
                  </table>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <DefaultLoading />
      )}
    </div>
  );
};

export default Margin;
