import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import classes from "../../styles/Brands.module.scss";
import image from "../../asset/Untitled design.png";

const SecondBrand = () => {
  return (
    <div data-aos="fade-right" data-aos-delay="150" className={classes.brand}>
      <div>
        <img src={image} alt="brand_image" className={classes.brand__image} />
      </div>
      <div className={classes.brand__title}>
        <h1 className={classes.brand__title_h1}>
          World-Class Security & Risk Management System
        </h1>
        <p className={classes.brand__title_p}>
          All-round protection of user asset with our offline storage,
          multi-factor encryption, and 24/7 security monitoring
        </p>
        <div className={classes.brand__trustUser}>
          <div>
            <span>
              <SecurityOutlinedIcon sx={{ fontSize: "5rem", color: "#444" }} />
            </span>
            <h4 className={classes.brand__trustUser_h4}>2,000 BTC</h4>
            <p className={classes.brand__trustUser_p1}>Security Reserve Fund</p>
          </div>
          <div>
            <span>
              <AccountBalanceWalletOutlinedIcon
                sx={{ fontSize: "5rem", color: "#444" }}
              />
              <h4 className={classes.brand__trustUser_h4}>
                0 security incidents for 3 years
              </h4>
              <p className={classes.brand__trustUser_p1}>
                Top-tier security & risk management
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondBrand;
