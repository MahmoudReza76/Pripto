import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import FuturesTable from "./FuturesTable";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: { background: "aqua" },
          }}
          sx={{
            "& button.Mui-selected": {
              color: colors.cyan[400],
              fontSize: "1.8rem",
              fontWeight: "600",
            },
          }}
        >
          <Tab
            sx={{
              color: colors.grey[400],
              fontSize: "1.5rem",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
            label="Asset Details"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: colors.grey[400],
              fontSize: "1.5rem",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
            label=" Positions"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FuturesTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Positions
      </TabPanel>
    </Box>
  );
}
