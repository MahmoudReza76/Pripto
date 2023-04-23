import logo from "../../asset/Logo/Pripto-sel_1_.png";
import { Link } from "react-router-dom";
import classes from "../Profile/styles/exchangenavlinks.module.scss";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { IconButton } from "@mui/material";
import { Box } from "@mui/material";

const ExchangeNavlinks = () => {
  return (
    <div className={classes.exchangelinks}>
      <nav className={classes.exchangelinks__navbar}>
        <div className={classes.exchangelinks__logo}>
          <Link to="/">
            <img src={logo} alt="logo website" />
          </Link>
        </div>
        <div className={classes.exchangelinks__nav}>
          <ul className={classes.exchangelinks__links}>
            <li className={classes.exchangelinks__items}>
              <Link to="/market">Market</Link>
              <Link to="/fiat">Fiat</Link>
              <Link to="/swap">Swap</Link>
              <Link to="/exchange">Exchange</Link>
              <Link to="/futures">Futures</Link>
              <Link to="/finance">Finance</Link>
            </li>
          </ul>
        </div>
        <div>
          <Box className={classes.exchangelinks__icons}>
            <IconButton>
              <NotificationsOutlinedIcon
                sx={{ color: "white", width: "2.2rem", height: "2.2rem" }}
              />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon
                sx={{ color: "white", width: "2.2rem", height: "2.2rem" }}
              />
            </IconButton>
            <IconButton>
              <PersonOutlinedIcon
                sx={{ color: "white", width: "2.2rem", height: "2.2rem" }}
              />
            </IconButton>
          </Box>
        </div>
      </nav>
    </div>
  );
};

export default ExchangeNavlinks;
