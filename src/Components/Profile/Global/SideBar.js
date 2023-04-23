import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import image from "../../../asset/Logo/Pripto-sel_1_.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useAuth } from "../../Forms/Firebase";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography sx={{ fontSize: "1.5rem" }}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollepsed] = useState(false);
  const [selected, setSelected] = useState("OverView");
  const currentUser = useAuth();
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${colors.greenAccent[300]} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colors.greenAccent[600]} !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollepsed(!isCollapsed)}
            icon={
              isCollapsed ? (
                <MenuOutlinedIcon sx={{ width: "2.2rem", height: "2.2rem" }} />
              ) : undefined
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="30px"
              >
                <img width="150rem" src={image} alt="priptologo" />
                <IconButton onClick={() => setIsCollepsed(!isCollapsed)}>
                  <MenuOutlinedIcon
                    sx={{ width: "2.2rem", height: "2.2rem" }}
                  />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar
                  sx={{
                    width: "8rem",
                    height: "8rem",
                    bgcolor: "aqua",
                    fontSize: "3.5rem",
                    fontWeight: "600",
                    color: "gray",
                  }}
                >
                  {currentUser?.email[0].toUpperCase()}
                </Avatar>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  sx={{
                    m: "10px 0 0 0",
                    fontSize: "1.4rem",
                    fontWeight: "500",
                  }}
                >
                  {currentUser?.email}
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="OverView"
              to="/profile/"
              icon={<HomeIcon sx={{ width: "2rem", height: "2rem" }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Main"
              to="Main"
              icon={
                <CurrencyExchangeIcon sx={{ width: "2rem", height: "2rem" }} />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Trade"
              to="Trade"
              icon={<TrendingUpIcon sx={{ width: "2rem", height: "2rem" }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Futures"
              to="Futures"
              icon={
                <MultilineChartIcon sx={{ width: "2rem", height: "2rem" }} />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Margin"
              to="Margin"
              icon={<RocketLaunchIcon sx={{ width: "2rem", height: "2rem" }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="TradingBot"
              to="TradingBot"
              icon={<SmartToyIcon sx={{ width: "2rem", height: "2rem" }} />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
