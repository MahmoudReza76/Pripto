import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      marginBottom="2rem"
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon sx={{ width: "2.2rem", height: "2.2rem" }} />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon sx={{ width: "2.2rem", height: "2.2rem" }} />
          ) : (
            <LightModeOutlinedIcon sx={{ width: "2.2rem", height: "2.2rem" }} />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon
            sx={{ width: "2.2rem", height: "2.2rem" }}
          />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon sx={{ width: "2.2rem", height: "2.2rem" }} />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon sx={{ width: "2.2rem", height: "2.2rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
