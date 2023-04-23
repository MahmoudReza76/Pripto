import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import image from "../../asset/Untitled.png";
import classes from "../../styles/Brands.module.scss";
const FirstBrand = () => {
  return (
    <div data-aos="fade-left" data-aos-delay="150" className={classes.brand}>
      <div className={classes.brand__title}>
        <h1 className={classes.brand__title_h1}>
          Leading Crypto Trading Platform
        </h1>
        <p className={classes.brand__title_p}>
          A wide array of crypto trading and management services to satisfy
          diverse trading needs
        </p>
        <div className={classes.brand__trustUser}>
          <div>
            <span>
              <CurrencyBitcoinIcon sx={{ fontSize: "5rem", color: "#444" }} />
            </span>
            <h4 className={classes.brand__trustUser_h4}>300+</h4>
            <p className={classes.brand__trustUser_p1}>
              Quality cryptocurrencies
            </p>
          </div>
          <div>
            <span>
              <CurrencyExchangeIcon sx={{ fontSize: "5rem", color: "#444" }} />
              <h4 className={classes.brand__trustUser_h4}>$520,227,456</h4>
              <p className={classes.brand__trustUser_p1}>24h trading volume</p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <img src={image} alt="brand_image" className={classes.brand__image} />
      </div>
    </div>
  );
};

export default FirstBrand;
