import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Limit from "./Limit";
import Market from "./Market";
import StopLimit from "./StopLimit";
import StopMarket from "./StopMarket";

function MarginTrading() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "space-between",
          }}
        >
          <TabList
            sx={{
              flexDirection: "space-between",
              "& button.Mui-selected": {
                color: "aqua",
                background: "#03b1b1c0",
              },
            }}
            onChange={handleChange}
            aria-label="lab API tabs example"
            TabIndicatorProps={{
              style: { background: "none" },
            }}
          >
            <Tab
              sx={{
                color: "#e0e0e0",
                background: "#666",
                padding: "0 4rem",
                textTransform: "captlize",
                margin: "1.2rem",
                fontSize: "1.3rem",
              }}
              label="Limit"
              value="1"
            />
            <Tab
              sx={{
                color: "#e0e0e0",
                background: "#666",
                padding: "0 3rem",
                margin: "1.2rem",
                fontSize: "1.3rem",
              }}
              label="Market"
              value="2"
            />
            <Tab
              sx={{
                color: "#e0e0e0",
                background: "#666",
                padding: "0 2rem",
                margin: "1.2rem",
                fontSize: "1.3rem",
              }}
              label="Stop-Limit"
              value="3"
            />
            <Tab
              sx={{
                color: "#e0e0e0",
                background: "#666",
                padding: "0 1rem",
                margin: "1.2rem",
                fontSize: "1.3rem",
              }}
              label="Stop-Market"
              value="4"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Limit />
        </TabPanel>
        <TabPanel value="2">
          <Market />
        </TabPanel>
        <TabPanel value="3">
          <StopLimit />
        </TabPanel>
        <TabPanel value="4">
          <StopMarket />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
export default MarginTrading;
