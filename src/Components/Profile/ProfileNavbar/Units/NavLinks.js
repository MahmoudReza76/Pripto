import HomeIcon from "@mui/icons-material/Home";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import SmartToyIcon from "@mui/icons-material/SmartToy";
export const navLinks = [
  {
    path: "/",
    id: 0,
    title: "OverView",
    icon: <HomeIcon sx={{ fontSize: "2.5rem" }} className="nav-icon" />,
  },
  {
    path: "/Main",
    id: 1,
    title: "Main",
    icon: (
      <CurrencyExchangeIcon sx={{ fontSize: "2.5rem" }} className="nav-icon" />
    ),
  },
  {
    path: "/Trading",
    id: 2,
    title: "Trading",
    icon: <TrendingUpIcon sx={{ fontSize: "2.5rem" }} className="nav-icon" />,
  },
  {
    path: "/Futures",
    id: 3,
    title: "Futures",
    icon: (
      <MultilineChartIcon sx={{ fontSize: "2.5rem" }} className="nav-icon" />
    ),
  },
  {
    path: "/Margin",
    id: 4,
    title: "Margin",
    icon: <RocketLaunchIcon sx={{ fontSize: "2.5rem" }} className="nav-icon" />,
  },
  {
    path: "/TradingBot",
    id: 5,
    title: "Trading Bot",
    icon: <SmartToyIcon sx={{ fontSize: "2.5rem" }} className="nav-icon" />,
  },
];
