import { useEffect, useState } from "react";
import { getCoin } from "../Services/api";
import classes from "../styles/Landing.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { DefaultLoading } from "../loading";
const Landing = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };

    fetchAPI();
  }, []);

  const items = coins.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;

    return (
      <div>
        <div className={classes.container}>
          <Link className={classes.container__link} to={`/coins/${coin.id}`}>
            <img
              className={classes.container__img}
              src={coin.image}
              alt={coin.name}
            />
            <span className={classes.container__symbol}>
              {coin.symbol.toUpperCase()}/USD
            </span>
            <span className={classes.container__price}>
              {coin.current_price.toLocaleString()}
            </span>
            <span
              className={classes.container__changeprice}
              style={{
                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                fontWeight: 500,
              }}
            >
              {profit && "+"}
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </Link>
        </div>
      </div>
    );
  });

  const responsive = {
    0: { items: 3 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  return (
    <div>
      {coins.length ? (
        <AliceCarousel
          className={classes.carousel}
          keyboardNavigation
          mouseTracking
          infinite
          autoPlayInterval={3000}
          animationDuration={1500}
          disableDotsControls
          responsive={responsive}
          autoPlay
          items={items}
          disableButtonsControls
        />
      ) : (
        <DefaultLoading />
      )}
    </div>
  );
};

export default Landing;
