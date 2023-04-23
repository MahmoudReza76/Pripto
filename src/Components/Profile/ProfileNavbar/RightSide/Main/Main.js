import { mainProfile } from "../../../../../Services/api";
import { useState, useEffect } from "react";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import MainCoin from "./MainCoin";
import classes from "../../../styles/main.module.scss";
import { DefaultLoading } from "../../../../../loading";

const Main = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
            <h1 className="w full text-5xl font-bold">Main Account</h1>
          </div>
          <div className={classes.main}>
            <div>
              <input
                className={classes.main__input}
                type="text"
                placeholder="Search Coin"
                value={search}
                onChange={searchHandler}
              />
            </div>
            <div className={classes.main__coins}>
              {coins.length ? (
                <div className={classes.main__table}>
                  <table>
                    <tr>
                      <th className="w-5">Coin</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th>Available</th>
                      <th>Action</th>
                    </tr>
                    {searchCoins.map((coin) => (
                      <MainCoin
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

export default Main;
